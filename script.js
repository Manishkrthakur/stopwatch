 let start=document.getElementById("startBtn");
 let stop=document.getElementById("stopBtn");
 let reset=document.getElementById("resetBtn");
 let timer=document.getElementById("timer");
 let timerDisplay=document.querySelector(".timerDisplay");

 let msec = 0;
 let secs = 0;
 let mins =0;

 let timerId=null;

 start.addEventListener('click',function(){
    if(timerId !== null ){
        clearInterval(timerId);
    }
      timerId = setInterval(starttimer,10);
 });


 stop.addEventListener('click',function(){
    clearInterval(timerId);
    
 });

  reset.addEventListener('click',function(){
    clearInterval(timerId);
    timerDisplay.innerHTML='00:00:00';
    
 });

 function starttimer(){
    msec++;
    if(msec == 100){
        msec=0;
        secs++;
        if(secs == 60){
            sec=0;
            mins++;
        }
    }
    // let msecstring=msec<10?'0$(msec)':msec;

    let msecstring;
    if(msec < 10){
        msecstring='0${msec}';
    }
    else{
        msecstring=msec;
    }

    let secstring;
    if(sec < 10){
        secstring='0${sec}';
    }
    else{
        secstring=sec;
    }

    let minstring;
    if(mins < 10){
        minstring='0${mins}';
    }
    else{
        minstring=mins;
    }

    timerDisplay.innerHTML='${minstring}:${ secstring}:${ msecstring}'

 }