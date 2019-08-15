# Typescript の単体テスト周り

## 【課題】sinon で stub したい場合、どうすればいい

- sinon.stub で特定の関数をスタブ化したいが、引数、返り値がもとの関数の型に制限される
  - できればその制限を解除して任意の返り値に設定したい
  - たとえば AWSSDK の各関数など
    - 一応代替案として aws-sdk-mock ライブラリでモック化は可能
- jasmine の場合、スタブ対象のオブジェクトを`any`型に cast すれば任意の関数にスタブ化できる
  - `spyOn((target as any), anyFunc)`

## interface からモックオブジェクトを作成する方法

- `typemoq`を使う
  - https://github.com/florinn/typemoq

```typescript
const eventMock = TypeMoq.Mock.ofType<monaco.editor.IStandaloneCodeEditor>();
component.onInitHandler(eventMock.object);
```
