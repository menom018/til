const promiseList = [Promise.resove(true), Promise.reject(Error('test_err'))]

Promise.all(promiseList.map(p => p.catch(err => {
        //エラー時もresolveで返すようにして、全てのPromiseを成否問わずに完了するまで待機させる
        console.error(err);
        return err;
    })))
    .then(resList => {
        // エラーObjectが存在する場合の例外処理を記述する
        const errList = resList.filter(v => v != null);
        errList.forEach(err => {
            console.error(err)
        })
    });
