/*
  -- find the maximum sum of a subarray in an array. A subarray is a contiguous block of elements from the array.
  -- find the maximum sum of subarrayLength consecutive elements in arr
  -- use the sliding window pattern
*/
function maxSubArraySum(arr, subarrayLength) {
  if (subarrayLength > arr.length) return null;

  let maxSum = 0;
  let consecutivesFirstIndex = 0;
  let sumConsecutives = 0;

  for (let i = 0; i < arr.length; i++) {
    if (i < subarrayLength) {
      maxSum = maxSum + arr[i];
      sumConsecutives = maxSum;
      continue;
    }

    sumConsecutives = sumConsecutives - arr[consecutivesFirstIndex] + arr[i];
    if (sumConsecutives > maxSum) maxSum = sumConsecutives;
    consecutivesFirstIndex++;
  }

  return maxSum;
}

console.log(maxSubArraySum([1, 2, 3, 4, 5, 6, 7], 2)); // 13
console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 4)); // 17
console.log(maxSubArraySum([4, 2, 1, 6], 1)); // 6
console.log(maxSubArraySum([4, 2, 1, 6, 2], 4)); // 13
console.log(maxSubArraySum([], 3)); // null
