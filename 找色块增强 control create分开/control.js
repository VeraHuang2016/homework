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
    function controlView() {
        //创建控制视图的背景图
        var controlBackgroundView = document.createElement("div");
        controlBackgroundView.id = "controlBackgroundView";
        document.body.appendChild(controlBackgroundView);

        //显示等级的元素
        var levelTitle = document.createElement("h1");
        levelTitle.id = "levelTitle";
        levelTitle.textContent = "等级:"+level+"级";
        controlBackgroundView.appendChild(levelTitle);

        //    难度的按钮
        var degreeBackgroundView = document.createElement("ul");
        controlBackgroundView.appendChild(degreeBackgroundView);
        var degreeTitles = ["易","中","难"];
        for (var i=0;i<degreeTitles.length;i++){
            var item = document.createElement("li");
            item.textContent = degreeTitles[i];
            degreeBackgroundView.appendChild(item);
            //默认选择的难度
            if (i===degreeTitles.length-1){
                item.style.background = "#25aeff";
                preSelectedItem = item;
            }
            item.onclick = function () {
                if(isPlaying){
                    alert("正在游戏中不可调节难度！");
                    return;
                }
                //设置选择难度 不透明度的初始值
                switch (this.textContent){
                    case "难":
                        opacity = 1.0;
                        opacitySpace = 0.3;
                        break;
                    case "中":
                        opacity = 0.8;
                        opacitySpace = 0.5;
                        break;
                    case "易":
                        opacity = 0.8;
                        opacitySpace = 0.7;
                        break;
                    default:
                }

                //重新加载界面
                finish();

                preSelectedItem.style.background = "#ffffff";
                this.style.background = "#25aeff";
                preSelectedItem = this;
            }
        }

        //    步数
        var stepTitle = document.createElement("p");
        stepTitle.textContent = "步数:"+step+"步";
        stepTitle.id = "stepTitle";
        controlBackgroundView.appendChild(stepTitle);

    }
    window.controlView=controlView;

    function success() {
        isPlaying = true;
        // 让行数+1
        // rowNum++;

        // 难：rowNum++;
        // 中：step%3===0 rowNum++;
        // 易：step%5===0 rowNum++;

        // 每成功一次 步数增加一次
        step++;

        // var rand = Math.random()+0.01;
        // opacity = rand<0.3?0.3:rand;
        //难度选择与界面关联
        //根据选择的li 上面的文字去判断
        switch (preSelectedItem.textContent){
            case "难":
                opacitySpace-=0.02;
                opacitySpace = opacitySpace===0.1?0.1:opacitySpace;
                rowNum++;
                break;
            case "中":
                if (step%3===0){
                    rowNum++;
                    opacitySpace-=0.01;
                    opacitySpace = opacitySpace===0.1?0.1:opacitySpace;
                }
                break;
            case "易":
                opacitySpace = 0.3;
                if (step%5===0){
                    opacitySpace-=0.01;
                    opacitySpace = opacitySpace===0.1?0.1:opacitySpace;
                    rowNum++;
                }
                break;
            default:
        }

        console.log(opacity,opacitySpace,specialOpacity());
        // 等级 每成功五次增加一级
        if (step%5===0){
            level++;
        }

        finish();

    }
    window.success=success;
    //失败
    function failed() {
        isPlaying = false;
        // 让行数重置
        rowNum = 2;
        step = 0;
        level = 0;
        finish();

    }
    window.failed=failed;
    //游戏完成



})();