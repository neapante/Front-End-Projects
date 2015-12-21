var h1 = document.getElementsByTagName('h1')[0],
    start = document.getElementById('start'),
    stop = document.getElementById('stop'),
    clear = document.getElementById('clear'),
    seconds = 0, minutes = 0, hours = 0,
    t,
    sessionLength = 25, breakLength = 5;

var wav = 'http://www.oringz.com/oringz-uploads/sounds-882-solemn.mp3';
var audio = new Audio(wav);
			

var state = "work";
function add() {
    sessionLength--;
  breakLength--;
  console.log("this is session Length : " + sessionLength);
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }
    
    h1.textContent = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);
    
    console.log (minutes);
  console.log (sessionLength);
  console.log (breakLength);
    
    if (minutes > sessionLength && state == "work") {
            h1.textContent = "00:00:00";
            seconds = 0; minutes = 0; hours = 0;
            state = "rest";
            audio.play();
      
    } else if (minutes > breakLength && state == "rest") {
            h1.textContent = "00:00:00";
            seconds = 0; minutes = 0; hours = 0;
            state = "work";
            audio.play();
    }
    
  sessionLength++;
  breakLength++;
    timer();
}
function timer() {
    t = setTimeout(add, 1000);
}
//The function below starts the timer on load
//timer();


/* Start button */
start.onclick = timer;

/* Stop button */
stop.onclick = function() {
    clearTimeout(t);
}

/* Clear button */
clear.onclick = function() {
    h1.textContent = "00:00:00";
    seconds = 0; minutes = 0; hours = 0;
}


  $("#addSL").click(function() {
    sessionLength = sessionLength + 1;
    $("#displaySL").text(sessionLength);
    //console.log(sessionLength);
  });

  $("#subSL").click(function() {
    sessionLength = sessionLength - 1;
    $("#displaySL").text(sessionLength);
    //console.log(sessionLength);
  });

  $("#addBL").click(function() {
    breakLength = breakLength + 1;
    $("#displayBL").text(breakLength);
    //console.log(sessionLength);
  });

  $("#subBL").click(function() {
    breakLength = breakLength - 1;
    $("#displayBL").text(breakLength);
    //console.log(sessionLength);
  });
