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
