/**
 * Created by Administrator on 2016/9/29 0029.
 */
(function (){
    var box=document.createElement("div");
    document.body.appendChild(box);
    box.style.cssText="width:365px;height:365px;background:#dedede;margin:0 auto;";
    var colorList=["#7fff00","#ff7f50","#dc143c","#008b8b","#b8860b","#9932cc","#e9967a","#8fbc8f","#483d8b","#9400d3"];
    function sDiv(){
        var divColor=parseInt(Math.random()*10);
        var divOpacity=parseInt(Math.random()*64);
        for(var i=0;i<64;i++){
            var iDiv=document.createElement("div");
            iDiv.style.cssText="width:40px;height:40px;border-radius:3px;margin-top:5px;margin-left:5px;float:left;";
            box.appendChild(iDiv);
            iDiv.style.background=colorList[divColor];
            if (i===divOpacity){
                iDiv.style.opacity=".8";
                iDiv.onclick=function (){
                    if (confirm("选择正确！是否刷新页面再玩一次？")){
                        location.reload(true);
                    }
                }
            }else {
                iDiv.onclick=function (){
                    if (confirm("很遗憾，选择错误...是否刷新页面再玩一次？")){
                        location.reload(true);
                    }
                }
            }
        }

        var hint=document.createElement("div");
        document.body.appendChild(hint);
        hint.style.cssText="width:300px;height:100px;margin:20px auto;font-size:20px;font-weight:bold;text-align:center;";
        hint.style.color=colorList[divColor];
        hint.textContent="请点击颜色较浅的方块^_^";
    }
    sDiv();














})();