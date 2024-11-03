/**
 * 問題: 配列の合計値を求める関数を作成してください
 */

/**
 * 配列の合計値を求める関数
 * @param {number[]} arr - 合計値を求めたい配列
 * @returns {number} - 配列の合計値
 */
function sumArray(arr) {
  let sum = 0;
  for (const i = 1; i <= arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

let numbers = [1, 2, 3, 4, 5];
let total = sumArray(numbers);

console.log("合計値は " + total + " です");
