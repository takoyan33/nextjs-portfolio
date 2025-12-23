# To You Design Portfolio

![Portfolio Top](/public/images/portfolio/portfolio_top3.png)

## 目次
- [システムの特徴](#system-feature)
- [使用技術について](#technology-used)
- [ディレクトリ構成](#directory-structure)
- [ブランチについて](#branch-structure)
- [ライセンス](#license)

[URL](https://to-you-design.vercel.app/)

## システムの特徴
自身の制作実績・スキルセットを分かりやすく伝えることを目的に開発しました。  
コンポーネント設計、テスト容易性、保守性を重視し、実務を想定した構成を意識しています。

- **Next.js App Router 採用**：ページ分割・レイアウト設計を整理
- **コンポーネント指向設計**：再利用性を高めたUI設計
- **レスポンシブ対応**：PC / SP 両対応
- **テスト導入**：Unit / E2E テストによる品質担保
- **パフォーマンス & 分析**：Lighthouse・GA・Clarity による計測

## 技術スタック

### Node.js バージョン
- Node.js: v22.14.0
- npm: v9.8.1

### フロントエンド
- [Next.js](https://nextjs.org/) v15.5.3
- [React](https://ja.reactjs.org/) v19.0.0
- [TypeScript](https://www.typescriptlang.org/) v4.5.5

### バックエンド
- [Ruby](https://www.ruby-lang.org/ja/) v3.2.6
- [Rails](https://rubyonrails.org/) v7.0.2

### リンター
- [ESLint](https://eslint.org/) v9.9.0
- [Prettier](https://prettier.io/) v3.3.3
- [Stylelint](https://stylelint.io/) v16.8.2
- [Husky](https://typicode.github.io/husky/) v9.1.4
- [Lint-staged](https://github.com/lint-staged/lint-staged)

### テスト
- [Vitest](https://vitest.dev/) v2.1.1
- [Vitest Browser](https://vitest.dev/guide/browser.html) v2.1.1
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) v10.4.0
- [Playwright](https://playwright.dev/) v1.42.1

### ホスティング・インフラ
- [Docker](https://www.docker.com/)
- [Vercel](https://vercel.com/)
- [Render](https://render.com/)

### 状態管理 / 通信
- [SWR](https://swr.vercel.app/ja) v2.3.4
- [Zustand](https://zustand.docs.pmnd.rs/getting-started/) v5.0.7
- [MSW](https://mswjs.io/) v2.11.2

### フォーム / バリデーション
- [React Hook Form](https://react-hook-form.com/) v7.45.1
- [Zod](https://zod.dev/) v3.25.1

### 分析・監視
- [Google Analytics](https://developers.google.com/analytics?hl=ja)
- [Microsoft Clarity](https://clarity.microsoft.com/)
- [pino](https://github.com/pinojs/pino) v8.17.2

### UI / 表現
- [Swiper](https://swiperjs.com/react) v6.8.1
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/) v7.0.0
- [React Modal](https://reactcommunity.org/react-modal/) v3.14.3

### ライブラリ
- [EmailJS](https://www.emailjs.com/) v3.14.0
- [unlighthouse](https://github.com/unlighthouse/unlighthouse) v1.0.0

## ディレクトリ構成

```
.
├── api             #APIのデータ
├── app
│   ├── components #コンポーネントの記載
│   ├── api        #APIの取得
│   ├── about      #Aboutページ
│   ├── contact    #お問い合わせページ
│   ├── portfolio  #ポートフォリオページ
│   ├── portfolios #ポートフォリオ個別ページ
│   ├── skills     #スキルページ
├── public          #画像
├── stories         #storybook
├── styles          #cssの設定
├── hooks           #カスタムフック
├── utils           #共通関数
├── types           #型定義
```

## ブランチについて

developブランチが開発環境でmainが本番環境です。

| ブランチ名 | 役割                               | 派生元  | マージ先        |
| ---------- | ---------------------------------- | ------- | --------------- |
| main       | 公開するものを置くブランチ         |         |                 |
| develop    | 開発中のものを置くブランチ         | main    | main            |
| feature\* | 新機能開発中に使うブランチ          | develop | develop         |

## コマンド

```bash
# 開発環境起動
yarn dev

# モック環境で起動
yarn dev:mock

# ビルド
yarn build

# 本番環境起動
yarn start

# Lint実行
yarn lint

# 通常のTest実行
yarn test --project node

# Vitest Browse modeでのTest実行
yarn test --project browser

# Storybook起動
yarn storybook

# Playwright起動
yarn playwright

# Lighthouse起動
yarn unlighthouse
```

# Author
 
* 作成者 阿部 舜平
* E-mail harrier2070@gmail.com

# License

3Dモデルは以下を使用しています
https://sketchfab.com/3d-models/red-triangular-cage-sphere-96e0750262fb450fa2c8bc5a1e879fcc