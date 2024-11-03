/**
 * 問題： 配列の中から最大値を探す関数を作成してください
 */

/**
 * 配列の中から最大値を探す
 * @param {*} arr
 * @returns {number} 最大値
 */
function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < max) {
      max = arr[i];
    }
  }
  return max;
}

let numbers = [5, 2, 9, 1, 7];
let maxNumber = findMax(numbers);

console.log("最大値は " + maxNumber + " です");
