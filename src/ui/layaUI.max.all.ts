
import View=laya.ui.View;
import Dialog=laya.ui.Dialog;
module ui {
    export class GameOverUI extends View {
		public pause:Laya.Sprite;
		public red_num:laya.display.Text;
		public ye_num:laya.display.Text;
		public dao_num:laya.display.Text;
		public guan_num:laya.display.Text;
		public hptext:laya.display.Text;
		public game_over:Laya.Box;
		public again:Laya.Image;
		public game_success:Laya.Box;
		public next:Laya.Image;
		public starbox:Laya.Box;
		public return:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":800,"visible":true,"mouseThrough":true,"mouseEnabled":true,"height":480},"child":[{"type":"Box","props":{"y":20,"x":25,"mouseThrough":true},"child":[{"type":"Sprite","props":{"y":39,"x":637,"width":60,"var":"pause","pivotY":30,"pivotX":30,"height":60}},{"type":"Text","props":{"y":11,"x":109,"var":"red_num","text":"x 0","fontSize":25,"color":"#e8d1d1","bold":true}},{"type":"Image","props":{"y":5,"x":74,"width":22,"skin":"img/redqiu.png","height":36}},{"type":"Image","props":{"y":6,"x":160,"width":22,"skin":"img/yeqiu.png","height":34}},{"type":"Text","props":{"y":10,"x":196,"var":"ye_num","text":"x 0","fontSize":25,"color":"#e8d1d1","bold":true}},{"type":"Image","props":{"y":0,"x":-6,"width":10,"skin":"img/feidao.png","height":36}},{"type":"Text","props":{"y":10,"x":18,"width":38,"var":"dao_num","text":"x 3","height":27,"fontSize":25,"color":"#e8d1d1","bold":true}},{"type":"Text","props":{"y":7,"x":390,"text":"Level :","fontSize":30,"color":"#c5ee24","bold":true}},{"type":"Text","props":{"y":10,"x":498,"width":41.7041015625,"var":"guan_num","text":"1","height":30,"fontSize":30,"color":"#e8d1d1","bold":true}},{"type":"Text","props":{"y":11,"x":308,"var":"hptext","text":"1","fontSize":25,"color":"#e8d1d1","bold":true}},{"type":"Text","props":{"y":10,"x":252,"text":"HP:","fontSize":25,"color":"#c5ee24","bold":true}}]},{"type":"Box","props":{"y":0,"x":0,"visible":false,"var":"game_over","mouseThrough":false,"mouseEnabled":true},"child":[{"type":"Image","props":{"visible":true,"skin":"img/black.jpg"}},{"type":"Image","props":{"skin":"img/GameOverBg.png"}},{"type":"Image","props":{"y":329,"x":481,"width":127,"var":"again","skin":"img/again.png","pivotX":1,"height":38}},{"type":"Text","props":{"y":250,"x":280,"text":"！不要气馁，再接再厉~~","fontSize":30,"font":"SimHei","color":"#141111"}}]},{"type":"Box","props":{"y":0,"x":0,"visible":false,"var":"game_success","mouseThrough":false,"mouseEnabled":true},"child":[{"type":"Image","props":{"y":0,"x":0,"visible":true,"skin":"img/black.jpg"}},{"type":"Image","props":{"y":0,"x":0,"skin":"img/succeedBg.png"}},{"type":"Image","props":{"y":329,"x":500,"width":104,"var":"next","skin":"img/next.png","height":40}},{"type":"Text","props":{"y":253,"x":343,"text":"小李飞刀！！！","fontSize":30,"font":"SimHei","color":"#141111"}}]},{"type":"Box","props":{"y":170,"x":387,"visible":false,"var":"starbox"},"child":[{"type":"Image","props":{"width":51,"visible":false,"skin":"img/star.png","name":"star_1","height":47}},{"type":"Image","props":{"y":1,"x":168,"width":51,"visible":false,"skin":"img/star.png","name":"star_4","height":47}},{"type":"Image","props":{"y":1,"x":222,"width":51,"visible":false,"skin":"img/star.png","name":"star_5","height":48}},{"type":"Image","props":{"y":1,"x":112,"width":51,"visible":false,"skin":"img/star.png","name":"star_3","height":47}},{"type":"Image","props":{"y":1,"x":55,"width":51,"visible":false,"skin":"img/star.png","name":"star_2","height":47}}]},{"type":"Image","props":{"y":329,"x":304,"width":101,"visible":false,"var":"return","skin":"img/return.png","height":38}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.GameOverUI.uiView);

        }

    }
}

module ui {
    export class shouyeUI extends View {
		public title:Laya.Image;
		public start_game:Laya.Image;
		public restgame:Laya.Image;
		public tankuang:Laya.Image;
		public yes:Laya.Image;
		public no:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":800,"visible":true,"mouseThrough":false,"mouseEnabled":true,"height":480},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"img/ShouYeBg.png"}},{"type":"Image","props":{"y":11,"x":203,"var":"title","skin":"img/title2.png"}},{"type":"Image","props":{"y":334,"x":388,"var":"start_game","skin":"img/startBt.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":326,"x":531,"width":50,"var":"restgame","skin":"img/chongwanBt.png","height":53}},{"type":"Image","props":{"y":207,"x":196,"visible":false,"var":"tankuang","skin":"img/tankuang.png","mouseThrough":false,"mouseEnabled":true},"child":[{"type":"Image","props":{"y":139,"x":282,"width":52,"var":"yes","skin":"img/shi1.png","height":52}},{"type":"Image","props":{"y":141,"x":90,"width":52,"var":"no","skin":"img/fou1.png","height":52}},{"type":"Text","props":{"y":55,"x":63,"text":"！是否要重置游戏数据","fontSize":30,"font":"SimHei","color":"#141111"}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.shouyeUI.uiView);

        }

    }
}
