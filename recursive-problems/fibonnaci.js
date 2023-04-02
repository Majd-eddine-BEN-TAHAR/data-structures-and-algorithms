function fibonnaci(n) {
  if (n === 1 || n === 2) return 1;
  return fibonnaci(n - 1) + fibonnaci(n - 2);
}

console.log(fibonnaci(4)); // 3
console.log(fibonnaci(10)); // 55
console.log(fibonnaci(28)); // 317811
console.log(fibonnaci(35)); // 9227465
