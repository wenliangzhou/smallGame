// 程序入口
Laya.MiniAdpter.init();
Laya.init(800,480,Laya.WebGL);
class GameMain{
    constructor()
    {
        // Laya.DebugPanel.init();
        Laya.stage.scaleMode = Laya.Stage.SCALE_EXACTFIT;
        Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;
        Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE;
        Laya.stage.screenMode = Laya.Stage.SCREEN_HORIZONTAL;
        Laya.loader.load("res/atlas/img.atlas",Laya.Handler.create(this,this.init))
    }
    public init():void
    {    
        new qiqiu.Shouye();
    }
}  
new GameMain();  