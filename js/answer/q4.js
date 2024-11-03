/**
 * 比較演算子の修正:
 * 修正前: if (arr[i] < max) { max = arr[i]; }
 * 修正後: if (arr[i] > max) { max = arr[i]; }
 * 解説:
 *  修正前のコードでは、arr[i] < max という条件で比較していたため、max には配列の中で最小の値が設定されていました。
 *  修正後のコードでは、arr[i] > max という条件で比較することで、max には配列の中で最大の値が設定されるようになりました。
 */

/**
 * 配列の中から最大値を探す
 * @param {*} arr
 * @returns {number} 最大値
 */
function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

let numbers = [5, 2, 9, 1, 7];
let maxNumber = findMax(numbers);

console.log("最大値は " + maxNumber + " です");
