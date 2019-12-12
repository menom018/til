## replayToken

- LineBotのreolyTokenは有効期限がある
  - そのため、replyaTokenで応答する前に思い処理をはさむと400エラーとなる
  - 期限は数十秒程度
  - 一度使うと無効

## pushMessage

- bot側からメッセージを送信する機能
  - プランごとに無料枠が設けてある
  - 無料枠を超えるとメッセージ1通あたり3円ほど課金される
