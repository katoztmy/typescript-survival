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

console.log(100 / 0);
const text = "I'm fine.\nThank you!";
console.log(text);
console.log(typeof undefined);
const unknown: unknown = 100;
console.log(typeof unknown);
const obj = {
  name: "John",
  age: 30,
};
console.log(typeof obj);
