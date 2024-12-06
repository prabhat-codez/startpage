`use strict`;

// display time as hh:mm
const options = {
    timeZone : Intl.DateTimeFormat().resolvedOptions().timeZone, // Automatically get user's timezone
    hour12 : false,
    hour:  "2-digit",
    minute: "2-digit",
}

const locale = navigator.languages != undefined ? navigator.languages[0] : navigator.language; // Get user's locale to format clock accordingly

myTimer(); // Initialise clock otherwise you wait a second before it appears

var myVar = setInterval(function () {
    myTimer();
  }, 1000);

function myTimer() {
    var today = new Date();

    var time = today.toLocaleTimeString(locale, options);

    document.getElementById("time").textContent = time;
}

// google search function
const f = document.getElementById('form');
const q = document.getElementById('query');
const google = 'https://www.google.com/search?q=';
const site = 'pagedart.com';

function submitted(event) {
  event.preventDefault();
  const url = google + q.value;
  const win = window.open(url, '_blank');
  win.focus();
}

f.addEventListener('submit', submitted);