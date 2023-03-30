/*
    Merge Sort is a divide and conquer algorithm used for sorting a list of elements.
    The basic idea of mergesort is to divide the input array into two halves recursively until 
    each subarray only has one element (or is empty, in the case of an odd-length array).
    Then, you compare and merge two subarrays into a larger, sorted array, and you keep 
    doing this, merging the small parts into bigger and bigger parts until you h
    ave the whole array again but now it's ordered.
    
    1. Check if the length of the input array is greater than 1. If it's not, return the input array as it is already sorted.
    2. Divide the input array into two equal sub-array recursively until the length of each sub-array is 1. You can achieve this by finding the midpoint of the list and splitting it into two sub-array, then calling the merge_sort function recursively on each sub-aray.
    3. Merge the two sub-lists by comparing the first elements of each sub-array and adding the smaller one to a new array. Continue this process until one of the sub-array is empty, then add the remaining elements of the other sub-array to the new array.
    4. Return the sorted array obtained from step 3.
*/
function mergeSort(arr) {
  const half = Math.floor(arr.length / 2);

  const firstHalf = arr.slice(0, half); // Slice the first half of the array
  const secondHalf = arr.slice(half); // Slice the second half of the array

  if (arr.length <= 1) return arr;

  return mergeTwoSortedArrays(mergeSort(firstHalf), mergeSort(secondHalf));
}

function mergeTwoSortedArrays(arr1, arr2) {
  let resultArray = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      resultArray.push(arr1[i]);
      i++;
    } else {
      resultArray.push(arr2[j]);
      j++;
    }
  }

  // If there are any remaining elements in the arr1 or arr2, add them to the result array
  while (i < arr1.length) {
    resultArray.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    resultArray.push(arr2[j]);
    j++;
  }

  return resultArray;
}

console.log(mergeSort([23, 4, 6, 0, 41, 83, 9, 9, 7, 11, 3]));
console.log(mergeSort([5, 2, 8, 6, 9, 10, 4, 6, 29, 1]));
console.log(mergeSort([23, 4, 6, 0, 41, 83, 5, 7, 11, 3]));
