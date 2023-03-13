/*
  this solution of comparring the time is not very good because it
  can be different based on the machine resources, but we can use it
*/

// big O(n)
function sumNumbersSlow(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
}

// big O(1)
function sumNumbersFast(num) {
  return (num * (num + 1)) / 2;
}

let t1 = performance.now();
sumNumbersSlow(1000000000);
let t2 = performance.now();

let t3 = performance.now();
sumNumbersFast(1000000000);
let t4 = performance.now();

let timeToFinish1 = (t2 - t1) / 1000;
let timeToFinish2 = (t4 - t3) / 1000;

console.log(timeToFinish1);
console.log(timeToFinish2);
