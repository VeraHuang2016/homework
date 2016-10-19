/**
 * Created by Administrator on 2016/10/19 0019.
 */
(function(){
    var div1=document.querySelector(".div1");
    var div2=document.querySelector(".div2");
    var context1=document.querySelector("#context1");
    var context2=document.querySelector("#context2");
    var tanchu=document.querySelector("#tanchu");
    var a=document.querySelectorAll("a");
    console.log(a);


    tanchu.onclick=function(){
        vanish();
        alert("弹出信息了~");
    };

    div1.addEventListener("contextmenu",function(e){

        var x=e.clientX;
        console.log(x);
        var y=e.clientY;
        console.log(y);
        context1.style.cssText="display:block;top:"+y+"px;left:"+x+"px";
        context2.style.cssText="display:none;";
        e.preventDefault();
    });
    document.onclick=function(){
        vanish();
    };

    div2.addEventListener("contextmenu",function(e){

        var x=e.clientX;
        console.log(x);
        var y=e.clientY-200;
        console.log(y);
        context2.style.cssText="display:block;top:"+y+"px;left:"+x+"px";
        context1.style.cssText="display:none;";
        e.preventDefault();
    });

    function vanish(){
        context1.style.cssText="display:none;";
        context2.style.cssText="display:none;";
    }
})();