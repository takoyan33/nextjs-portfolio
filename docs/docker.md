# Docker 開発環境 (dev)

このプロジェクトを Docker でローカル開発する手順です。`pnpm dev` 相当の開発サーバをコンテナ内で起動します。

## 使い方

1. イメージをビルドしてコンテナを起動

```bash
docker compose up --build
```

2. ブラウザで開く

http://localhost:3001

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

### ディレクトリ構成

プロジェクトのルートディレクトリに、以下の Docker 関連ファイルを配置しています。

```text
.
├── .dockerignore       # Docker イメージ作成時に除外するファイルを指定
├── docker-compose.yml  # コンテナの起動設定やポート、ボリュームなどを管理
└── Dockerfile.dev      # 開発環境のイメージ作成手順を定義
```

- **`.dockerignore`**：Docker イメージの作成時に不要なファイルやディレクトリを除外します。
- **`docker-compose.yml`**：コンテナの起動方法やポート、ソースコードの同期、環境変数などを設定します。
- **`Dockerfile.dev`**：Node.js をベースに、pnpm の有効化や依存関係のインストールなど、開発環境の構築手順を定義します。