let callOut = 0;

/**
 * フィボナッチ数を求める関数
 * @param {*} n
 * @returns {number} フィボナッチ数
 */
function fibonacci(n) {
  callOut++;
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

let number = 50;
console.time('fibonacci');
let fibonacciNumber = fibonacci(number);
console.timeEnd('fibonacci');

console.log(number + " 番目のフィボナッチ数は " + fibonacciNumber + " です");
console.log("再帰関数の呼び出し回数は " + callOut + " 回です");
