// 値渡し
function change(n: number) {
  n = 2;
}
let n = 1;
change(n);
console.log(n);

// 参照渡し
const xb = { n: 1 };
// ybはxbと同じオブジェクトを参照している
const yb = xb;
yb.n = 2;
console.log(xb);

function hello(person?: string) {
  console.log(person);
  return "yeahs";
}
// hello("Tomoya");
console.log(hello());

// 残余引数の例
console.log("=== Math.max()の例 ===");

// 通常の使い方（個別の引数）
console.log(Math.max(1, 10, 100)); // 100

// 配列を残余引数として渡す（スプレッド演算子使用）
const numbers = [1, 10, 100, 50, 25];
console.log(Math.max(...numbers)); // 100

// // 配列をそのまま渡すとNaNになる（間違った使い方）
// console.log(Math.max(numbers)); // NaN

// // 残余引数を受け取る関数の定義例
// function myMax(...nums: number[]): number {
//   let max = nums[0];
//   for (const num of nums) {
//     if (num > max) {
//       max = num;
//     }
//   }
//   return max;
// }

// console.log("=== 自作のmyMax関数 ===");
// console.log(myMax(1, 10, 100)); // 100
// console.log(myMax(...numbers)); // 100

// console.log("=== なぜ配列をそのまま渡せないのか ===");
// // Math.max()は残余引数しか受け取れない
// console.log("Math.max(1, 2, 3):", Math.max(1, 2, 3)); // 3
// console.log("Math.max([1, 2, 3]):", Math.max([1, 2, 3])); // NaN（配列は数値ではないため）

// // 配列を受け取る関数を作るなら、こう書く
// function maxFromArray(arr: number[]): number {
//   return Math.max(...arr); // 内部でスプレッド演算子を使う
// }

// console.log("maxFromArray([1, 2, 3]):", maxFromArray([1, 2, 3])); // 3

// 配列の分割代入
const xnumbers = [3, 6, 9, 12];
const [sone, two, three] = xnumbers;
console.log(sone, two, three);
