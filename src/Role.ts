
module qiqiu {
    import Sprite = Laya.Sprite;
    import TimeLine = Laya.TimeLine;
    import Tween = Laya.Tween;
    import SoundManager = Laya.SoundManager;
 /**
 * 角色类
 */   
    export class Role extends Sprite{
        // 移动时间线
        public timeLine:TimeLine = new TimeLine();
        // 飞行缓动属性
        public attack_Tween;
        // 飞行状态
        public flystate:boolean = false;
        // 攻击属性
        public agressivity:number;
        
        constructor()
        {
            super();
            this.init();
        }
        public init():void
        {
            this.loadImage(qiqiu.Configure.getConfigure().roleskin);
            var bond:Laya.Rectangle = this.getBounds();
            this.pivot(bond.width/2,bond.height/2);
            this.pos(400,430);
            this.move();
        }
        public move():void
        {
            this.x = 400;
            this.timeLine.addLabel("turnright",0).to(this,{x:700},1000,null,0)
                        .addLabel("turnleft",0).to(this,{x:100},2000,null,0)
                        .addLabel("turnleft",0).to(this,{x:400},1000,null,0);
            this.timeLine.play(0,true);
        }
        
        public attack():void
        {
            // 改变角色飞行状态
            
            this.flystate = true;
            this.timeLine.pause();
            this.attack_Tween = Tween.to(this,{y:-80,rotation:-720},1000,null,null,0,null);
            SoundManager.playSound("img/feidao.mp3");
            SoundManager.setSoundVolume(0.5);
        }
        
    }
}