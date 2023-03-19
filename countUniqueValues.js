function countUniqueValues(arr) {
  let left = 0;
  let right = arr.length - 1;
  let total = 0;
  let occurence = {};

  while (left <= right) {
    occurence[arr[left]] = (occurence[arr[left]] || 0) + 1;
    if (occurence[arr[left]] == 1) total = total + 1;
    occurence[arr[right]] = (occurence[arr[right]] || 0) + 1;
    if (occurence[arr[right]] == 1) total = total + 1;

    left++;
    right--;
  }
  return total;
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // output: 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // output: 7
console.log(countUniqueValues([])); // output: 0
console.log(countUniqueValues([-2, -1, -1, 0, 1])); // output: 4
