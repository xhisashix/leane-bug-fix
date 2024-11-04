/**
 * メモ化の導入:
 *  修正前: 再帰的にフィボナッチ数を計算していましたが、同じ計算を何度も繰り返すため、計算量が指数関数的に増加していました。
 *  修正後: メモ化を導入することで、計算済みのフィボナッチ数を保存し、再利用するようにしました。これにより、計算量が大幅に削減され、処理速度が向上しました。
 * メモ化の実装:
 *  修正前: メモ化は使用していませんでした。
 *  修正後:
 *    memo というオブジェクトを引数として追加し、計算済みのフィボナッチ数を保存するようにしました。if (n in memo) で既に計算済みかどうかをチェックし、
 *    計算済みであればその値を返します。計算が必要な場合は、計算結果を memo に保存します。
 */

let callOut = 0;

/**
 * フィボナッチ数を求める関数（メモ化を使用）
 * @param {number} n
 * @param {Object} memo
 * @returns {number} フィボナッチ数
 */
function fibonacci(n, memo = {}) {
  callOut++;
  if (n in memo) {
    return memo[n];
  }
  if (n <= 1) {
    return n;
  }
  memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
  return memo[n];
}

let number = 50;
console.time('fibonacci');
let fibonacciNumber = fibonacci(number);
console.timeEnd('fibonacci');

console.log(number + " 番目のフィボナッチ数は " + fibonacciNumber + " です");
console.log("再帰関数の呼び出し回数は " + callOut + " 回です");
