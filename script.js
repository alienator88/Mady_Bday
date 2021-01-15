    var time = 1199;
    startTimer(time);
    
    function startTimer(duration) {
      var timer = duration, minutes, seconds;
      var count = setInterval(function () {
          minutes = parseInt(timer / 60, 10);
          seconds = parseInt(timer % 60, 10);
    
          minutes = minutes < 10 ? "0" + minutes : minutes;
          seconds = seconds < 10 ? "0" + seconds : seconds;

          document.getElementById("minutes").innerText = minutes;
          document.getElementById("seconds").innerText = seconds;
    
          if (--timer < 0) {
              timer = duration;
              clearInterval(count);
              hideTimer();
          }
      }, 1000);
    } 


    function hideTimer() {
      let headline = document.getElementById("headline"),
              countdown = document.getElementById("countdown"),
              content = document.getElementById("content");
              reset = document.getElementById("resetbtn");

              headline.innerText = "That was 20 minutes, get up and walk around!";
              countdown.style.display = "none";
              content.style.display = "block";
              reset.style.display = "inline-block";
    }

    function showTimer() {
      let headline = document.getElementById("headline"),
              countdown = document.getElementById("countdown"),
              content = document.getElementById("content");
              reset = document.getElementById("resetbtn");

              headline.innerText = "Every 20 minutes get up and walk around for 20 minutes while looking 20 feet ahead";
              countdown.style.display = "block";
              content.style.display = "none";
              reset.style.display = "none";
              document.getElementById("minutes").innerText = "20";
              document.getElementById("seconds").innerText = "00";
    }

    function restartAll() {
      showTimer();
      startTimer(time);
    }