function power(base, exponent) {
  if (exponent == 0) return 1;
  return base * power(base, exponent - 1);
}

// console.log(power(2, 0)); // 1
// console.log(power(2, 2)); // 4
// console.log(power(2, 4)); // 16

function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}

// console.log(factorial(1)); // 1
// console.log(factorial(2)); // 2
// console.log(factorial(4)); // 24
// console.log(factorial(7)); // 5040

function productOfArray(arr) {
  if (arr.length === 0) return 1;
  return arr[0] * productOfArray(arr.slice(1));
}

// console.log(productOfArray([1, 2, 3])); // 6
// console.log(productOfArray([1, 2, 3, 10])); // 60

function recursiveRange(n) {
  if (n === 1) return 1;
  return n + recursiveRange(n - 1);
}

// console.log(recursiveRange(6)); // 21
// console.log(recursiveRange(10)); // 55

function fibonnaci(n) {
  if (n === 1 || n === 2) return 1;
  return fibonnaci(n - 1) + fibonnaci(n - 2);
}

// console.log(fibonnaci(4)); // 3
// console.log(fibonnaci(10)); // 55
// console.log(fibonnaci(28)); // 317811
// console.log(fibonnaci(35)); // 9227465
