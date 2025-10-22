"use strict";

const timeEl = document.getElementById("time");

function updateDate() {
  const curDate = Date.now();
  timeEl.textContent = curDate;
}

updateDate();

setInterval(updateDate, 1000);