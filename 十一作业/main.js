/**
 * Created by vera on 2016/10/7.
 */
//作业：
//创建三个按钮 点击按钮的时候  更改按钮上的文字
//var changContent = ["按钮1","按钮2","按钮3"];文字数组

var changContent = ["按钮1","按钮2","按钮3"];
var box=document.createElement("div");
document.body.appendChild(box);
box.style.cssText="width:360px;height:100px;border:1px solid;margin:0 auto;";

    var iButton = document.createElement("button");
    box.appendChild(iButton);
    iButton.textContent = "按钮1";
    iButton.style.cssText = "width:80px;height:20px;background:#666;margin:30px 20px;float:left;";
        iButton.onmousedown = function () {
            iButton.textContent = "点击！";
        };
        iButton.onmouseup = function () {
            iButton.textContent ="按钮1";
        };
var iButton1 = document.createElement("button");
box.appendChild(iButton1);
iButton1.textContent = "按钮2";
iButton1.style.cssText = "width:80px;height:20px;background:#666;margin:30px 20px;float:left;";
iButton1.onmousedown = function () {
    iButton1.textContent = "点击！";
};
iButton1.onmouseup = function () {
    iButton1.textContent ="按钮2";
};
var iButton2 = document.createElement("button");
box.appendChild(iButton2);
iButton2.textContent = "按钮3";
iButton2.style.cssText = "width:80px;height:20px;background:#666;margin:30px 20px;float:left;";
iButton2.onmousedown = function () {
    iButton2.textContent = "点击！";
};
iButton2.onmouseup = function () {
    iButton2.textContent ="按钮3";
};
