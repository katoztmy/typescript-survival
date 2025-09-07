// tsconfig.jsonを読み込んでコンパイルが行われる
// typescriptの基礎的な所

/*
TypeScriptは型があることが特徴的だがコンパイルされたらそれ以降は全てJavaScriptと同じである。
文法的な話
・文と式で構成されている
=の右側に置けるものが式である。
const a = 1 + 2;
であれば、1+2が式部分になる

function add(a: number, b: number) {
  return a + b;
}
add(1, 2);
このadd(1, 2)は式文に相当する？
まぁこのように構成されている。

プリミティブ型とオブジェクト型が存在。
プリミティブ型
下記のこれ以上分割できないやつ。
nullはちなみにオブジェクト型です。
・string
・number
・boolean
・undefined
・null
・symbol
・bigint

可変なものと不変なものがある。
プリミティブ型は不変だがオブジェクトのプロパティは可変である。
 
比較系
|| と &&は短絡評価が行われ、a && bでaがfalseであればbは評価すらされない。
*/

const a = false;
const b = false;

// この場合,aをfalseにしているのでbは評価されない。条件付きレンダリングのような際に使用される。aがtrueであればbのコンポーネントを出すよーって感じ
const c = a && b;

// ||についても同様。

// 次の論理演算子 ?? について
// 意味はaのデータがnullまたはundefinedの時のみbを返すっていうaが存在しなければbを返す的な・・・。
const d = a ?? b;

const r = "";
const e = r ?? "hああ？s";
console.log(e);

// switch,if,while,forなどの制御文あるけどどう言う時に使いたいかだけわかってればいいかな
// switchはなんか色々permissionがenumにあったりして、その権限ごとに処理を分けたいな〜とか
// ifはシンプル条件分岐
// whileは無限ループとかね

// objectについて
// type, interface, インデックスシグネチャについて
// typeは下記のように定義でき、&などを使い複数の型を組み合わせられる,interfaceはextendsで継承。でもinterfaceではできないことがある
//　interfaceではユニオン型の定義などはできない。だから基本的にはtypeを使えばいいんじゃない？って言う話
type myobj = {
  name: string;
  age: number;
};

// インデックスシグネチャ
type myobjh2 = {
  [key: string]: number;
};

// 的な感じで任意のキー(string)とvalue(number)を持つオブジェクトを生成可能である
// もちろん、keyがstringでvalueがnumberでない場合はエラーになる。
const obj2: myobjh2 = {
  p1: 123,
  p2: 456,
  p3: 789,
};
