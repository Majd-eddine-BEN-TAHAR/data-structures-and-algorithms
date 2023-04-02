/*
  -- find the indices of the first pair of elements in an array that sum up to zero. 
  suppose you have an array of integers, we need to find the first pair of elements 
  whose sum is equal to zero, and return their indices in the array, if there is no such
  pair, the function should return -1.
  -- use the Two-Pointers Pattern and Binary Search Pattern. 
*/
function findPairWithZeroSumIndex(arr) {
  let left = 0;
  let right = arr.length - 1;
  let indexOfForstPositiveNumber = -1; // initialize indexOfForstPositiveNumber to -1

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] >= 0) {
      indexOfForstPositiveNumber = mid; // update indexOfForstPositiveNumber to current index
      right = mid - 1; // move to the left side of the array
    } else {
      left = mid + 1; // move to the right side of the array
    }
  }
  if (indexOfForstPositiveNumber == -1) {
    return -1;
  }

  let left1 = 0;
  let right1 = indexOfForstPositiveNumber;

  while (left1 < indexOfForstPositiveNumber) {
    console.log(left1, right1, [arr[left1], arr[right1]]);
    if (arr[left1] + arr[right1] == 0) return [left1, right1];
    else if (arr[left1] + arr[right1] < 0) left1++;
    else right1++;
  }

  return -1;
}

console.log(findPairWithZeroSumIndex([1, 2, 3, -2])); // [1, 3]
console.log(findPairWithZeroSumIndex([0, -1, 2, -3, 4])); // [0, 1]
console.log(findPairWithZeroSumIndex([1, 2, 3, 4, 5])); // -1
