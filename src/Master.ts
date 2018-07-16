
module qiqiu {
    import Sprite = Laya.Sprite;
    import TimeLine = Laya.TimeLine;
/**
 *怪物类
 */
    export class Master extends Sprite {
        // 球的move时间线属性
        public timeLine:TimeLine = new TimeLine();
        public timeLine2:TimeLine;
        // HP属性
        public hp:number = 1;
        // speed 属性：移动速度
        public speed:number = 1800;
        // 球的类型
        public type:number = 1;
        // loop 
        public loop:number;
        constructor()
        {
            super();
            this.init();
        }
        public init():void
        {   
            this.loadImage(qiqiu.Configure.getConfigure().masterskin);
            var bond:Laya.Rectangle = this.getBounds();
            this.pivot(bond.width/2,bond.height/2);
            var x:number = Math.random()*600+100;
            this.pos(x,110);           
        }
        public changeskin(skin = "img/qiqiubz.png"):void
        {
            this.graphics.clear();
            this.loadImage(skin);
        }
        public move(time:number = this.speed):void
        {
            this.x = 100;
            this.timeLine.addLabel("turnrig",0).to(this,{x:700},time,null,0)
                         .addLabel("turnle",0).to(this,{x:100},time,null,0);
            this.timeLine.play(0,true);
        }
        // 受击特效
        public hit ():void
        {
            this.loop = 1;
            this.timeLine2 = new TimeLine();
            this.timeLine2.addLabel("small",0).to(this,{scaleX:0.5, scaleY:0.5,alpha:0.1},200,null,0)
                         .addLabel("big",0).to(this,{scaleX:1, scaleY:1,alpha:1},200,null,0);
            this.timeLine2.play(0,true);
            this.timeLine2.on(Laya.Event.COMPLETE,this,this.onComplete);
        }
        public onComplete():void
        {
            this.loop++;
            if(this.loop ==3)
            {
                this.timeLine2.destroy();
            } 
        }
    }
}