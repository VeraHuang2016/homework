/**
 * Created by Administrator on 2016/10/20 0020.
 */
(function(){

    //var firstLyric;
    var audio=document.getElementById("audio");
    //console.log(audio);
    var lyricContainer=document.getElementById("lyricContainer");

    function getLyric(url) {

        var request=new XMLHttpRequest();
        request.open("get",url,true);
        request.responseType="text";
        request.onload=function () {
            var lyric=request.response;
            // firstLyric=lyric;
            //console.log(lyric);
            lyric=parseLyric(lyric);
            console.log(lyric);

            audio.ontimeupdate=function (e) {
                for (var i=0;i<lyric.length;i++){
                    if (this.currentTime>lyric[i][0]){
                        lyricContainer.innerHTML=lyric[i][1];
                        //console.log(lyric[i][1]);
                    }
                }
                //console.log(audio.currentTime);

            }
        };
        request.send();
    }
    getLyric("Horse.lrc");
    //console.log(firstLyric);
    function parseLyric(text) {
        var lines=text.split("\n");
        var pattern=/\[\d{2}:\d{2}.\d{2}\]/g;
        var result=[];

        while (!pattern.test(lines[0])){
            lines=lines.slice(1);
        };

        lines[lines.length-1].length===0&&lines.pop();
        lines.forEach(function (v,i,a){
            var time=v.match(pattern);
            var value=v.replace(pattern,"");

            time.forEach(function (v1,i1,a1) {
                var t=v1.slice(1,-1).split(":");
                result.push([parseInt(t[0],10)*60+parseFloat(t[1]),value]);
            })
        })
        result.sort(function (a,b) {
            return a[0]-b[0];
        })
        return result;
    }
    //

    //



    //var lyric=parseLyric(firstLyric);



})();