module qiqiu{
    import Sprite = Laya.Sprite;
    import SoundManager = Laya.SoundManager;
    /**
     * 游戏管理类
     */
    export class Manage extends Sprite{
        // 定义地图属性
        public map:qiqiu.Map;
        // 定义地鼠NPC属性
        public dishu:qiqiu.Npc;
        // 定义游戏UI层属性
        public gameui:qiqiu.Ui;
        // 定义刀属性
        public dao:qiqiu.Role;
        // 定义气球属性
        public qiqiu:qiqiu.Master;
        // 定义当前关卡通关之前的关卡
        public tongguan:boolean = false;
        // 当前关的重置点
        public point_:Array<number>;
        constructor()
        {
            super();
            // 创建地图实例
            this.map = new qiqiu.Map();
            this.addChild(this.map);
            // 创建NPC实例 地鼠
            this.dishu = new qiqiu.Npc();
            this.map.addChild(this.dishu);
            // 创建游戏UI层实例
            this.gameui = new qiqiu.Ui();
            this.addChild(this.gameui);
            // 创建角色实例 刀
            this.dao = new qiqiu.Role();
            this.addChild(this.dao);
            // 创建怪物实例 气球
            this.qiqiu = new qiqiu.Master();
            this.map.addChild(this.qiqiu);
            // 管理类加入舞台
            Laya.stage.addChild(this);
            // 给地图添加点击事件 (球会攻击)
            this.map._childs[0].once("click",this,this.attack);
            this.map._childs[1].once("click",this,this.attack);
            // 帧循环检测碰撞
            Laya.timer.frameLoop(1,this,this.timeloop);
            // 
            this.gameui.again.on("click",this,this.onclick);
            this.gameui.next.on("click",this,this.onclick);
            // 
            this.gameui.UiData();
        }
        public timeloop():void
        {
            if(Math.abs(this.dao.x-this.qiqiu.x)<=50 && Math.abs(this.dao.y - this.qiqiu.y)<=50)
            {
                // ------------------------------------------------------------------------
                Laya.timer.clear(this,this.timeloop);
                this.qiqiu.hp--;
                this.dao.destroy();
                // 爆炸
                if(this.qiqiu.hp <= 0)
                { 
                    this.qiqiu.timeLine.pause();
                    this.qiqiu.changeskin(); 
                    SoundManager.playSound("img/baopo.mp3");
                    SoundManager.setSoundVolume(0.5);
                    // 根据球的类型减少球的数量
                    this.qiqiu.type === 1 ? this.gameui.red_--:this.gameui.ye_--;
                    if(this.gameui.red_<=0 && this.gameui.ye_ <= 0)
                    {
                        // 通关         
                       
                    }
                    // 地鼠移动
                    this.dishu.move(this.gameui.level,this.gameui.sum);
                    
                    Laya.timer.once(1300,this,this.refresh);
                }
                if(this.qiqiu.hp >0)
                {
                    this.qiqiu.hit();
                    this.shuaxindao();
                }
            }
            //游戏结束/刷新刀
            if(this.dao.y<= -47)
            {
                this.dao.destroy();
                // ------------------------------------------------------------------------
                Laya.timer.clear(this,this.timeloop);
                this.shuaxindao();
            }   

        }
        // 刷新刀
        public shuaxindao():boolean
        {
            this.dao.timeLine.pause();
            if(this.dao){this.dao.destroy()}
            if(this.gameui.dao_nums<=0)
            {
                console.log("游戏结束");
                // 显示游戏结束面板
                Laya.timer.once(0,this,function () {
                    this.gameui.game_over.visible = true;
                    this.gameui.return.visible = true;
                    this.gameui.star_show(3);
                })
                // this.rest();
                return false;
            }
            this.dao = new qiqiu.Role();
            this.addChild(this.dao);
            this.map._childs[0].once("click",this,this.attack);
            this.map._childs[1].once("click",this,this.attack);
            // ---------------恢复循环---------------------------------------------------------------
            Laya.timer.frameLoop(1,this,this.timeloop);
            // 更新面板
            this.gameui.UiData();
        }
        // 球爆炸后的处理方法
        public refresh():void
        {
            this.qiqiu.timeLine.pause();
            if(this.qiqiu){this.qiqiu.destroy()}
            this.qiqiu = new qiqiu.Master();
            // 设置球的类型 
            this.setType();
            // 更新血量
            this.qiqiu.hp = Math.floor((this.gameui.level-1)/3)+1;
            if(this.qiqiu.type === 2)
            {
                this.qiqiu.move();
            }
            this.map.addChild(this.qiqiu);
            // 刷新飞刀
            this.shuaxindao();
            // 更新面板
            this.gameui.UiData();

        }
        // ----------------------------------------------------------------------------
        public onclick ():void
        {
            // 还原
            this.gameui.return.visible = false;
            this.gameui.star_hide();
            if(this.gameui.game_success.visible == true)
            {
                this.gameui.game_success.visible = false
            }
            if(this.gameui.game_over.visible == true){
                this.gameui.game_over.visible = false
            }
            this.rest();
        }
        // 数据的刷更新 通关/没通过   (所有数据根据level更新)
        public data():boolean
        {
            
            // 根据关卡确定每一关球的个数
            // 球的总数
            this.gameui.sum = Math.floor((this.gameui.level-1)/3)+3;
            // 每关球的HP刷新
            this.qiqiu.hp = Math.floor((this.gameui.level-1)/3)+1;
            // 每关的刀的数量 
            this.gameui.dao_nums = this.gameui.sum*this.qiqiu.hp+2;
            
            if(this.gameui.level%3===0)
            {
                this.gameui.red_= 1;
                this.gameui.ye_ = this.gameui.sum - 1;
                return false;
            }
            
            // 加1余0，红球为2
            if((this.gameui.level+1)%3===0)
            {
                this.gameui.red_ = 2;
                this.gameui.ye_ = this.gameui.sum - 2;
                return false;
            }
            
            // 加2余0，红球为1
            if((this.gameui.level+2)%3===0)
            {
                this.gameui.red_ = 3;
                this.gameui.ye_ = this.gameui.sum - 3;
                return false;
            }
            
        }
        //设置刷新的类型---------------------------------------------------------------------------
        public setType():boolean
        {
            var num:number = Math.random();
            // 当红球还有的时候 小于0.5  刷红球
            num < 0.5  ? this.qiqiu.type = 1:this.qiqiu.type = 2;
            if(this.gameui.red_ <=0 && this.gameui.ye_ > 0){this.qiqiu.type = 2}
            if(this.gameui.red_ > 0 && this.gameui.ye_ <= 0){this.qiqiu.type = 1}
            if(this.gameui.red_<=0 && this.gameui.ye_ <= 0)
            {
                // 通关 
                if(this.gameui.level%3 == 0)
                {
                    this.gameui.level++;
                    Laya.LocalStorage.setItem("level",this.gameui.level.toString()); 
                    this.gameui.game_success.visible = true;
                    this.gameui.return.visible = true;
                    this.gameui.star_show(5);
                    return false;                  
                } 
                this.gameui.level++;
                Laya.LocalStorage.setItem("level",this.gameui.level.toString());    
                this.gameui.donghua();    
                this.rest();   
            }
        }
        // 重新游戏
        public rest(num:number = this.gameui.level):void
        { 
            this.data();
            this.setpoint(this.gameui.level);
            this.gameui.UiData();
            this.refresh();
        }
        // 事件
        public attack():void
        {
            this.dao.attack();
            this.gameui.dao_nums--;
        }
        // 设置地鼠的位子
        public setpoint(level:number):void
        {
            // 1
             if((level+2)%3 == 0 && level%2 !== 0)
             {
                 this.point_= [700,360];
                 this.dishu.pos(700,360); 
             }
            //  2
             if((level+1)%3 ==0 && level%2 ==0)
             {
                this.point_ = [100,240];
                this.dishu.pos(100,240);
             }
            //  3
             if(level%3 == 0 && level%2 !==0)
             {
                 this.point_ = [700,120];
                 this.dishu.pos(700,120);
             }
            //  4
             if((level+2)%3==0 && level%2 ==0)
             {
                 this.point_ = [100,360];
                 this.dishu.pos(100,360);
             }
            //  5
             if((level+1)%3==0 && level%2 !== 0)
             {
                 this.point_ = [700,240];
                 this.dishu.pos(700,240);
             }
            //  6
             if(level%3 ==0 && level%2 ==0)
             {
                 this.point_ = [100,120];
                 this.dishu.pos(100,120);
             }
        }
        
    }  
}