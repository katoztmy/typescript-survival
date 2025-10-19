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

console.log("\n=== 配列の共変性の問題 ===");

// 配列の共変性
class Animal {
  name: string = "animal";
}

class Dog extends Animal {
  bark() {
    console.log("わんわん");
  }
}

// DogsはAnimalの部分型なので、Dog[]をAnimal[]に代入できる
let animal: Animal[] = [];
let dogs: Dog[] = [new Dog()];

console.log("1. 初期状態 - dogs.length:", dogs.length); // 1

animal = dogs; // animalとdogsは同じ配列を参照
console.log("2. animal = dogs 後 - dogs.length:", dogs.length); // 1

animal.push(new Animal()); // animalに追加 = dogsにも追加される！
console.log("3. animal.push後 - dogs.length:", dogs.length); // 2

console.log("\n4. dogsの中身:");
for (const dog of dogs) {
  console.log(dog);
  // Dog { name: 'animal' }
  // Animal { name: 'animal' } ← Dogではない！
}

// これが問題：dogsはDog[]型なのに、Animalが入っている
// dogs[1].bark(); // 実行時エラー！bark()メソッドが存在しない

console.log("\n=== 代入の仕組み ===");

// プリミティブ型（数値、文字列など）の代入 → 値がコピーされる
let a = 10;
let b = a; // aの値（10）がコピーされる
b = 20; // bを変更してもaは変わらない
console.log("プリミティブ型:");
console.log("a:", a); // 10
console.log("b:", b); // 20

// オブジェクト・配列の代入 → 参照（アドレス）がコピーされる
let arr1 = [1, 2, 3];
let arr2 = arr1; // arr1の参照がコピーされる（中身はコピーされない）
arr2.push(4); // arr2に追加 → arr1も変わる！

console.log("\nオブジェクト・配列:");
console.log("arr1:", arr1); // [1, 2, 3, 4]
console.log("arr2:", arr2); // [1, 2, 3, 4]
console.log("arr1 === arr2:", arr1 === arr2); // true（同じ配列を指している）

// 図解
console.log("\n=== 図解 ===");
console.log("animal = dogs; をすると...");
console.log("animal → [メモリアドレス123] ← dogs");
console.log("         ↓");
console.log("      [Dog, Animal] ← 実際の配列データ");
console.log("\nanimalとdogsは同じ配列を指しているので、");
console.log("どちらから変更しても同じ配列が変わる！");

console.log("\n=== 参照渡しの確認 ===");

// 例1: dogsから変更
let cats: Animal[] = [];
let persians = [new Animal()];
cats = persians; // 参照を渡す

console.log("変更前 - cats.length:", cats.length); // 1
persians.push(new Animal()); // persiansから追加
console.log("変更後 - cats.length:", cats.length); // 2 ← catsも変わる！

// 例2: animalから変更
let birds: Animal[] = [];
let sparrows = [new Animal()];
birds = sparrows; // 参照を渡す

console.log("\n変更前 - sparrows.length:", sparrows.length); // 1
birds.push(new Animal()); // birdsから追加
console.log("変更後 - sparrows.length:", sparrows.length); // 2 ← sparrowsも変わる！

console.log("\n結論: どちらから変更しても、両方に影響が出る！");

console.log("\n=== 参照を渡したくない場合の対処法 ===");

// ❌ 参照を渡す（影響が出る）
let original1 = [1, 2, 3];
let reference = original1;
reference.push(4);
console.log("参照渡し:");
console.log("original1:", original1); // [1, 2, 3, 4] ← 変わる
console.log("reference:", reference); // [1, 2, 3, 4]
console.log("original1 === reference:", original1 === reference); // true

// ✅ スプレッド演算子で配列をコピー（影響が出ない）
let original2 = [1, 2, 3];
let copied = [...original2]; // 配列の中身をコピー
copied.push(4);
console.log("\nスプレッド演算子でコピー:");
console.log("original2:", original2); // [1, 2, 3] ← 変わらない！
console.log("copied:", copied); // [1, 2, 3, 4]
console.log("original2 === copied:", original2 === copied); // false

// 他のコピー方法
let original3 = [1, 2, 3];
let copied2 = original3.slice(); // slice()でもコピーできる
let copied3 = Array.from(original3); // Array.from()でもコピーできる

copied2.push(4);
copied3.push(5);
console.log("\n他のコピー方法:");
console.log("original3:", original3); // [1, 2, 3] ← 変わらない
console.log("copied2 (slice):", copied2); // [1, 2, 3, 4]
console.log("copied3 (Array.from):", copied3); // [1, 2, 3, 5];

console.log("\n=== unknown型の挙動 ===");

function tupe() {
  return [1, "opk", true];
}

const list: unknown[] = tupe();

// ❌ TypeScriptではエラーだけど、実行はできる！
console.log("TypeScriptエラーだけど実行できる:", list[0].toString()); // "1"

// ✅ 正しい方法：型ガードで型を絞り込む
if (typeof list[0] === "number") {
  console.log("型ガード使用:", list[0].toString()); // OK
}

console.log("\n=== TypeScriptのエラーと実行の違い ===");
console.log("TypeScript = コンパイル時の型チェック");
console.log("JavaScript = 実行時の動作");
console.log("TypeScriptエラーがあっても、JavaScriptは実行できる！");

// ❌ 他のメソッドはエラーになる
// list[0].toFixed(2); // エラー: Object is of type 'unknown'
// list[0] + 1; // エラー: Object is of type 'unknown'

// 型ガード（型の絞り込み）が必要
if (typeof list[0] === "number") {
  console.log(list[0].toFixed(2)); // OK: 型がnumberに絞り込まれた
  console.log(list[0] + 1); // OK
}

// unknown vs any の違い
const unknownValue: unknown = 10;
const anyValue: any = 10;

// unknownValue.toFixed(2); // エラー: Object is of type 'unknown'
anyValue.toFixed(2); // OK: anyは型チェックをスキップ

console.log("unknown型は安全、any型は危険");
