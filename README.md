# @miry/bbjs

  

`@miry/bbjs` は、Blackbox.ai API を簡単に利用するための TypeScript/JavaScript ライブラリです。このライブラリを使用することで、AI と対話するためのメッセージを送信し、応答を受け取ることができます。

  

## 目次

  

- [インストール](#インストール)

- [使用例](#使用例)

- [API](#api)

- [エラーハンドリング](#エラーハンドリング)

- [ライセンス](#ライセンス)

  

## インストール

  

このライブラリをプロジェクトに追加するには、以下のコマンドを実行してください。

  

```bash

npm  install  @miry/bbjs

```
  

使用例

以下は、@miry/bbjs を使用して AI にメッセージを送信し、応答を受け取る基本的な例です。

  

```ts

import  AI  from  '@miry/bbjs';

async  function  main() {
const  ai = new  AI('blackboxai'); // モデルを指定

try 
const  userMessage = 'こんにちは、AI！';
const  response = await  ai.sendMessage(conversationId, userMessage);
console.log('AIの応答:', response);
} catch (error) {
console.error('エラー:', error);
}

}

main();

```

使用するモデル

@miry/bbjs では、以下のモデルを使用できます。

- gpt-4o
- claude-sonnet-3.5
- gemini-pro
- blackboxai

モデルを指定するには、AI クラスのコンストラクタにモデル名を渡します。

## API

AI

コンストラクタ

```ts
constructor(model: string = 'blackboxai')
```

-  `model`: 使用する AI モデルの名前。デフォルトは `blackboxai`。

#### メソッド

##### `sendMessage(conversationId: string, content: string): Promise<string>`

  

指定した会話 ID にメッセージを送信し、AI からの応答を返します。

  

-  `conversationId`: 会話の ID。

-  `content`: ユーザーからのメッセージ。

-  **戻り値**: AI からの応答メッセージ。

  

## エラーハンドリング

`sendMessage` メソッドは、エラーが発生した場合に例外をスローします。エラーハンドリングを行うために、try-catch ブロックを使用してください。

```ts

try {
const  response = await  ai.sendMessage(conversationId, userMessage);
} catch (error) {
console.error('エラー:', error);
}
```

  

## ライセンス

このプロジェクトは  MIT  ライセンスの下でライセンスされています。詳細については、LICENSE  ファイルを参照してください。

## 注意事項

このプロジェクトは 非公式です。自己責任でご利用ください。また、予告なしに公開を停止する場合があります。