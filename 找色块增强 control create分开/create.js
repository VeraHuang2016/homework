/**
 * Created by Administrator on 2016/10/9 0009.
 */
(function(){
    //初始的行数
    var rowNum = 2;
    //游戏的背景图
    var backgroundView;
    //步数
    var step = 0;
    //等级
    var level = 0;
    //难度选择的上一个按钮
    var preSelectedItem;
    //初始色块的不透明度
    var opacity = 1.0;
    //特殊色块与其他色块 不透明度的差值
    var opacitySpace = 0.3;
    //特殊色块的不透明度
    var specialOpacity = function () {
        return opacity-opacitySpace;
    };
    //判断是否正在游戏
    var isPlaying = false;
    function createView() {

        backgroundView = document.createElement("div");
        backgroundView.id = "backgroundView";
        document.body.appendChild(backgroundView);

        // 颜色的数组
        var colors = ["#9E413B","#33539E","#9E1A8D","#259E2D"];
        //随机抽选颜色
        var arcColorIndex = parseInt(Math.random()*100)%colors.length;

        //色块的数量：行数*行数
        var colorViewNum = rowNum*rowNum;

        // 随机的色块标识
        var specialColorViewID = parseInt(Math.random()*10000)%colorViewNum;

        for (var i=0;i<colorViewNum;i++){
            //创建色块
            var colorView = ColorView(rowNum,colors[arcColorIndex],opacity);
            backgroundView.appendChild(colorView);

            //找到特殊的色块 给他一个点击事件
            if (i===specialColorViewID){
                colorView.style.opacity = specialOpacity();
                colorView.onclick = function () {
                    success();
                };
            }else {
                // 普通色块的点击事件
                colorView.onclick = function () {
                    failed();
                };
            }
        }

    }
    window.createView=createView;

    function finish() {

        // document.querySelector("#controlBackgroundView p")
        document.getElementById("levelTitle").textContent = "等级:"+level+"级";
        document.getElementById("stepTitle").textContent = "步数:"+step+"步";
        // 替换上一个界面
        //移除
        document.body.removeChild(backgroundView);
        //重新加载游戏界面
        createView();
    }
    window.finish=finish;
})();