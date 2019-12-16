# CloudTrailのAPIログをKinesissiに流す方法

- CloufTrailの証跡のCloudWatchLogsへの配信 
  - https://docs.aws.amazon.com/ja_jp/awscloudtrail/latest/userguide/monitor-cloudtrail-log-files-with-cloudwatch-logs.html
- CloudWatchLogのサブスクリプションフィルターでKinesissデータストリームに流す
  - https://docs.aws.amazon.com/ja_jp/AmazonCloudWatch/latest/logs/SubscriptionFilters.html#DestinationKinesisExample


## 課題

- フィルターをかけないとすべてのAPIログがLogsに貯まる-> コストがでかい
- サブスクリプションフィルターでKinesissに流すデータは制限できそう
