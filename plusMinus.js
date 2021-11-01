/*
Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero.
Print the decimal value of each fraction on a new line with  places after the decimal.

Create counters for positive nevative and zero

  Loop through array
    if element is positive, increment positive counter
    if element is negative, increment negative counter
    if element is zero, increment zero counter

    retrun array of each counter divided by the length of the array and round to 6 decimal places
*/


function plusMinus(arr) {
  let positive = 0;
  let negative = 0;
  let zero = 0;

  arr.forEach((num) => {
    if (num > 0) {
      positive++;
    } else if (num < 0) {
      negative++;
    } else {
      zero++;
    }
  });

  // return [(positive / arr.length).toFixed(6), (negative / arr.length).toFixed(6), (zero / arr.length).toFixed(6)];
  console.log((positive / arr.length).toFixed(6));
  console.log((negative / arr.length).toFixed(6));
  console.log((zero / arr.length).toFixed(6));
}


console.log(plusMinus([-4, 3, -9, 0, 4, 1]));
