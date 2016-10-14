/**
 * Created by Administrator on 2016/10/14 0014.
 */

(function(){
    var box=document.getElementById("box");
    var list=document.querySelectorAll("#list img");
    var buttons=document.querySelectorAll("#buttons button");
    var pre=document.getElementById("pre");
    var next=document.getElementById("next");

    function switchOver(index){
        for (var i=0;i<list.length;i++){
            list[i].index=i;
            buttons[i].index=i;
            list[i].style.zIndex=10-i;
            list[i].style.opacity="0";
            buttons[i].style.backgroundColor="moccasin";
            buttons[i].style.color="#fff";
        }
        list[index].style.opacity="1";
        buttons[index].style.backgroundColor="#fff";
        buttons[index].style.color="moccasin";
    }
    switchOver(0);

    var timer;
    function roll(){
        timer=setInterval(function(){next.onclick()},3000);
    }
    function stop(){
        clearInterval(timer);
    }
    box.onmouseover=function(){
        stop();
    };
    box.onmouseout=function(){
        roll();
    };
    roll();

    var count=0;
    pre.onclick=function(){
        count-=1;
        if(count<0){
            count=4;
        }
        switchOver(count);
    };

    next.onclick=function(){
        count+=1;
        if(count>4){
            count=0;
        }
        console.log(count);
        switchOver(count);
    };

    function buttonClick(){
        for (var i=0;i<buttons.length;i++){
            buttons[i].onclick=function(){
                count=event.target.index;
                switchOver(count);
            }
        }
    }
    buttonClick();

})();