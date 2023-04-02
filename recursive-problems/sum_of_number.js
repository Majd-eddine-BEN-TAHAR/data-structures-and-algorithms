function sumOfNumber(n) {
  if (n === 1) return 1;
  return n + sumOfNumber(n - 1);
}

console.log(sumOfNumber(6)); // 21
console.log(sumOfNumber(10)); // 55
