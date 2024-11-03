/**
 * 問題： 計算結果が正しく表示されるように、修正してください。
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

let itemPrice = 50;
let itemQuantity = 3;
let totalPrice = calculateTotal(itemPrice, itemQuantity);

console.log("合計金額は " + total + " 円です");
