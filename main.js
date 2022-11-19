var interval;
var timeleft = 0;
var secleft = 0;

function startTimer() {
  if (interval && !interval.ended) return;
  interval = setInterval(
    updateTime, 10
  );
}

function resetTimer() {
  pauseTimer();
  timeleft = -10;
  secleft = -10;
  updateTime();
}

function pauseTimer() {
  clearInterval(interval);
  interval = undefined;
}

function updateTime() {
  timeleft += 10;
  secleft += 10;
  let min = document.getElementById("min");
  let sec = document.getElementById("sec");
  let ms = document.getElementById("ms");
  let second = Math.floor(secleft / 1000);
  let minute = Math.floor(timeleft / 1000 / 60);
  if (second >= 60) {
    secleft = 0;
    second = 0;
  }
  ms.innerHTML = `.${Math.floor((timeleft % 1000) / 10)}`;
  sec.innerHTML = second < 10 ? `0${second}` : second;
  min.innerHTML = minute < 10 ? `0${minute}` : minute;
}
