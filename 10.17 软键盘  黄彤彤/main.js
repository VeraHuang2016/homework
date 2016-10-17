/**
 * Created by Administrator on 2016/10/17 0017.
 */
(function(){
    var target=$("#target");
    var liVal=$("ul li");
    liVal.click(function(){
        var temp=$(this).html();
        console.log(temp);

        if(temp=="backspace"){
            var val=target.val();
            target.val(val.substr(0,val.length - 1));
            target.val();
        }else {
            target.val(target.val()+temp);
        }
    })
})();