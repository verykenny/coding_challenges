/*
Given a time in -hour AM/PM format, convert it to military (24-hour) time.

Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

Test if string ends in AM or PM
  If string ends in AM:
    check if string begins with 12
      if so, replace 12 with 00
  If string ends in PM:
    check if string beings with 12
      if not, add 12 to beginning of string

  remove am or pm
  return string
*/


function timeConversion(s) {
  // Write your code here
  let time = s.split(':');
  const isAM = time[time.length - 1].includes('AM');
  time[2] = time[2].slice(0, 2);

  if (isAM) {
    if (time[0] === '12') {
      time[0] = '00';
    };
  } else {
    if (time[0] !== '12') {
      const newHour = parseInt(time[0]) + 12;
      time[0] = newHour.toString();
    };
  }
  return time.join(':');
}


console.log(timeConversion("12:01:00AM"));
