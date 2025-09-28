const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n");

const [N, H, W] = input[0].split(" ").map(Number);
const [sy, sx] = input[1].split(" ").map(Number);
const s = input[2];

const grid = [];
for (let i = 0; i < H; i++) {
  grid.push(input[i + 3].split(" ").map(Number));
}

let y = sy;
let x = sx;
const result = [];

for (let i = 0; i < N; i++) {
  const move = s[i];

  if (move === "F") {
    y--;
  } else if (move === "B") {
    y++;
  } else if (move === "L") {
    x--;
  } else if (move === "R") {
    x++;
  }

  const chocolate = grid[y - 1][x - 1];
  result.push(chocolate);
}

for (let chocolate of result) {
  console.log(chocolate);
}
