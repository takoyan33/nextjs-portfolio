# Code Review Reference

## project rulesを参照
- .cursor/rules/react.md
- .cursor/rules/test.md
- .cursor/rules/general.md
- .cursor/rules/storybook.md

## 観点

- バグ・不具合がないか
 - null / undefined 考慮漏れ
 - 非同期の扱いミス（race condition, waterfall）
 - stateの不整合
 - エラーハンドリング不足

- パフォーマンス
 - 無駄な再レンダリング
 - useEffectの依存配列ミス
 - 重い処理の直実行
 - waterfallになってないか

- 設計（地味だけど超重要）
 - 責務分離できてる？
 - UIとロジック分離されてる？
 - 再利用できる構造になってる？
 - hooks / utils の切り出し適切？

## 出力フォーマット

## 概要
## 修正点
## 疑問点