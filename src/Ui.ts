module qiqiu{
    import Sprite = Laya.Sprite;
    import Tween = Laya.Tween;
    /**
     * 游戏UI层
     */
    export class Ui extends ui.GameOverUI
    {
        // 定义父属性
        public temp:qiqiu.Manage;
        // level
        public level:number = parseInt(Laya.LocalStorage.getItem("level"));
        // 气球总数
        public sum:number = 3;
        // 气球个数
        public red_:number = 3;
        public ye_:number = 0;
        // 刀的把数
        public dao_nums:number = 3;
        // 动画
        public power:Laya.Animation;
        
        constructor()
        {
            super();
            this.init();
        }
        public init():void
        {
            this.red_num.text = "x"+this.red_.toString();
            this.ye_num.text = "x"+this.ye_.toString(); 
            this.zOrder = 20;
            this.return.on("click",this,this.home);
            Laya.Animation.createFrames(qiqiu.Configure.getConfigure().powerAnimation,"power")
        }
        public home():void
        {   
            this.temp = this.parent as qiqiu.Manage;   
            Laya.stage._childs[1].visible = true;
            Laya.stage._childs[1].move();
            this.temp.onclick();
        }
        // 星星的显示方法 接收一个 个数参数
        public star_show(num:number):void
        {
            this.starbox.visible = true;
            var star:Sprite;
            for(var i=1;i<=num;i++)
            {
                 star = this.starbox.getChildByName("star_"+i) as Sprite;
                 star.visible = true;
            }
        }
        // 隐藏星星方法
        public star_hide():void
        {
            this.starbox.visible = false;
            var star:Sprite;
            for(var i=1;i<=5;i++)
            {
                star = this.starbox.getChildByName("star_"+i) as Sprite;
                star.visible = false;
            }
        }
        // 更新面板数据
        public UiData():void
        {
            this.temp = this.parent as qiqiu.Manage;
            this.dao_num.text = "x"+this.dao_nums.toString();
            this.red_num.text = "x"+this.red_.toString();
            this.ye_num.text = "x"+ this.ye_.toString();
            this.guan_num.text = this.level.toString();
            this.hptext.text = this.temp.qiqiu.hp.toString();
        }
        // 创建一个动画  让它显示。并移动
        public donghua ():void
        {
            // 创建战斗力动画
          
                this.power = new Laya.Animation();
                this.addChild(this.power);
                this.power.play(0,false,"power");
                this.power.pos(250,100);
                this.power.on(Laya.Event.COMPLETE,this,this.onPlayComplete);
            
        }

        public onPlayComplete():void
        {
            this.power.destroy();
        }
    }
}
