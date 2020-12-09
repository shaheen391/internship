var msec=0, min=0, sec=0;
var minhead=document.getElementById("min");
var sechead=document.getElementById("sec");
var msechead=document.getElementById("msec");
function timer(){
    msec++
    msechead.innerHTML=msec;
    if(msec>=100){
        sec++
        sechead.innerHTML=sec;
        msec=0;
    }
    else if(sec>=60){
        min++
        minhead.innerHTML=min;
        sec=0;
    }
}

function start(){
    var btn= document.getElementById("start_btn").disable=true;
    interval=setInterval(timer,10);
    
    

}
function stop(){
    var btn1= document.getElementById("start_btn").disable=false;
    clearInterval(interval);
    
}
function reset(){
    hour=0;
    min=0;
    sec=0;
    hourhead.innerHTML="0:0";
    minhead.innerHTML="0:0";
    sechead.innerHTML="0:0";
    stop();
}