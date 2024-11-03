/**
 * 解説：
 *   修正前のコードでは、console.log("合計金額は " + total + " 円です"); となっていましたが、
 *   total は関数内で定義されたローカル変数であり、関数外からは参照できません。
 *  そのため、totalPrice という変数を使用して、関数の戻り値を受け取るように修正しました。
 */

/**
 * 計算結果を返す
 * @param {number} price 価格
 * @param {number} quantity 個数
 * @returns {number} 合計金額
 */
function calculateTotal(price, quantity) {
  let total = price * quantity;
  if (total > 100) {
    let discount = 10;
    total = total - total / discount;
  }
  return total;
}

function main() {
  let itemPrice = 50;
  let itemQuantity = 3;
  let totalPrice = calculateTotal(itemPrice, itemQuantity);

  console.log("合計金額は " + totalPrice + " 円です");
}

/**
 * リファクタリング：
 * 1. 割引率を定数として定義する
 * 2. 割引のしきい値を定数として定義する
 * 3. 割引の計算を別の関数に切り出す
 * 4. 割引後の合計金額を計算を別の関数に切り出す
 * ※ 同名の関数があるため、関数名には r_ を付けています。
 */

const DISCOUNT_RATE = 10;
const DISCOUNT_THRESHOLD = 100;

/**
 * 割引額を計算する
 * @param {number} total 合計金額
 * @returns {number} 割引額
 */
function calculateDiscount(total) {
  return total > DISCOUNT_THRESHOLD ? DISCOUNT_RATE : 0;
}

/**
 * 割引後の合計金額を計算する
 * @param {number} total 合計金額
 * @param {number} discount 割引額
 * @returns {number} 割引後の合計金額
 */
function applyDiscount(total, discount) {
  return total - total / discount;
}

/**
 * 計算結果を返す
 * @param {number} price 価格
 * @param {number} quantity 個数
 * @returns {number} 合計金額
 */
function r_calculateTotal(price, quantity) {
  let total = price * quantity;
  let discount = calculateDiscount(total);
  return applyDiscount(total, discount);
}

function refactoredMain() {
  let itemPrice = 50;
  let itemQuantity = 3;
  let totalPrice = r_calculateTotal(itemPrice, itemQuantity);

  console.log("合計金額は " + totalPrice + " 円です");
}

// リファクタリング前のコードを実行
console.log("リファクタリング前");
main();
// リファクタリング後のコードを実行
console.log("リファクタリング後");
refactoredMain();
