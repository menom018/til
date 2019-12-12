# ECSの各ロールの役割

- https://stackoverflow.com/questions/48999472/difference-between-aws-elastic-container-services-ecs-executionrole-and-taskr

## タスク実行ロール


- タスク（コンテナ）に紐付けるIAMロール
  - コンテナ処理に必要な権限をつけておく


## Execution Role

- ECS自体が利用するIAM Roleで、imageのpullやCloudWatchへのログの書き込みを行う
