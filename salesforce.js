


// Power  of 3  of 5
// 0       1     1
// 1       3     5
// 2       9     25
// 3       27    125
// 4       81    625
// 5       243   3125
// 6       729   15625


function getIdealNums(low, high) {
  // Write your code here
  let idealCount = 0;

  for (let i = 0; i < high; i++) {
    for (let j = i; j < high; j++) {
      // console.log(i, j, 3**i * 5**j, 3**j * 5**i);
      if ((3**i * 5**j >= low && 3**i * 5**j <= high) && i !== j) {
        console.log(3**i * 5**j)
        idealCount++;
      }
      if ((3**j * 5**i >= low && 3**j * 5**i <= high) && i !== j) {
        console.log(3**j * 5**i)
        idealCount++;
      }
      if ((3**i * 5**j > high) && (3**j * 5**i > high)) {
        break;
      }
    }
    if (3**i * 5**i > high) {
      break;
    }
  }

  return idealCount;
}


console.log(getIdealNums(400000, 500000));
