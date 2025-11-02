function rollDice() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const x = Math.floor(Math.random() * 6 + 1);
      resolve(x);
    }, 1000);
  });
}

const hidoki = rollDice().then((result) => {
  //   console.log(result);
  return result;
});

type User = {
  name: string;
  age: number;
};

function getUser(): Promise<User> {
  return new Promise((resolve) => {
    const user: User = {
      name: "太郎",
      age: 10,
    };
    resolve(user);
  });
}

getUser().then((user: User) => {
  //   console.log(user);
});

// async function getuid() {
//   console.log("1,開始");

//   const result100 = await rollDice();

//   console.log("2. result:", result100);
//   console.log("3. 終了");
// }

// getuid();

function rollDice2() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(4), 1000);
  });
}

async function test2() {
  console.log("A");
  await rollDice2();
  console.log("B");
}

test2();
console.log("C");

class Person2 {
  name: string;

  greet(name: string) {
    return `Hello,${name}`;
  }

  constructor(name: string) {
    this.name = name;
  }
}

const person10 = new Person2("Mike");
console.log(person10);

class Point {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

const point = new Point(10, 22);

abstract class Food {
  constructor(protected name: string, protected calorie: number) {}

  showDebug() {
    console.log(`name = ${this.name} `);
    console.log(`calorie = ${this.calorie}kcal `);
  }
  abstract keepRefrigerated(): boolean;
}

class Meat extends Food {
  keepRefrigerated(): boolean {
    return true;
  }
}

const saori = new Map<string, number>();
saori.set("a", 3);
console.log(saori);
console.log(typeof saori === "object");
