module qiqiu{
/**
 * 资源配置类
 */    
    export class Configure {
        public static exist:qiqiu.Configure;
        public path:string; 
        public roleskin:string;
        public masterskin:string;
        public mapskin:string;
        public dishuNpc:string;
        public runAnimation:Array<string>;
        public standAnimation:Array<string>;
        public powerAnimation:Array<string>;
        constructor()
        {
            this.path = "img/";
            this.roleskin = this.path+"feidao.png";
            this.mapskin = this.path + "gameBg.png";
            this.masterskin = this.path + "qiqiu.png";
            this.dishuNpc = this.path + "dishu.png";
            this.standAnimation = [this.path + "20160101@2x.png",this.path + "20160102@2x.png",this.path + "20160103@2x.png",this.path + "20160104@2x.png",
            this.path + "20160105@2x.png",this.path + "20160106@2x.png",this.path + "20160107@2x.png",this.path + "20160108@2x.png",this.path + "20160109@2x.png",
            this.path + "20160110@2x.png",this.path + "20160111@2x.png",this.path + "20160112@2x.png",this.path + "20160113@2x.png",this.path + "20160114@2x.png",
            this.path + "20160115@2x.png",this.path + "20160116@2x.png",this.path + "20160117@2x.png",this.path + "20160118@2x.png"];
            this.runAnimation = [this.path + "20160201@2x.png",this.path + "20160202@2x.png",this.path + "20160203@2x.png",this.path + "20160204@2x.png",
            this.path + "20160205@2x.png",this.path + "20160206@2x.png",this.path + "20160207@2x.png",this.path + "20160208@2x.png",this.path + "20160209@2x.png",
            this.path + "20160210@2x.png",this.path + "20160211@2x.png",this.path + "20160212@2x.png",this.path + "20160213@2x.png",this.path + "20160214@2x.png",
            this.path + "20160215@2x.png",this.path + "20160216@2x.png",this.path + "20160217@2x.png",this.path + "20160218@2x.png"];
            this.powerAnimation = [this.path + "101701.png",this.path + "101702.png",this.path + "101703.png",this.path + "101704.png",
            this.path + "101705.png",this.path + "101706.png",this.path + "101707.png",this.path + "101708.png",this.path + "101709.png",
            this.path + "101710.png",this.path + "101711.png",this.path + "101712.png",this.path + "101713.png",this.path + "101714.png",
            this.path + "101715.png",this.path + "101716.png"];
            qiqiu.Configure.exist = this;
        }
        public static getConfigure():qiqiu.Configure
        {
            if(qiqiu.Configure.exist!=null)
            {
                return qiqiu.Configure.exist;
            }else
            {
                return new qiqiu.Configure();
            }
        }
    }
}