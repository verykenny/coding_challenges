/*
In Place Bubble Sort

Sort array in place by iterating through the array and swapping adjacent elements if they are out of order.
Do this repeatedly until the array is sorted.

Set a flag to indicate whether the array is sorted.

Iterate through the array
check if current element is greater than the next element
  if so, swap them and set flag to false
  if not, continue
at the end of the iteration, if the flag is set to false, then continue iterating
at the end of the iteration, if the flag is set to true, then the array is sorted
*/
const array = [2, 1, 4, 7, 3, 6, 5];

const bubbleSort = (array) => {
  let sorted = false;
  while (!sorted) {
    sorted = true;
    for (let i = 1; i < array.length; i++) {
      if (array[i - 1] > array[i]) {
        [array[i], array[i - 1]] = [array[i - 1], array[i]]
        sorted = false;
      }
    }
  }
  return array
};

console.log(bubbleSort(array))
