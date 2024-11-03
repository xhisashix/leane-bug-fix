/**
 * フィボナッチ数を求める関数
 * @param {*} n
 * @returns {number} フィボナッチ数
 */
function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

let number = 30;
console.time('fibonacci');
let fibonacciNumber = fibonacci(number);
console.timeEnd('fibonacci');

console.log(number + " 番目のフィボナッチ数は " + fibonacciNumber + " です");
