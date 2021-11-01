
function productOfAll (nums) {
  const left = [];
  const right = [];
  const result = [];
  left[0] = 1;
  right[nums.length - 1] = 1;

  for (let i = 1; i < nums.length; i++) {
      left[i] = left[i - 1] * nums[i - 1]
  }

  for (let j = nums.length - 2; j >= 0; j--) {
      right[j] = right[j + 1] * nums[j + 1]
  }

  for (let k = 0; k < nums.length; k++) {
      result[k] = left[k] * right[k]
  }
  return result;

}

console.log(productOfAll([1, 2, 3, 4]))
