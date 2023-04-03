/*
    // In the code you'll find 3 ways to implement the quick sort 

    -- First way:
    sortAndGetPivotIndex function logic
    1. Set pivotIndex to startIndex, and pivot to the value of arr[startIndex].
    2. Loop through the array from index startIndex+1 to endIndex.
    3. For each element, compare it to the pivot value.
    4. If the element is less than the pivot, increment pivotIndex and swap the element with the element at pivotIndex.
    5. After the loop finishes, swap the pivot element with the element at pivotIndex.
    6. Return the pivotIndex value.

    quick sort function logic
    1. If start < end:
        1. Get the pivot index by calling sortAndGetPivotIndex with the current start and end indices.
        2. Recursively call quickSort with the subarray to the left of the pivot (i.e., from start to pivotIndex - 1).
        3. Recursively call quickSort with the subarray to the right of the pivot (i.e., from pivotIndex + 1 to end).
    2. Return the sorted array.

*/

/**
    * Sorts an array using the quick sort algorithm.
    * The default values for start and end are only used for the first iteration of the function call
    * 
    @param {Array} arr - The array to sort.
    @param {Number} start - The starting index of the subarray to sort. Defaults to 0.
    @param {Number} end - The ending index of the subarray to sort. Defaults to the last index of the array.
    @returns {Array} - The sorted array.
    */
function quickSort(arr, start = 0, end = arr.length - 1) {
  if (start < end) {
    let pivotIndex = sortAndGetPivotIndex(arr, start, end);
    quickSort(arr, start, pivotIndex - 1); // sort the left part first
    quickSort(arr, pivotIndex + 1, end); // sort the right part, here before entring to the right part we are 100% sure that the left part numbers are sorted and that they are all less than the numbers in the right part
  }
  return arr;
}

/**
    * 1. Sorts a partition of an array around a pivot element and returns the index of the pivot.
    * 2. This function will not sort the entire array correctly, but will only rearrange the
    * elements by putting the smaller ones at the left and the bigger ones at the right of the pivot.
    * 3. Position the pivot in its correct place in the array
    *
    @param {Array} arr - The array to find the pivot index for.
    @param {Number} startIndex - The starting index of the subarray to find the pivot index for.
    @param {Number} endIndex - The ending index of the subarray to find the pivot index for.
    @returns {Number} - The index of the pivot element in the final sorted array.
    */
function sortAndGetPivotIndex(arr, startIndex, endIndex) {
  let pivotIndex = startIndex;
  let pivot = arr[startIndex];
  for (let i = startIndex + 1; i <= endIndex; i++) {
    // If the current element is less than the pivot element, swap it with the element at the next position of the pivot index
    if (arr[i] < pivot) {
      pivotIndex++;
      swap(arr, i, pivotIndex);
    }
  }
  // Swap the pivotIndex element to be in its sorted position
  swap(arr, startIndex, pivotIndex);
  return pivotIndex;
}

function swap(arr, i, j) {
  const swap = arr[i];
  arr[i] = arr[j];
  arr[j] = swap;
}

function quickSort2(arr, start = 0, end = arr.length - 1) {
  if (start < end) {
    const pivotIndex = sortAndGetPivotIndex2(arr, start, end);
    quickSort2(arr, start, pivotIndex - 1);
    quickSort2(arr, pivotIndex + 1, end);
  }
  return arr;
}


function sortAndGetPivotIndex2(arr, start, end) {
  const pivot = arr[end]; // Choose the last element in the partition as the pivot element
  let pivotIndex = start - 1; // Initialize the pivot index to the first element of the section, it's minus 1 because in the end we are always returning return pivotIndex + 1;

  for (let currentIndex = start; currentIndex < end; currentIndex++) {
    // If the current element is less than the pivot element, swap it with the element at the next position of the pivot index
    if (arr[currentIndex] < pivot) {
      pivotIndex++;
      swap(arr, pivotIndex, currentIndex);
    }
  }

  swap(arr, pivotIndex + 1, end); // Swap the pivot element with the element at the pivot index to put it in its correct position
  return pivotIndex + 1; // Return the index of the pivot element
}

console.log(quickSort2([23, 4, 6, 0]));
console.log(quickSort2([5, 2, 8, 6, 9, 10, 4, 6, 29, 1]));
console.log(quickSort2([23, 4, 6, 0, 41, 83, 5, 7, 11, 3]));

function quickSort3(arr) {
  // Base case
  if (arr.length <= 1) {
    return arr;
  }

  // Choose the first element as the pivot
  const pivot = arr[0];

  // Create arrays to hold values less than and greater than the pivot
  const left = [];
  const right = [];

  // Loop through the array, starting at index 1
  for (let i = 1; i < arr.length; i++) {
    // If the value is less than the pivot, add it to the left array
    if (arr[i] < pivot) {
      left.push(arr[i]);
    }
    // If the value is greater than or equal to the pivot, add it to the right array
    else {
      right.push(arr[i]);
    }
  }

  // Recursively call quickSort on the left and right arrays
  return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort3([23, 4, 6, 0]));
console.log(quickSort3([5, 2, 8, 6, 9, 10, 4, 6, 29, 1]));
console.log(quickSort3([23, 4, 6, 0, 41, 83, 5, 7, 11, 3]));
