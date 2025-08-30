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
├── dist/                # コンパイル結果（生成される）
└── node_modules/        # 依存関係
```

## 学習のヒント

1. `index.ts`を参考にして、新しい TypeScript ファイルを作成してみましょう
2. TypeScript の型システムを活用して、より安全なコードを書きましょう
3. エラーが出たら、コンパイラのメッセージを読んで修正しましょう

## インストール済みのパッケージ

- `typescript`: TypeScript コンパイラ
- `ts-node`: TypeScript ファイルを直接実行
- `@types/node`: Node.js の型定義

Happy coding with TypeScript! 🚀
