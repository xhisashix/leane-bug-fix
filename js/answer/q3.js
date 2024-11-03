/**
 * 文字列のインデックスの修正:
 * 修正前: reversed = reversed + str[i - 1];
 * 修正後: reversed += str[i];
 * 解説:
 *  修正前のコードでは、str[i - 1] を使用していたため、インデックスが1つずれてしまい、正しい文字を取得できていませんでした。
 *  修正後のコードでは、str[i] を使用して、現在のインデックスの文字を正しく取得しています。
 */

/**
 * 文字列を反転する関数
 * @param {*} str
 * @returns {string} 反転した文字列
 */
function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

let word = "hello";
let reversedWord = reverseString(word);

console.log(word + " を反転すると " + reversedWord + " です");
