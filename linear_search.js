function linearSearch(arr, n) {
  for (let index = 0; index < arr.length; index++)
    if (arr[index] === n) return index;

  return -1;
}

console.log(linearSearch([1, 6, 4, 2], 4)); // 2
console.log(linearSearch([2, 9, 5, 0], 2)); // 0
