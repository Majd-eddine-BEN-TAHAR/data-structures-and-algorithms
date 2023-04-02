/*
  -- find a pair of integers in an array that sum to a given target integer.
  -- use frequency counter pattern
*/
function findPairSummingToTarget(arr, target) {
  const freqCounter = {};
  for (let val of arr) {
    if (freqCounter[target - val]) {
      return [val, target - val];
    }
    freqCounter[val] = true;
  }
  return null;
}

console.log(findPairSummingToTarget([1, 2, 3, 4, 5], 7)); // [2, 5]
console.log(findPairSummingToTarget([10, 20, 30, 40, 50], 60)); // [10, 50]
console.log(findPairSummingToTarget([5, 10, 15, 20], 30)); // [10, 20]
console.log(findPairSummingToTarget([1, 2, 3], 7)); // null
