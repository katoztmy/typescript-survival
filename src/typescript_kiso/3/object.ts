const obj = {
  "↑↓↑↓": 123,
};

console.log(obj["↑↓↑↓"]);

// スプレッド構文
const array = [3, 4];

const array2 = [...array];
console.log(array2);
// const array3 = [{ name: "John", age: 30 }, { name: "Jane", age: 20 }, 3, 4];
// // 下記はtrueになる、なぜならarray2とarray3は同じオブジェクトであるため
// console.log(array2 == array3);

const obj3: { name: string; age: number } = {
  name: "Tomoya",
  age: 33,
};

type Person = {
  name: string;
  age: number;
};

const obj4: Person = {
  name: "Tomoya",
  age: 33,
};

interface human {
  name: string;
  age: number;
}

// 型の継承
interface Tomoya extends human {
  job: string;
}

// Tomoya interfaceの形をみたい
const tomoya: Tomoya = {
  name: "Tomoya",
  age: 33,
  job: "Engineer",
};

console.log(tomoya);

type UserId = string;
// プリミティブ型に型をつけられるのはtypeのみ。interfaceではできない。
const userId: UserId = "123";

type Humanoid = human & {
  parameter: number;
};

const humanoid: Humanoid = {
  name: "Tomoya",
  age: 33,
  parameter: 100,
};

// type UserId = string;
type Humanoids = human & {
  job: string;
};

// 任意のプロパティ名を許容する型
type AnyProperty = {
  [key: string]: number;
};

// keyがstringでそのvalueがnumberのオブジェクトを生成可能
const anyPropertyObject: AnyProperty = {
  cost: 100,
  price: 200,
  quantity: 3,
  total: 400,
};

const obj5: AnyProperty = {
  name: 123,
};

const num = obj5.joh;
console.log(num);

const obj6: {
  name: string;
} = {
  name: "Tomoya",
};

const propName: string = "foo";
const obj7 = {
  [propName]: 123,
};
console.log(obj7.foo);

type MyObj = {
  foo: boolean;
  bar: boolean;
  baz?: number;
};

const objA: MyObj = {
  foo: true,
  bar: true,
};

const objB: MyObj = {
  foo: true,
  bar: true,
  baz: 1234,
};

console.log(objA.baz);

type MyObj2 = {
  readonly foo: string;
};

const objC: MyObj2 = {
  foo: "u",
};

// objC.foo = "chin";

type MyObj3 = typeof objC;
const objD: MyObj3 = {
  foo: "yas",
};

const obj11: number[] = [1, 2, 3];
obj11.push(4);

const obj12 = {
  name: "Tomoya",
  age: 33,
  yeah: "yeah",
};

for (const key in obj12) {
  console.log(`${key}: ${obj12[key as keyof typeof obj12]}`);
}

// const table: [string, number, boolean] = ["Tomoya", 22, false;
// console.log(table);
// 配列へのインデックスアクセスは使用しない
// 存在しない配列のインデックスへもアクセスできてしまうため。undefinedsになるが。

// 下記はUTC時間で表示される
const date = new Date();
console.log(date);
console.log(Date.now());

const exp = new RegExp("abcde");

console.log(exp);
console.log(exp.flags);
console.log(exp.source);

const mappp: Map<string, number> = new Map();
mappp.set("a", 1);

const g = mappp.get("a");
console.log(g);
mappp.set("aiueo", 999);
console.log(mappp);

// オブジェクトだとkeyがstringになる。取り出して配列に入れても'1', '2'になる。
// Mapを使えばkeyは自由な型を使える。
const rrr = {
  1: "a",
  2: "b",
};
console.log(rrr);

// hasはMapに引数に入るkeyが存在するかどうかを返す。
const flags = mappp.has("a");
console.log(flags);
console.log(mappp);
mappp.delete("a");
console.log(mappp);
const ggg = new Set<number>();
ggg.add(1);
console.log(ggg);
const hhh = ggg.keys();

const iii = [1, 3, 4, 4564, 43, 1, 3, 1, 45, 7];
const jjj = new Set(iii);
console.log(jjj);
