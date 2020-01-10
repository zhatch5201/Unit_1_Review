'use strict';
/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Review Assignment

   Event Timer
   Author: 
   Date:   

*/
showClock();
setInterval('showClock()', 1000);
// I'm having this function show the date for the july 4th of 2020, that way I don't have to work with weird random numbers
function showClock() {
	var thisDay = new Date();
	// I also don't know if this is what it wants because the date/time won't change becuase it has passed and preset
	var newDate = new Date();
	var localDate = thisDay.toLocaleDateString();
	// console.log(thisDay + ' ' + localDate);
	document.getElementById('currentTime').innerHTML =
		'<span>' + thisDay.toLocaleTimeString() + '</span><span>' + localDate + '</span>';
	var j4Date = nextJuly4(thisDay);
	j4Date.setHours(21);
	var jDate = new Date('July 4, 2020 21:00:00');
	var days = (jDate - newDate) / (1000 * 60 * 60 * 24);
	var hrs = (days - Math.floor(days)) * 24;
	var mins = (hrs - Math.floor(hrs)) * 60;
	var secs = (mins - Math.floor(mins)) * 60;
	// console.log(days, hrs, mins, secs);
	document.getElementById('dLeft').innerHTML = Math.floor(days);
	document.getElementById('hLeft').innerHTML = Math.floor(hrs);
	document.getElementById('mLeft').innerHTML = Math.floor(mins);
	document.getElementById('sLeft').innerHTML = Math.floor(secs);
}

function nextJuly4(currentDate) {
	var cYear = currentDate.getFullYear();
	var jDate = new Date('July 4, 2019');
	jDate.setFullYear(cYear);
	if (jDate - currentDate < 0) jDate.setFullYear(cYear + 1);
	return jDate;
}
