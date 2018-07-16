module qiqiu {
    import Sprite = Laya.Sprite;
    import Tween = Laya.Tween;
    /**
     * 地图类
     */    
    export class Map extends Sprite
    {
        public temp:qiqiu.Manage;
        constructor()
        {
            super();
            this.init();
            // this.on("click",this,this.move);
        }
        public init():void
        {
            var bg1:Sprite = new Sprite();
            var bg2:Sprite = new Sprite();
            bg1.loadImage(qiqiu.Configure.getConfigure().mapskin);
            bg2.loadImage(qiqiu.Configure.getConfigure().mapskin);
            bg2.pos(0,-480);
            this.addChild(bg1);
            this.addChild(bg2);
            // this.size(800,760);
        }
        public move():void
        {
            Tween.to(this,{y:480},700,null,Laya.Handler.create(this,function () {
                this.temp = this.parent as qiqiu.Manage;
                this.pos(0,0);
                console.log(this.temp.gameui.level);
                this.temp.setpoint(this.temp.gameui.level+1);
                console.log("ok");
            }));   
        }
    }
}