abstract class Animal3 {
  constructor(protected name: string) {}

  abstract speak(): string;

  eat(food: string): string {
    return `${this.name}は${food}を食べました。`;
  }
}

class Dog3 extends Animal3 {
  speak(): string {
    return "わん！";
  }
}

class Cat3 extends Animal3 {
  speak(): string {
    return "にゃー";
  }
}

function makeAnimalSpeak(animal: Animal3) {
  console.log(animal.speak());
}

const dog3 = new Dog3("ぽち");
console.log(dog3);
console.log(dog3.speak());

const cat3 = new Cat3("ミーz");
console.log(cat3.speak());
