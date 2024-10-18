
# To You Design Portfolio

## 目次
- [システムの特徴](#system-feature)
- [使用技術について](#technology-used)
- [ディレクトリ構成](#directory-structure)
- [ブランチについて](#technology-used)

-[URL](https://nextjs-portfolio-puce.vercel.app/)

<h2 id="system-feature">システムの特徴</h2>
 これは、自分のポートフォリオサイトです。<br>
 特徴としては、next.jsで作っており、コンポーネント化できるところは、コンポーネント化をしています。<br>
 また、 Tailwind CSS,FontAwesome などを用いてます。

 ### 画面構成図

 準備中

<h2 id="technology-used">使用言語、環境</h2>

### nodeバージョン

- node v18.18.0
- npm v9.8.1

### フロントエンド

- [Next.js](https://nextjs.org/) 14.0.4
- [React](https://ja.reactjs.org/) 18.2.0
- [typescript](https://www.typescriptlang.org/) 4.5.5

### リンター
- [ESLint](https://eslint.org/) 9.9.0
- [Prettier](https://prettier.io/) 3.3.3
- [Stylelint](https://stylelint.io/) 16.8.2
- [husky](https://typicode.github.io/husky/)9.1.4
- [lint-staged](https://github.com/lint-staged/lint-staged) 

### テスト
- [Vitest](https://vitejs.dev/guide/features.html) 2.1.1
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) 10.4.0

### ホスティング

Vercel

### ライブラリ
[Swiper](https://swiperjs.com/react) 6.8.1

<h2 id="technology-used">ディレクトリ構成</h2>

```
.
├── api             #APIのデータ
├── components      #コンポーネントの記載
├── app
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

<h2 id="technology-used">ブランチについて</h2>

developブランチが開発環境でmainが本番環境です。

| ブランチ名 | 役割                               | 派生元  | マージ先        |
| ---------- | ---------------------------------- | ------- | --------------- |
| main       | 公開するものを置くブランチ         |         |                 |
| develop    | 開発中のものを置くブランチ         | main    | main            |
| feature-\* | 新機能開発中に使うブランチ         | develop | develop         |

# Author
 
* 作成者 阿部 舜平
* E-mail harrier2070@gmail.com