/**
 * Created by Administrator on 2016/10/18 0018.
 */
(function (){
    var turn=$("#turn");
    var turn2=$("#turn2");

    turn.click(function(){
        turn.animate({width:"0"},1000,function(){
            turn2.animate({width:"100px"},1000);
        });
    });

    turn2.click(function(){
        turn2.animate({width:"0"},1000,function(){
            turn.animate({width:"100px"},1000);
        });
    });
})();