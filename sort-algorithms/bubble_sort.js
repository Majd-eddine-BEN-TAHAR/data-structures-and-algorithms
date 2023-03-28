/*
    In bubble sort, you will always make a pass over the entire array and put the largest value you
    found at the top. In the same pass, you arrange the other elements, and then you come back to make
    other passes until you sort the whole array. But always in the next pass, you subtract one from the 
    array length because you are sure that the last element in your last pass is the maximum.

    1. Start by comparing the first two elements of the array.
    2. If the first element is greater than the second element, swap them.
    3. Move to the next pair of elements and repeat step 2
    4. Continue this process, comparing and swapping adjacent elements, until the end of the array is reached.
    5. At this point, the last element in the array will be the largest.
    6. Repeat the above steps, but skip comparing the last element since it's already in the right place because it's the bigger value in the array.
    7. Continue this process, comparing and swapping adjacent elements, until the end of the array is reached after each iteration.
    8. The array is now sorted.
*/

function bubbleSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    // Last i elements are already sorted, so no need to compare them
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const swap = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = swap;
      }
    }
  }

  return arr;
}

console.log(bubbleSort([5, 2, 8, 6, 9, 10, 4, 6, 29, 1]));
console.log(bubbleSort([23, 4, 6, 0, 41, 83, 5, 7, 11, 3]));

/*
  The optimized version of bubble sort can be very useful in situations where the array is already 
  partially or fully sorted. By introducing the noSwaps boolean variable, the algorithm can 
  terminate early if no swaps were made during a particular iteration. 
  This reduces the overall number of iterations and comparisons needed, making the sorting process 
  faster than the standard version of bubble sort. 
  This optimization can be particularly beneficial when dealing with larger arrays that are 
  mostly sorted or nearly sorted.
*/
function bubbleSortOptimized(arr) {
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    let noSwaps = true;
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const swap = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = swap;
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }

  return arr;
}
console.log(bubbleSortOptimized([9, 1, 2, 3, 4, 5, 6, 7, 8]));
