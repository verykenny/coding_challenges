/*
Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers.
Then print the respective minimum and maximum values as a single line of two space-separated long integers.

Set tracker for minNum and maxNum number to first number in array
Set tracker for minSum and maxSum sums

Loop through array
  if current number is less than minNum
    add current minNum to the maxSum (if < infinity)
    set min number to current number

    add current number to minSum

  if current number is greter than maxNum
    add current maxNum to the minSum (if > -infinity)
    set max number to current number

    add current number to maxSum

  else
    add current number to minSum
    add current number to maxSum
*/


function miniMaxSum(arr) {
  // Write your code here
  let minNum = arr[0];
  let maxNum = arr[0];
  let minSum = 0;
  let maxSum = -0;

  arr.forEach(num => {
    if (num < minNum) {
      if (maxSum += minNum);

      minNum = num;
      minSum += num;
    } else if (num > maxNum) {
      minSum += maxNum;

      maxNum = num;
      maxSum += num;
    } else if (num > minNum && num < maxNum) {
      minSum += num;
      maxSum += num;
    }
  });
  console.log(minSum, maxSum);
}



miniMaxSum([1, 2, 3, 4, 5]);
