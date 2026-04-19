---
name: pj-make-shot-diff
description: 指定した画面のフルスクリーンショットをPC/SPで取得する
---

## 概要
商用環境とローカル環境を起動し、指定パスの画面をPC/SPでフルスクリーンキャプチャする。

---

## 入力
- path: スクショ対象のパス（例: /portfolio/1）
- baseUrl: 省略時は http://localhost:3000

---

## 実施内容

1. ローカル環境起動
   - `yarn dev:mock` を実行
   - 起動完了を待つ（http://localhost:3000 が応答するまで）

2. ページ表示
   - `${baseUrl}${path}` にアクセス

3. スクリーンショット取得


4. 商用環境に移動
   - 起動完了を待つ（https://to-you-design.vercel.app/ が応答するまで）

5. ページ表示
   - `https://to-you-design.vercel.app/${path}` にアクセス

6. スクリーンショット取得

### PC
- viewport: 1440x900
- フルページスクリーンショット
- lazy load対策として最下部までスクロール後に撮影

### SP
- viewport: 390x844（iPhone 14相当）
- 同様にフルページスクリーンショット

7. 保存

- 保存先: `./ai-output/screenshots/`
- ファイル名:
  - PC: `pc_<pathをスラッグ化>_<YYYYMMDD>.png`
  - SP: `sp_<pathをスラッグ化>_<YYYYMMDD>.png`

例:
- `/portfolio/1` → `pc_portfolio_1_20260420.png`

---

## 注意点

- フォント・画像の読み込み完了後に撮影する（waitForNetworkIdle）
- アニメーションがある場合は停止 or 1秒待機
- モーダルなどが開いている場合は閉じる
- スクロール途中のローディング崩れがないか確認
- 一枚画像にならない場合は複数画像でも可能

---

## 出力

- PC/SPのスクリーンショット画像を `ai-output` に保存