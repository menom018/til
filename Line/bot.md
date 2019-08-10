## replayToken

- LineBotのreolyTokenは有効期限がある
  - そのため、replyaTokenで応答する前に思い処理をはさむと400エラーとなる
  - 期限は数十秒程度
  - 一度使うと無効