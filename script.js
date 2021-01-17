function addYt() {
  document.querySelector('#yt').insertAdjacentHTML(
    'afterbegin',
    `<iframe src="https://www.youtube-nocookie.com/embed/fTbEpGZyseA?rel=0&modestbranding=1&autohide=1&mute=0&showinfo=0&controls=0&autoplay=1"  width="10" height="10"  frameborder="0"></iframe>`
  )
}

(function () {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  let birthday = "Jan 25, 2021 14:20:00",
  //let birthday = "Jan 17, 2021 12:21:00",

    countDown = new Date(birthday).getTime(),
    x = setInterval(function () {

      let now = new Date().getTime(),
        distance = countDown - now;

      document.getElementById("days").innerText = Math.floor(distance / (day)),
        document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
        document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
        document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

      //do something later when date is reached
      if (distance < 0) {
        let headline = document.getElementById("headline"),
          countdown = document.getElementById("countdown"),
          content = document.getElementById("content");
        yt = document.getElementById("yt");

        headline.innerText = "Happy Birthday Mady!!!";
        countdown.style.display = "none";
        content.style.display = "block";
        //yt.style.display = "block";
        startFW();
        addYt();

        clearInterval(x);
      }
      //seconds
    }, 0)
}());