# Docker 開発環境 (dev)

このプロジェクトを Docker でローカル開発する手順です。`yarn dev` 相当の開発サーバをコンテナ内で起動します。

## 使い方

1. イメージをビルドしてコンテナを起動

```bash
docker compose up --build
```

2. ブラウザで開く

http://localhost:3000

3. コンテナをバックグラウンドで起動する場合

```bash
docker compose up -d --build
```

4. ログを確認

```bash
docker compose logs -f
```

5. 停止

```bash
docker compose down
```

## 注意点
- ソースコードはホストと同期しています（`volumes`）。
- ホストの `node_modules` を使わず、コンテナ側で `node_modules` を管理します。
- ファイル変更の検知が効かない場合は `CHOKIDAR_USEPOLLING=true` を有効にしています。

---
