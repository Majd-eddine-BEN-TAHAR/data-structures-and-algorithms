/*  I. RESTATING THE ISSUE
          1. write a functin that takes an unkown number of arguments, then checks if there are 
          duplicates on the passed arguments, if there's duplicates return true, if there's no return false
          2. you can accept numbers and strings
          3. you can only use the frequency pattern or the multiple pointers pattern
      */
/*  II. EXAMPLES  
          areThereDuplicates(1, 2, 3) // false
          areThereDuplicates(1, 2, 2) // true => number 2 is duplicated
          areThereDuplicates('a', 'b', 'c', 'a') // true => letter a is duplicated
     */
/* III. STEPS
          0. I'm using the frequency counter accumulator
          1. the passed arguments should be put inside an array
          2. loop over the array because in the worst case scenario we can reach the last element
          3. compare the current element does it exist in the accumulator
              1. if it exists then return yes and break the loop
              2. if no add it to the accumulator and coontinue working
    
    */

//  using frequency counter pattern
function areThereDuplicates1(...args) {
  const frequencyCounter = {};
  for (const element of args) {
    if (frequencyCounter[element]) return true;
    frequencyCounter[element] = (frequencyCounter[element] || 0) + 1;
  }
  return false;
}

// using multiple pointers pattern
function areThereDuplicates2(...args) {
  let left = 0;
  let right = args.length - 1;
  let duplicates = false;
  const frequencyCounter = {};
  while (duplicates == false && left <= right) {
    if (left == right) {
      if (frequencyCounter[args[left]]) duplicates = true;
      break;
    }
    if (args[left] == args[right]) duplicates = true;

    if (frequencyCounter[args[left]]) duplicates = true;
    frequencyCounter[args[left]] = (frequencyCounter[args[left]] || 0) + 1;

    if (frequencyCounter[args[right]]) duplicates = true;
    frequencyCounter[args[right]] = (frequencyCounter[args[right]] || 0) + 1;

    left++;
    right--;
  }

  return duplicates;
}

// another solution
function areThereDuplicates3() {
  return new Set(arguments).size !== arguments.length;
}

console.log(areThereDuplicates1(1, 2, 3)); // false
console.log(areThereDuplicates2(1, 2, 3)); // false
console.log(areThereDuplicates3(1, 2, 3)); // false

console.log(areThereDuplicates1(1, 2, 1)); // true
console.log(areThereDuplicates2(1, 2, 1)); // true
console.log(areThereDuplicates3(1, 2, 1)); // true
