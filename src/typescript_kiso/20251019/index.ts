enum Direction {
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Right = "Right",
}

function move(direction: Direction): void {
  console.log(`${direction}に移動しました`);
}

move(Direction["Down"]);

enum ZeroOrOne {
  Zero = 0,
  One = 1,
}

// TypeScript5.0からはコンパイルエラーが起こるようになった
// const zeroOrOne: ZeroOrOne = 9;
// これは本来コンパイルエラーになってほしい
console.log(ZeroOrOne[9]);

// ユニオン型
type UploadStatus = InProgress | Success | Failure;
type InProgress = { done: boolean; progress: number };
type Success = { done: boolean };
type Failure = { done: boolean; error: Error };

function printStatus(status: UploadStatus) {
  if (status.done === false && "progress" in status) {
    console.log(`${status.progress}% done`);
  }
}

// 判別可能なユニオン型
// ユニオン型
type UploadStatus2 = InProgress2 | Success2 | Failure2;
type InProgress2 = { type: "inProgress"; progress: number };
type Success2 = { type: "success" };
type Failure2 = { type: "failure"; error: Error };

function printStatus2(status: UploadStatus2) {
  if (status.type === "inProgress") {
    console.log(status.)
  }
}

// インターセクション型
type rr = string & number; 
// これはコンパイルエラーになる、stringでありながらnumberでもある値は存在しない
// 実は使い道はあるらしいがわからん、詳細は省かれていた
const nn: rr = "2"

console.log("\n=== 型エイリアス vs インターフェース ===");

// 1️⃣ ユニオン型（string | number）
// ✅ type: できる
type StringOrNumber = string | number;
const value1: StringOrNumber = "hello";
const value2: StringOrNumber = 123;

// ❌ interface: ユニオン型は直接定義できない
// interface StringOrNumber2 = string | number; // エラー！

// 回避策: interfaceを使ってオブジェクトで表現
interface StringOrNumber2 {
  type: "string" | "number";
  value: string | number;
}
const value3: StringOrNumber2 = { type: "string", value: "hello" };

// 2️⃣ プリミティブ型のエイリアス
// ✅ type: できる
type ID = string;
const userId: ID = "abc123";

// ❌ interface: プリミティブ型は定義できない
// interface ID2 = string; // エラー！

// 3️⃣ オブジェクト型
// ✅ type: できる
type Person1 = {
  name: string;
  age: number;
};

// ✅ interface: できる（これが得意）
interface Person2 {
  name: string;
  age: number;
}

const person1: Person1 = { name: "太郎", age: 20 };
const person2: Person2 = { name: "花子", age: 25 };

// 4️⃣ インターセクション型
// ✅ type: できる
type HasName = { name: string };
type HasAge = { age: number };
type PersonWithBoth = HasName & HasAge;

// ✅ interface: extendsで同じことができる
interface HasName2 {
  name: string;
}
interface HasAge2 {
  age: number;
}
interface PersonWithBoth2 extends HasName2, HasAge2 {}

const person3: PersonWithBoth = { name: "次郎", age: 30 };
const person4: PersonWithBoth2 = { name: "三郎", age: 35 };

console.log("type と interface、どちらも使えるが得意分野が違う！");

type aiueo = string | boolean;
type kaka = boolean;

interface Store {
    name: string;
}

interface Store {
    address:string
}

const store: Store = {
    name: "コンビニ",
    address: "東京都千代田区永田町1-7-1"
}

