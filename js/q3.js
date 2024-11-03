/**
 * 問題：
 * 文字列を反転する関数を実装してください。
 * ただし、Array#reverseは使用せず、for文で実装してください。
 */


/**
 * 文字列を反転する関数
 * @param {*} str
 * @returns {string} 反転した文字列
 */
function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed = reversed + str[i - 1];
  }
  return reversed;
}

let word = "hello";
let reversedWord = reverseString(word);

console.log(word + " を反転すると " + reversedWord + " です");
