flowchart TD
  A["ユーザー操作"] --> B["タブ切り替え"]
  B --> C["activeTab更新（Zustand）"]
  C --> D["タブコンテンツ表示(データ取得済み)"]
  D --> E["画面更新"]