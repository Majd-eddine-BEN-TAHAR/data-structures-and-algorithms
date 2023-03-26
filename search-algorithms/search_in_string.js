/*
  Given a pattern string pattern and a larger text string text, write a function 
  that returns the number of occurrences of the pattern within the larger text string. 

  STEPS:
  1. Loop over each character in the text string.
  2. At each position, check if the current character matches the first character of the pattern.
  3. If it does, loop over each subsequent character in the pattern and check if it matches the corresponding character in the text string.
  4. If all characters in the pattern match the corresponding characters in the text string starting from the current position, increment the counter variable.
  5. After checking all possible positions, return the final count of occurrences.
*/

function searchInString(pattern, text) {
  let count = 0;
  for (let txtIdx = 0; txtIdx <= text.length - pattern.length; txtIdx++) {
    for (let patternIndex = 0; patternIndex < pattern.length; patternIndex++) {
      if (pattern[patternIndex] !== text[txtIdx + patternIndex]) break;
      if (patternIndex === pattern.length - 1) count++;
    }
  }
  return count;
}

console.log(searchInString("majd", "you welcome")); // 0
console.log(searchInString("you", "hello are you ok? are you?")); // 2
console.log(searchInString("llo", "hello ali")); // 1
console.log(searchInString("llo", "hello ali llo llo llo")); // 4

// ! Another solution using while
// function searchInString(pattern, text) {
//   let count = 0;
//   for (let start = 0; start <= text.length - pattern.length; start++) {
//     let index = 0;
//     if (pattern[index] === text[start]) {
//       index++;
//       let found = true;
//       while (index < pattern.length && found === true) {
//         if (pattern[index] != text[start + index]) found = false;
//         index++;
//       }
//       if (found) count++;
//     }
//   }
//   return count;
// }
