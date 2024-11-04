/**
 * 問題： オブジェクトが正しく更新されるように以下の関数を修正してください
 */

/**
 * @param {*} obj
 * @param {*} key
 * @param {*} value
 * @returns obj
 */
function updateObject(obj, key, value) {
  obj.key = value;
  return obj;
}

let myObject = { name: "太郎", age: 20 };
updateObject(myObject, "age", 25);

console.log(myObject);
