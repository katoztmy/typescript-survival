// class Animal {
//   name: string;
// }

// class Duck extends Animal {
//   quack() {
//     console.log("ガーガー");
//   }
// }

// class Dog extends Animal {
//   bark() {
//     console.log("わんわん");
//   }
// }

// function isDuck(animal: Animal): animal is Duck {
//   return animal instanceof Duck;
// }

// // someAnimalはDuckクラスのインスタンスではあるがAnimal型であるとTypeScriptコンパイラは判断する
// // Animalクラスにはnameプロパティしか存在しないので当然someAnimal.quack()はエラーになる
// const someAnimal: Animal = new Duck();

// console.log(100 / 0);
// const text = "I'm fine.\nThank you!";
// console.log(text);
// console.log(typeof undefined);
// const unknown: unknown = 100;
// console.log(typeof unknown);
// const obj = {
//   name: "John",
//   age: 30,
// };
// console.log(typeof obj);

// let value;
// console.log(typeof value);

// const char: number = 0..toString()

// const message: string = "Hello, \u{796d}Worlds!";
// console.log(message);

// const str: string = "3";
// // @ts-ignore
// console.log(str == 3);

// 真偽値
const t = true,
  f = false;

console.log(t && f); // false
console.log(t || f); // true

const x = 0;
const y = 1;
// xがundefinedやnullだったらyを返す,それ以外だったらxを返す

const user = x ?? y;
console.log(user);

// .envファイルを読み込む
import dotenv from "dotenv";
dotenv.config();

const secret = process.env.SECRET_PASSWORD || "default_secret";
console.log(secret);

const ports = process.env.PORTS;
console.log(typeof ports);
const port = process.env.PORT;
console.log(typeof port);
