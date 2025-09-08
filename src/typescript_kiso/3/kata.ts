// 引数の型がTで、それを要素に持つ配列を返す関数、もちろん配列の型もT
// 色々な型に対応できる関数を作るイメージ。
function rArray<T>(arg: T): T[] {
  return [arg];
}

console.log(rArray<string>("Hello"));
console.log(rArray<number>(100));
console.log(rArray<boolean>(true));
console.log(rArray<object>({ name: "TypeScript" }));
