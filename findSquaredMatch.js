function findSquaredMatch(arr1, arr2) {
  let existingValues = {};
  for (const number of arr2) {
    if (existingValues[number]) ++existingValues[number];
    else existingValues[number] = 1;
  }

  for (const number of arr1) {
    numberSquared = number * number;
    if (!existingValues[numberSquared] || existingValues[numberSquared] == 0) {
      return false;
    }
    existingValues[number] = existingValues[number] - 1;
  }
  return true;
}

console.log(findSquaredMatch([1, 2, 3, 2], [9, 4, 4, 1])); // true
console.log(findSquaredMatch([1, 2, 3], [1, 4, 9])); // true
console.log(findSquaredMatch([1, 2, 3], [1, 4])); // false
console.log(findSquaredMatch([], [])); // true
console.log(findSquaredMatch([2], [4])); // true
