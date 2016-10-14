/**
 * Created by Administrator on 2016/10/14 0014.
 */
(function(){
    var box2=document.getElementById("box2");
    var list2=document.getElementById("list2");
    var pre2=document.getElementById("pre2");
    var next2=document.getElementById("next2");
    var buttons2=document.querySelectorAll("#buttons2 button");
    console.log(buttons2);

    function switchOver(num){
        var newLeft=parseInt(list2.style.left)+num;
        console.log(list2.style.left);
        if(newLeft<-6000){
            newLeft=0;
        }
        if(newLeft>0){
            newLeft=5120;
        }
        list2.style.left=newLeft+"px";
    }

    var timer;
    function roll(){
        timer=setInterval(function(){next2.onclick()},3000);
    }
    function stop(){
        clearInterval(timer);
    }
    box2.onmouseover=function(){
        stop();
    };
    box2.onmouseout=function(){
        roll();
    };
    roll();

    var index=0;
    function buttonShow(){
        document.getElementById("selected").id="";
        buttons2[index].id="selected";
    }

    pre2.onclick=function(){
        index-=1;
        if(index<0){
            index=4;
        }
        switchOver(1280);
        buttonShow();
    };

    next2.onclick=function(){
        index+=1;
        if(index>4){
            index=0;
        }
        switchOver(-1280);
        buttonShow();
    };

    function buttonClick(){
        for (var i=0;i<buttons2.length;i++){
            buttons2[i].textContent=i+1;
            (function(i){
                buttons2[i].onclick=function(){
                    var count=this.textContent-1;
                    var num=1280*(index-count);
                    switchOver(num);
                    index=count;
                    buttonShow()
                }
            })(i);
        }
    }
    buttonClick();

})();