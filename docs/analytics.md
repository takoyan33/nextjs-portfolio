# Google Analytics / Microsoft Clarity 実装メモ

## 概要

このプロジェクトでは、アクセス解析とユーザー行動分析のために Google Analytics、Google Tag Manager、Microsoft Clarity を利用している。

計測タグは `app/layout.tsx` の `RootLayout` で全ページ共通に読み込まれる。実際にタグを描画するのは `process.env.NEXT_PUBLIC_NODE_ENV === "production"` の場合のみ。

## 実装箇所

| 種別 | ファイル | 役割 |
|------|----------|------|
| 共通読み込み | `app/layout.tsx` | production 判定、各計測コンポーネントの読み込み |
| Google Analytics | `components/layout/GoogleAnalytics.tsx` | GA4 の `gtag.js` と初期化スクリプトを読み込む |
| Google Tag Manager | `app/layout.tsx` | `@next/third-parties/google` の `GoogleTagManager` を読み込む |
| Microsoft Clarity | `utils/clarity.tsx` | Clarity のタグスクリプトを読み込む |
| GTMイベント送信 | `components/ui/button/common-button.tsx` | CTA ボタンクリック時に `window.dataLayer.push()` を実行 |
| プライバシー表示 | `app/privacy-policy/page.tsx` | GA / Clarity の利用目的と外部規約リンクを表示 |

## 読み込み条件

`RootLayout` では以下の条件を満たす場合に計測タグを読み込む。

```tsx
process.env.NEXT_PUBLIC_NODE_ENV === "production"
```

production 判定内で読み込まれるものは以下。

- `SpeedInsights`
- `GoogleAnalytics`
- `GoogleTagManager`
- `Clarity`

Clarity の接続先に対しては、production 判定の外で常に `preconnect` が設定されている。

```tsx
<link rel="preconnect" href="https://y.clarity.ms" />
<link rel="preconnect" href="https://www.clarity.ms" />
```

## Google Analytics

`components/layout/GoogleAnalytics.tsx` で `next/script` を使い、`afterInteractive` のタイミングで GA4 を読み込む。

現在の GA4 測定 ID はハードコードされている。

```txt
G-R47KRGK42T
```

読み込み内容は以下。

- `https://www.googletagmanager.com/gtag/js?id=G-R47KRGK42T` を非同期ロード
- `window.dataLayer` を初期化
- `gtag("js", new Date())` を実行
- `gtag("config", "G-R47KRGK42T")` を実行

`.env` / `.env.local` には `NEXT_PUBLIC_GATAG` が定義されているが、現状の `GoogleAnalytics.tsx` では参照されていない。

## Google Tag Manager

`app/layout.tsx` で `@next/third-parties/google` の `GoogleTagManager` を利用している。

```tsx
const gtmId = process.env.NEXT_PUBLIC_GTM ?? ""
<GoogleTagManager gtmId={`GTM-${gtmId}`} />
```

`.env` / `.env.local` の設定値は以下。

```txt
NEXT_PUBLIC_GTM="WND4GDPL"
```

そのため実際に渡される GTM ID は以下になる。

```txt
GTM-WND4GDPL
```

## CTAクリックイベント

`components/ui/button/common-button.tsx` の `BaseButton` は、`gtmEventCategory` と `gtmEventAction` が指定された場合に `window.dataLayer.push()` を実行する。

送信されるイベント形式は以下。

```ts
{
  event: gtmEventAction,
  eventCategory: gtmEventCategory,
  eventAction: gtmEventAction,
  eventLabel: gtmEventLabel ?? text,
}
```

`window.dataLayer` が存在しない場合は、警告を出した上で空配列として初期化する。

```ts
console.warn("dataLayer がまだ存在しません")
window.dataLayer = []
```

トップページでは以下の CTA に GTM イベント情報が設定されている。

| 場所 | eventCategory | eventAction | eventLabel |
|------|---------------|-------------|------------|
| Portfolio CTA | `home_portfolio` | `click_more_portfolio` | `ホーム_ポートフォリオ_もっと見る` |
| History CTA | `home_history` | `click_more_history` | `ホーム_経歴_もっと見る` |
| Blog CTA | `home_blog` | `click_more_blog` | `ホーム_ブログ_もっと見る` |
| Contact CTA | `home_contact` | `click_more_contact` | `ホーム_お問い合わせ_もっと見る` |

## Microsoft Clarity

`utils/clarity.tsx` で `next/script` を使い、`afterInteractive` のタイミングで Clarity タグを読み込む。

現在の Clarity ID はハードコードされている。

```txt
pbadl6xwcf
```

読み込みスクリプトでは、Clarity のキュー関数を `window.clarity` に作成し、以下のスクリプトを非同期で挿入する。

```txt
https://www.clarity.ms/tag/pbadl6xwcf
```

`.env` / `.env.local` には `NEXT_PUBLIC_CLARITY_ID` が定義されているが、現状の `utils/clarity.tsx` では参照されていない。

## プライバシーポリシー

`app/privacy-policy/page.tsx` では、アクセス解析ツールとして Google Analytics と Microsoft Clarity を利用していることを明記している。

Google Analytics については、Cookie を利用した匿名データ収集と、ブラウザ設定による無効化について説明している。

Microsoft Clarity については、ユーザー体験向上を目的に、匿名の行動データ、ヒートマップ、セッションレコーディングを扱うことを説明している。

## 現状の注意点

- `NEXT_PUBLIC_NODE_ENV` が `production` でない場合、GA / GTM / Clarity は読み込まれない。
- `NEXT_PUBLIC_GATAG` と `NEXT_PUBLIC_CLARITY_ID` は env に定義されているが、実装では未使用。
- GA4 と Clarity の ID はコンポーネント内に直接書かれているため、環境ごとに切り替える場合は env 参照へ寄せる必要がある。
- `GoogleAnalytics` と `GoogleTagManager` の両方を読み込んでいるため、GTM 側でも GA4 タグを設定する場合は二重計測に注意する。
- `window.dataLayer` が未定義でもクリックイベント送信時に配列を作るが、GTM が未読み込みの場合は外部送信されない。

## 関連ファイル

- `app/layout.tsx`
- `components/layout/GoogleAnalytics.tsx`
- `utils/clarity.tsx`
- `components/ui/button/common-button.tsx`
- `app/privacy-policy/page.tsx`
- `.env`
- `.env.local`
