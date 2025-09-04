# TypeScript 学習環境

このプロジェクトは、TypeScript ファイルを実行できる学習環境です。

## セットアップ済みの内容

- `package.json`: プロジェクト設定とスクリプト
- `tsconfig.json`: TypeScript 設定
- `index.ts`: サンプルの TypeScript ファイル

## 使用方法

### TypeScript ファイルの実行

```bash
# 直接実行（推奨）
npm start

# または、ts-nodeを直接使用
npx ts-node index.ts

# 特定のファイルを実行
npx ts-node your-file.ts
```

### 開発時の便利なコマンド

```bash
# ファイル変更を監視して自動実行
npm run dev your-file.ts

# TypeScriptをJavaScriptにコンパイル
npm run build

# コンパイル結果を削除
npm run clean
```

## ファイル構成

```
typescript-survival/
├── package.json          # プロジェクト設定
├── tsconfig.json         # TypeScript設定
├── index.ts             # サンプルファイル
├── diary.md             # 学習日記
├── dist/                # コンパイル結果（生成される）
└── node_modules/        # 依存関係
```

## 学習日記の使い方

このプロジェクトには学習記録用の日記システムが含まれています。

### 日記の書き方

1. `diary.md`ファイルを開きます
2. 最新のエントリの下に新しい日付のセクションを追加します
3. テンプレートをコピーして使用してください：

```markdown
### YYYY-MM-DD

#### 📚 今日学んだこと

- 学習した内容を記録

#### 💻 実装・実践したこと

- 実際に書いたコードや実践した内容

#### 🔧 使用した技術・ツール

- 使用した技術やツール

#### 💡 気づき・学び

- 重要な気づきや学び

#### 🎯 明日の目標

- 次の日の学習目標

#### 📝 メモ・その他

- その他のメモや参考資料

---
```

### 継続的な記録のために

```bash
# 毎日の作業後にコミット
git add diary.md
git commit -m "学習記録: YYYY-MM-DD"
git push
```

## 学習のヒント

1. `index.ts`を参考にして、新しい TypeScript ファイルを作成してみましょう
2. TypeScript の型システムを活用して、より安全なコードを書きましょう
3. エラーが出たら、コンパイラのメッセージを読んで修正しましょう
4. 毎日の学習を`diary.md`に記録して成長を可視化しましょう

## インストール済みのパッケージ

- `typescript`: TypeScript コンパイラ
- `ts-node`: TypeScript ファイルを直接実行
- `@types/node`: Node.js の型定義

Happy coding with TypeScript! 🚀
