/**
 * Created by Administrator on 2016/10/8 0008.
 */
/*
 * 找色块
 * 1.记录过了多少关
 * 2.等级显示 5关涨一级
 *
 * 调节难度
 *   让颜色每五关更接近一些
 *   设置初始的难度等级
 *       初级 每五关增加一次行数
 *       中级 每三关增加一次行数
 *       高级 每一关增加一次行数
 * */


var buttonBox = document.createElement("div");
document.body.appendChild(buttonBox);
buttonBox.style.cssText="width:400px;height:70px;background:#fff;margin:0 auto;";


var difficult1=document.createElement("button");
buttonBox.appendChild(difficult1);
difficult1.style.cssText="width:80px;height:30px;margin:20px 0 0 40px;font-size:20px;font-weight:bold;text-align:center;";
difficult1.textContent="初级";


var difficult2=document.createElement("button");
buttonBox.appendChild(difficult2);
difficult2.style.cssText="width:80px;height:30px;margin:20px 0 0 40px;font-size:20px;font-weight:bold;text-align:center;";
difficult2.textContent="中级";

var difficult3=document.createElement("button");
buttonBox.appendChild(difficult3);
difficult3.style.cssText="width:80px;height:30px;margin:20px 0 0 40px;font-size:20px;font-weight:bold;text-align:center;";
difficult3.textContent="高级";

var difficult=document.createElement("div");
document.body.appendChild(difficult);
difficult.style.cssText="width:300px;height:30px;margin:20px auto;font-size:20px;font-weight:bold;text-align:center;";


var customs=document.createElement("div");
document.body.appendChild(customs);
customs.style.cssText="width:300px;height:30px;margin:20px auto;font-size:20px;font-weight:bold;text-align:center;";


var classNum=document.createElement("div");
document.body.appendChild(classNum);
classNum.style.cssText="width:300px;height:30px;margin:20px auto;font-size:20px;font-weight:bold;text-align:center;";


var box = document.createElement("div");
document.body.appendChild(box);
box.style.cssText="width:400px;height:400px;background:#dedede;margin:0 auto;";
var colorList=["#7fff00","#ff7f50","#dc143c","#008b8b","#b8860b","#9932cc","#e9967a","#8fbc8f","#483d8b","#9400d3"];

function CreateDiv(divRow){
    var smallDiv=document.createElement("div");
    var divWidth=(400-5*(divRow+1))/divRow;
    smallDiv.style.cssText="width:"+divWidth+"px;height:"+divWidth+"px;margin:5px 0 0 5px;float:left;";
    return smallDiv;
}

var boxView;
var divRow=2;

var customsNum=1;
var classN=0;
var opacityClass=0.7;
var difficultW="初级";

function Game(){
    var divNum=divRow*divRow;
    boxView = document.createElement("div");
    document.body.appendChild(boxView);
    boxView.style.cssText="width:400px;height:400px;background:rgba(0,0,0,0);position:relative;top:-400px;left:467px;";
    var lightColorNum=parseInt(Math.random()*1000)%divNum;
    var divColorNum=parseInt(Math.random()*10);
    for (var i=0;i<divNum;i++){
        var smallDiv=CreateDiv(divRow);
        smallDiv.style.background=colorList[divColorNum];
        boxView.appendChild(smallDiv);
        if (i==lightColorNum){
            smallDiv.style.opacity=opacityClass;
            smallDiv.onclick=function (){
                success();
            }
        }else{
            smallDiv.style.opacity="1";
            smallDiv.onclick=function (){
                fail();
            }
        }
    }
    customs.textContent="第"+customsNum+"关";
    customsNum++;
    if (customsNum>2&&(customsNum-1)%5==1){
        classN++;
        opacityClass=opacityClass+0.05;
    }
    classNum.textContent="你现在的等级是第"+classN+"级";
    difficult1.onclick=function (){
        difficultW="初级";
        customsNum=1;
        divRow=2;
        document.body.removeChild(boxView);
        Game();
        return difficultW;
    };
    difficult2.onclick=function (){
        difficultW="中级";
        customsNum=1;
        divRow=2;
        document.body.removeChild(boxView);
        Game();
        return difficultW;
    };
    difficult3.onclick=function (){
        difficultW="高级";
        customsNum=1;
        divRow=2;
        document.body.removeChild(boxView);
        Game();
        return difficultW;
    };
    difficult.textContent="现在的等级是："+difficultW;
    if (difficultW=="初级"){
        if (customsNum>2&&(customsNum-1)%5==0){
            divRow++;
        }
    }
    if (difficultW=="中级"){
        if (customsNum>2&&(customsNum-1)%3==0){
            divRow++;
        }
    }
    if (difficultW=="高级"){
        divRow++;
    }
}

function success(){
    document.body.removeChild(boxView);
    Game();
}
function fail(){
    if (confirm("很遗憾，选择错误...是否刷新页面再玩一次？")){
        location.reload(true);
    }
    customsNum=1;
    divRow=2;
    document.body.removeChild(boxView);
    Game();
}
Game();
