# Typescript の単体テスト周り

## 【課題】sinon で stub したい場合、どうすればいい

- sinon.stub で特定の関数をスタブ化したいが、引数、返り値がもとの関数の型に制限される
  - できればその制限を解除して任意の返り値に設定したい
  - たとえば AWSSDK の各関数など
    - 一応代替案として aws-sdk-mock ライブラリでモック化は可能
- jasmine の場合、スタブ対象のオブジェクトを`any`型に cast すれば任意の関数にスタブ化できる
  - `spyOn((target as any), anyFunc)`
  
### 解決策
- sinonでjasmineと同様に`any`でキャストすると`型に呼び出しシグネチャがない式を呼び出すことはできません。型 '((obj: any) => SinonStub<any[], any>) | ((obj: {}) => SinonStub<unknown[], {}>)' には互換性のある呼び出しシグネチャがありません。`とエラーになる
- なのでany型ではなく独自のモック用インターフェースを用意し、そのインターフェースにCastさせることで回避できた。

#### AWS.Glueのインスタンスをスタブにする場合の例

```typescript
interface MockGlue {
        getTable: (param: any) => {
            promise: () => Promise<any>
        }
    }
    // stub化時にエラーが出ず、任意の返り値(厳密にはインターフェースで定義した値)を設定できる
    sinon.stub((clients.Glue as MockGlue), 'getTable').returns({
                    promise: () => Promise.resolve({
                        mockTable
                    })
                })
```

## interface からモックオブジェクトを作成する方法

- `typemoq`を使う
  - https://github.com/florinn/typemoq


```typescript
const eventMock = TypeMoq.Mock.ofType<monaco.editor.IStandaloneCodeEditor>();
component.onInitHandler(eventMock.object);
```
