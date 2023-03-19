function anagram(str1, str2) {
  const letterOccurence1 = {};
  const letterOccurence2 = {};
  for (const letter of str1) {
    letterOccurence1[letter] = (letterOccurence1[letter] || 0) + 1;
  }
  for (const letter of str2) {
    letterOccurence2[letter] = (letterOccurence2[letter] || 0) + 1;
  }

  if (
    Object.keys(letterOccurence1).length !==
    Object.keys(letterOccurence2).length
  )
    return false;
  for (const letter in letterOccurence1) {
    if (
      !letterOccurence2[letter] ||
      letterOccurence2[letter] !== letterOccurence1[letter]
    ) {
      return false;
    }
  }
  return true;
}

console.log(anagram("listen", "silent")); // true
console.log(anagram("triangle", "integral")); // true
console.log(anagram("hello", "world")); // false
