module qiqiu{
    import Sprite = Laya.Sprite;
    import Tween = Laya.Tween;
    export class Npc extends Sprite{
        public body:Laya.Animation;
        // 当前动作
        public action:string = "";
        public direction:string = "left";
        private cached:boolean = false;
        public temp:qiqiu.Map;
        constructor()
        {
            super();
            this.init();
        }
        public init():void
        {
            if(this.cached === false)
            {
                this.cached = true;
                // 缓存NPC动画
                Laya.Animation.createFrames(qiqiu.Configure.getConfigure().runAnimation,"run");
                Laya.Animation.createFrames(qiqiu.Configure.getConfigure().standAnimation,"stand");
               
            }
            // 创建身体
            if(!this.body)
            {
                this.body = new Laya.Animation();
                this.addChild(this.body);
                // this.body.on(Laya.Event.COMPLETE,this,this.onPlayComplete);
            }
            this.pos(700,360);
            this.PlayAction("stand");
        }

        public onPlayComplete():void{
            this.body.stop();
            this.PlayAction("stand");
        }

        // 需要通过不同的类型，来播放动画，需要从外部获得类型。this.type+"_"+
        PlayAction(action:string):void{
            // 本身记录从外部传进来的动作；
            this.action = action;
            this.body.play(0,true,action);
            this.body.pos(-40,-40);
            
            if(this.direction == "left")
            {
                this.skewY = 180;
            }else
            {
                this.skewY = 0;
            }
        }    

        public move(level:number,sum:number):void
        {
            this.temp = this.parent as qiqiu.Map;
            // 往右
            if(level%2===0 && level%3!==0)
            {
                
                this.direction = "right";
                Tween.to(this,{x:this.x+600/sum},1000,null,Laya.Handler.create(this,function(){
                    if(this.x>=695)
                    {
                        this.direction = "left"
                        Tween.to(this,{y:this.y-120},1000,null,Laya.Handler.create(this,this.onPlayComplete)); 
                        return false;
                    }
                    this.onPlayComplete();       
                }));
            }
            // 往左
            if(level%2!==0 && level%3!==0)
            {
                this.direction = "left"
                Tween.to(this,{x:this.x-600/sum},1000,null,Laya.Handler.create(this,function(){
                    if(this.x<=105)
                    {
                        this.direction = "right";
                        Tween.to(this,{y:this.y-120},1000,null,Laya.Handler.create(this,this.onPlayComplete));
                        return false;
                    }
                    this.onPlayComplete();         
                }));
            
            }
            // 往右向上
            if(level%2===0 && level%3===0)
            {
                this.direction = "right";
                Tween.to(this,{x:this.x+600/sum},600,null,Laya.Handler.create(this,function(){
                    if(this.x>=695)
                    {
                        console.log("移动1")
                        this.temp.move();
                        this.direction = "left"
                        Tween.to(this,{y:this.y-240},600,null,Laya.Handler.create(this,this.onPlayComplete));
                        
                        return false;
                    }
                    this.onPlayComplete();        
                }));
            }
            // 往左向上
            if(level%2!==0 && level%3===0)
            {
                
                this.direction = "left"
                Tween.to(this,{x:this.x-600/sum},600,null,Laya.Handler.create(this,function(){
                    if(this.x<=105)
                    {
                        console.log("移动2")
                        this.temp.move();
                        this.direction = "right";
                        Tween.to(this,{y:this.y-240},600,null,Laya.Handler.create(this,this.onPlayComplete));
                        return false;
                    }   
                    this.onPlayComplete();  
                }));
            } 
            this.body.stop();
            this.PlayAction("run");          
        }
    }
}