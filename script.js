'use strict'
// Global variables
// Initializing values.
let hour=0;
let minute=0;
let second=0;
let count=0;

// taking timer as flag variable.
let timer = false;

// onclick fuctions
function start(){
    timer=true;
    stopwatch(); //function call
}

function stop(){
    timer=false;
}

function reset(){
    timer=false;
    // reset all value to zero.
    hour=0;
    minute=0;
    second=0;
    count=0;
    // showing values on screen after reset
    document.getElementById("count").innerHTML="00";
    document.getElementById("second").innerHTML="00";
    document.getElementById("minute").innerHTML="00";
    document.getElementById("hour").innerHTML="00";
}

// main function
function stopwatch(){
    //increasing the values
    if(timer==true){
        count++;
        if(count==100){
            second++;
            count=0;
        }
        if(second==60){
            minute++;
            second=0;
        }
        if(minute==60){
            hour++;
            minute=0;
            second=0;
        }
        // updating values in string
        let hrString = hour;
        let minString = minute;
        let secString = second;
        let countString = count;
 
      if(hour < 10){
         hrString = "0" + hrString;
      }
      if(minute < 10){
         minString = "0" + minString;
      }
      if(second < 10){       
         secString = "0" + secString;
      }
      if(count < 10){
         countString = "0" + countString;
         count++;
      }
        document.getElementById("count").innerHTML=countString;
        document.getElementById("second").innerHTML=secString;
        document.getElementById("minute").innerHTML=minString;
        document.getElementById("hour").innerHTML=hrString;
       
        setTimeout("stopwatch()",10) //calling function after 10ms.
    }
}