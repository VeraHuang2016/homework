/**
 * Created by Administrator on 2016/10/13 0013.
 */
(function(){
    var list=document.getElementById("list");
    var pre=document.getElementById("pre");
    var next=document.getElementById("next");

    function switchOver(num){
        var newLeft=parseInt(list.style.left)+num;
        if(newLeft<-8000){
            newLeft=0;
        }
        if(newLeft>0){
            newLeft=-7680;
        }
        list.style.left=newLeft+"px";
    }



    var timer;
    function roll(){
        timer=setInterval(function(){next.onclick()},1500);
    }

    function stop(){
        clearInterval(timer);
    }

    var box=document.getElementById("box");
    box.onmouseover=function(){
        stop();
    };
    box.onmouseout=function(){
        roll();
    };
    roll();

    var buttons=document.getElementById("buttons").getElementsByTagName("button");
    console.log(buttons);
    var index=0;

    function buttonShow(){
       document.getElementById("selected").id="";
        buttons[index].id="selected";
    }

    pre.onclick = function(){
        index-=1;
        if(index<0){
            index=6;
        }
        switchOver(1280);
        buttonShow();
    };

    next.onclick = function(){
        index+=1;
        if(index>6){
            index=0;
        }
        switchOver(-1280);
        buttonShow();
    };

    function clickButton(){
        for(var i=0;i<buttons.length;i++){
            buttons[i].textContent=i+1;
            (function(i) {
                buttons[i].onclick = function() {
                    var clickIndex = this.textContent-1;
                    var num =1280 * (index - clickIndex);
                    switchOver(num);
                    index = clickIndex;
                    buttonShow();
                }
            })(i)
        }
    }
    clickButton();
})();