
function currentTime() {
    var currDate = new Date(); /* creating object of Date class */
    var currHour = currDate.getHours();
    var currMinit = currDate.getMinutes();
    var currSecond = currDate.getSeconds();
    var currMonth = currDate.getMonth();
    var currYear = currDate.getFullYear();
    var currDay = currDate.getDay();


    currHour = updateTime(currHour);
    currMinit = updateTime(currMinit);
    currSecond = updateTime(currSecond);
    currYear = updateTime(currYear);
    currMonth = updateTime(currMonth);
    currDay = updateTime(currDay);


    document.getElementById("clock").innerText = currHour + " : " + currMinit + " : " + currSecond; /* adding time to the div */
    document.getElementById("date").innerText = currDay + "-" + currMonth  +"-" +currYear ; 
    var t = setTimeout(function(){ currentTime() }, 1000); /* setting timer */
  }
  
  function updateTime(k) {
    if (k < 10) {
      return "0" + k;
    }
    else {
      return k;
    }
  }
  
  currentTime();