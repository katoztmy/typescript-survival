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

// ネストした配列の分割代入
const xnumbers2 = [
  [1, 2],
  [3, 4],
];

const [[oneX, twoX], [threeX]] = xnumbers2;
console.log(oneX, twoX, threeX);

const color = { r: 9, g: 10, b: 112, z: 123, ttt: 300, a: 1, bbb: 200 };
const { z, ttt, bbb } = color;
console.log(z, ttt, bbb);

// オプショナルチェーン
const book = undefined;
// bookはundefinedなので下記の条件文の中には入らない。その場合、bookの型はnever型になる。
if (book) {
  const page = book.page;
}

const book2 = undefined;
const title = book2?.title;
console.log(title);

const foo = { a: 1 };
const sdate = new Date();
const arr = [1, 2, 3];
console.log(foo.hi, sdate.hi, arr.hi);

Object.prototype.hi = "hi";
console.log(foo.hi, sdate.hi, arr.hi);

for (const key in foo) {
  // fooのプロパティはaとprototype.hiで追加されたhiの二つが入ってしまう
  console.log(key);
}

const foo2 = { a: 1, b: 2, c: 3 };

// Object.entries()の結果を確認
console.log("Object.entries(foo2):", Object.entries(foo2));
// [["a", 1], ["b", 2], ["c", 3]] が出力される

// 正しい分割代入：[key, value]の順序
for (const [key, value] of Object.entries(foo2)) {
  console.log(`key: ${key}, value: ${value}`);
  // key: a, value: 1
  // key: b, value: 2
  // key: c, value: 3 の順で出力される
}

// 間違った分割代入の例（コメントのコード）
// for (const [value, key] of Object.entries(foo2)) {
//   console.log(value, key);
//   // 実際は key value の順で出力される（変数名と実際の内容が逆）
// }

const foo3 = { a: 1, b: 2, c: 3, d: 4 };
for (const key of Object.keys(foo3)) {
  console.log(key);
}

console.log("\n=== break文の使い方 ===");

// ❌ エラー：if文の中でbreakは使えない
// if (true) {
//   console.log("before");
//   break; // エラー！
//   console.log("after");
// }

// ✅ 正しい：ループの中でbreakを使う
console.log("ループ内でのbreak:");
for (let i = 0; i < 5; i++) {
  if (i === 3) {
    console.log("i=3でループを抜ける");
    break; // ループを抜ける
  }
  console.log(`i = ${i}`);
}

// ✅ 正しい：switch文の中でbreakを使う
console.log("\nswitch文内でのbreak:");
const value = 2;
switch (value) {
  case 1:
    console.log("1です");
    break;
  case 2:
    console.log("2です");
    break; // 次のcaseに進まないようにする
  case 3:
    console.log("3です");
    break;
  default:
    console.log("その他");
}

// if文で早期リターンしたい場合は、returnを使う（関数内）
function example() {
  if (true) {
    console.log("before");
    return; // 関数を抜ける
    console.log("after"); // 実行されない
  }
}
example();
