// Begin with a sorted array of elements and a target value to search for.
// Set the left pointer to the first index of the array and the right pointer to the last index of the array.
// While the left pointer is less than or equal to the right pointer:
// a. Calculate the middle pointer by taking the average of the left and right pointers.
// b. If the value at the middle pointer is equal to the target, return the middle pointer.
// c. If the value at the middle pointer is less than the target, set the left pointer to the middle pointer + 1, the +1 is used to avoid the last number because we already tested it
// d. If the value at the middle pointer is greater than the target, set the right pointer to the middle pointer - 1, the -1 is used to avoid the last number because we already tested it
// If the target is not found in the array, return -1 to indicate that the target is not present.

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let middle;

  while (left <= right) {
    middle = Math.round((right + left) / 2);
    if (target === arr[middle]) return middle;
    else if (target > arr[middle]) left = middle + 1;
    else right = middle - 1;
  }
  return -1;
}

console.log(binarySearch([1, 4, 6, 7, 8, 9, 12, 14, 20, 22, 29, 30, 100], 30));
console.log(binarySearch([1, 2], 1));
console.log(binarySearch([1, 2], 5));
console.log(binarySearch([0], 0));
console.log(binarySearch([0, 1, 2], 1));
