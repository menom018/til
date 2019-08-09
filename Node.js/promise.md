# 非同期処理 関連 （Promise、async/await )

## Promise.all の挙動について

- 引数に渡したPromiseが全てresolveされたタイミングでPromise.allがresolveされる
- どれか一つのPromiseがrejectされた場合そのタイミングでPromise.allがrejectされる
  - 他に処理中のPromiseがあっても、rejectされるのは少し不便

### 問題点

- Promise.allに渡した全てのPromise処理がresolve/reject問わず完了したあとで後続の処理を実施したい場合は工夫する必要がある
  
### 対応案１ 

- 引数に渡すPromiseに対してCatchして、エラーの場合でもresolveで返すようにする。
- Promise.all内のPromiseは必ずresolveされるようになる
- Promise.allの返り値の配列から、errorオブジェクトが存在する場合は例外処理を実行するようにする
- 制約
  - resolve時の値はerror時のオブジェクトと区別できるようにすること
  - サンプルコードではresolve時はnullである前提で記述しています。

ex)

```javascript
const promiseList = [Promise.resove(true), Promise.reject(Error('test_err'))]

Promise.all(promiseList.map(p => p.catch(err => {
        //エラー時もresolveで返すようにして、全てのPromiseを成否問わずに完了するまで待機させる
        console.error(err);
        return err;
    })))
    .then(resList => {
        // エラーObjectが存在する場合の例外処理を記述する
        const errList = resList.filter(v => v != null);
        errList.forEach(err =>{
            console.error(err)
        })
    });


```

### 備考
- MDNのリファレンスにも対処法かいてあったｗ＠
  - https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise/all#Promise.all_fail-fast_behaviour
