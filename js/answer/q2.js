/**
 * ループの開始インデックスの修正:
 * 修正前: for (let i = 1; i <= arr.length; i++)
 * 修正後: for (let i = 0; i < arr.length; i++)
 * 解説:
 * 配列のインデックスは 0 から始まるため、ループの開始インデックスを 1 から 0 に修正しました。
 * また、ループの終了条件を i <= arr.length から i < arr.length に変更することで、配列の範囲外にアクセスすることを防ぎました。
 */

/**
 * 配列の合計値を求める関数
 * @param {number[]} arr - 合計値を求めたい配列
 * @returns {number} - 配列の合計値
 */
function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

let numbers = [1, 2, 3, 4, 5];
let total = sumArray(numbers);

console.log("合計値は " + total + " です");
