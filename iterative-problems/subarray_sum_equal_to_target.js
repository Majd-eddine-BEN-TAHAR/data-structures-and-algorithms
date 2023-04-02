/*
  -- find a subarray (contiguous block of elements) in an array of integers that sums up to a given target sum.
  -- use the sliding window pattern,
*/

function subarraySumEqualToTarget(arr, targetSum) {
  let left = 0;
  let right = 0;
  let sum = 0;

  while (right < arr.length) {
    sum += arr[right];

    while (sum > targetSum) {
      sum -= arr[left];
      left++;
    }

    if (sum === targetSum) {
      return arr.slice(left, right + 1);
    }

    right++;
  }

  return null; // subarray not found
}

console.log(subarraySumEqualToTarget([1, 3, 2, 5, 6, 4, 7], 14)); // output: [2, 5, 6, 4]
console.log(subarraySumEqualToTarget([1, 2, 3, 4, 5], 15)); // output: null
console.log(subarraySumEqualToTarget([4, 2, 5, 1, 6], 7)); // output: [4, 2, 1]
console.log(subarraySumEqualToTarget([3, 5, 8, 10, 2], 14)); // output: [5, 8, 10, 2]
