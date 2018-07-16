module qiqiu {
    export class Shouye extends ui.shouyeUI {
        public game:qiqiu.Manage;
        constructor()
        {
            super();
            this.init();
        }
        public init():void
        {
            Laya.stage.addChild(this);
            this.start_game.on("click",this,this.startGame);
            this.restgame.on("click",this,this.onclick);
            this.yes.on("click",this,this.restdata);
            this.no.on("click",this,this.restdata);
            this.zOrder = 2;
        }
        public startGame():void
        {
            this.visible = false;
            if(!this.game)
            {
                this.game = new qiqiu.Manage();
            }else
            {
                // this.game.hight_score_ = 0;
                // this.game.restGame();
            }
            this.game.rest();
        }
        public move():void
        {
            this.title.x = 820;
            this.title.alpha = 0;
            Laya.Tween.to(this.title,{x:193,alpha:1},500);
        }
        public onclick():void
        {
            this.tankuang.visible = true;
        }
        public restdata(e):void
        {
            if(e.target == this.yes)
            {
                Laya.LocalStorage.setItem("level","1");
                if(this.game)
                {
                    this.game.gameui.level = 1;
                }
            }
            this.tankuang.visible = false;
        }
    }
}