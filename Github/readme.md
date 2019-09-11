# GitHub APIについてもいづけ書きたい

# gitリポジトリのクローン

- 過去コミットやブランチもまとめて複製したい場合
  - 複製元リポジトリ：git@github.com:a.git
  - 複製先リポジトリ：git@github.com:b.git

```
git clone --mirror git@github.com:a.git hoge
cd hoge/
git remote set-url origin git@github.com:b.git
git push --mirror origin
```
