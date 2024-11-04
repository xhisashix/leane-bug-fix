/**
 * 解説
 * 修正前：
 *  obj.key = value; としており、これはオブジェクト obj に新しいプロパティ key を追加し、その値を value に設定しています。
 *  つまり、文字列 "key" がプロパティ名として使われてしまいます。
 * 修正後：
 *  obj[key] = value; としており、これは変数 key の値をプロパティ名として使用しています。
 *  これにより、動的にプロパティ名を指定してその値を更新することができます。
 */

/**
 * @param {*} obj
 * @param {*} key
 * @param {*} value
 * @returns obj
 */
function updateObject(obj, key, value) {
  obj[key] = value;
  return obj;
}

let myObject = { name: "太郎", age: 20 };
updateObject(myObject, "age", 25);

console.log(myObject);
