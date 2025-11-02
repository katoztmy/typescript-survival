class User10 {
  private email: string;

  constructor(email: string) {
    this.email = email;
  }

  getEmail(): string {
    return this.email;
  }

  sendEmail(subject: string, body: string) {
    this.email = this.email.trim();
    console.log(`${this.email}に送信`);
  }
}

const user10 = new User10(" sample@gmail.com ");
console.log(user10.getEmail());
user10.sendEmail("初めまして、加藤です。", "こないだはお世話になりました");
console.log(user10.getEmail());

enum RANK {
  LEVEL1 = "LEVEL1",
  LEVEL2 = "LEVEL2",
  LEVEL3 = "LEVEL3",
}

abstract class IAttack {
  abstract physicalAttack(rank: RANK): void;
}

class Attack extends IAttack {
  physicalAttack(rank: RANK): void {
    if (rank === RANK.LEVEL1) {
      console.log("LEVEL1の攻撃");
    } else if (rank === RANK.LEVEL2) {
      console.log("LEVEL2の攻撃");
    } else {
      console.log("LEVEL3の攻撃");
    }
  }
}

const attack = new Attack();
attack.physicalAttack(RANK.LEVEL1);

// interface IAnimal {
//   cry(): void;
// }

// class Dog5 implements IAnimal {
//   cry(): void {
//     console.log("わんわん");
//   }
// }

// class Cat implements IAnimal {
//   cry(): void {
//     console.log("にゃー");
//   }
// }

// function callAnimalName(animal: IAnimal) {
//   animal.cry();
// }

// const pet1 = new Dog5();
// const pet2 = new Cat();
// callAnimalName(pet2);
// callAnimalName(pet1);

interface IAnimal {
  move(): void;
}

class Human implements IAnimal {
  move(): void {
    console.log("歩く");
  }
}

class Toy implements IAnimal {
  move(): void {
    throw new Error("動けない！");
  }
}

function movingAnimal(animal: IAnimal) {
  animal.move();
}
const human = new Human();
const toy = new Toy();
movingAnimal(human);
movingAnimal(toy);

// 依存性逆転の原則

interface CellPhoneInterface {
  call(): void;
}

class Human1 {
  private cellPhone: CellPhoneInterface;

  constructor(cellPhone: CellPhoneInterface) {
    this.cellPhone = cellPhone;
  }

  call(): void {
    console.log(`${this.cellPhone}に電話しています。s`);
  }
}

class CellPhone implements CellPhoneInterface {
  private name: string;
  private phoneNumber: string;

  constructor(name: string, phoneNumber: string) {
    this.name = name;
    this.phoneNumber = phoneNumber;
  }

  call(): void {
    console.log(`${this.name}に${this.phoneNumber}`);
  }
}
