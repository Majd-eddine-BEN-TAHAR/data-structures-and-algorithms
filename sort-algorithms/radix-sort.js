// it's not a comparaison sort algorithm like bubble,selection,insertion,merge,quick
/*
    Radix sort is a sorting algorithm that compares the individual digits of 
    numbers to sort them. The algorithm begins by sorting the numbers based on
    the rightmost digit and works its way towards the leftmost digit. It does this
    by placing each number into a "bucket" based on the value of its 
    current digit, and then concatenates the buckets back together in order. 
    This process is repeated for each digit until the entire list of numbers is sorted
*/

function radixSort(arr) {
  const maxDigitCount = getLargestNumberLengthInArray(arr);

  for (let i = 0; i < maxDigitCount; i++) {
    const buckets = placeInBuckets(arr, i);
    arr = combineBuckets(buckets);
  }

  return arr;
}

/**
 * Determines the maximum number of digits in the largest number in the array.
 */
function getLargestNumberLengthInArray(arr) {
  const maxNum = Math.max(...arr);
  if (maxNum === 0) return 1;
  return Math.floor(Math.log10(Math.abs(maxNum))) + 1;
}

/**
 * Places each number in the array into the appropriate bucket based on the digit at the specified index.
 */
function placeInBuckets(arr, digitIdx) {
  const buckets = Array.from({ length: 10 }, () => []);
  for (let j = 0; j < arr.length; j++) {
    const digit = getDigit(arr[j], digitIdx);
    buckets[digit].push(arr[j]);
  }
  return buckets;
}

/**
 * Concatenates the buckets into a single array.
 */
function combineBuckets(buckets) {
  return [].concat(...buckets);
}

/**
 * Returns the digit at the specified index in the given number.
 */
function getDigit(num, digitIdx) {
  return Math.floor(Math.abs(num) / Math.pow(10, digitIdx)) % 10;
}

console.log(radixSort([23, 4, 6, 0, 41, 83, 5, 7, 11, 3]));
