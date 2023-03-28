/*
    The selection sort algorithm works by repeatedly finding the minimum element from the 
    unsorted part of the array and placing it at the beginning of the sorted part of the array.

    1. Start with the first element of the array and assume it to be the minimum element.
    2. Compare the minimum element with the next element of the array.
    3. If the next element is smaller than the current minimum element, consider the next element as the new minimum.
    4. Continue this process until the end of the array is reached.
    5. Repeat steps 2 through 4 for the remaining elements of the array until the entire array is sorted.
*/

function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let lowestIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[lowestIndex] > arr[j]) lowestIndex = j;
    }
    // es6 swap
    [arr[i], arr[lowestIndex]] = [arr[lowestIndex], arr[i]];
  }
  return arr;
}

console.log(selectionSort([5, 2, 8, 6, 9, 10, 4, 6, 29, 1]));
console.log(selectionSort([23, 4, 6, 0, 41, 83, 5, 7, 11, 3]));
