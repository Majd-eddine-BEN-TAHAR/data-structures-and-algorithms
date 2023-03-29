/*
    The insertion sort algorithm works by iterating through the array, starting from the second 
    element (i.e., index 1), and comparing it to the elements before it. If the current element 
    is smaller than the previous element, it is moved back one position until it is in the correct order. 
    This process continues until the end of the array is reached, resulting in a sorted array.

    1. Start with the second element in the array (the first element is already considered sorted).
    2. Compare the second element with the first element. If the second element is smaller than the first element, swap them.
    3. Move on to the third element and compare it with the elements before it, one at a time, until it is in its correct position.
    4. Repeat step 3 for all the remaining elements in the list.
    5. The array is now sorted.
*/

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] > arr[i]) {
      for (let j = i - 1; j >= 0; j--) {
        if (arr[j] <= arr[j + 1]) break;

        let swap = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = swap;
      }
    }
  }
  return arr;
}

console.log(insertionSort([5, 2, 5, 1, 4]));
console.log(insertionSort([5, 2, 8, 6, 9, 10, 4, 6, 29, 9, 1]));
console.log(insertionSort([23, 4, 6, 0, 41, 83, 5, 7, 11, 3]));

/**
 * Insertion sort algorithm second version
 * this version will copy each element that's bigger than the current element into the next element until making 
    all the bigger elements to be pushed by one index, then we place the current element in that index
 * @param {Array} arr 
 * @returns {Array} 
 */
function insertionSort2(arr) {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }
  return arr;
}

console.log(insertionSort2([5, 3, 8, 4, 2]));
console.log(insertionSort2([5, 2, 8, 6, 9, 10, 4, 6, 29, 9, 1]));
