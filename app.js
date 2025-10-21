const timeEl = document.getElementById("time");

function updateDate() {
  const curDate = Date.now();
  timeEl.textContent = curDate;
}

setInterval(updateDate, 1000);
