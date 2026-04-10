---
name: pj-bundle-analyze
description: Bundle Analyzerを活用し、フロントエンドのビルド成果物を可視化・分析する
---

## pj-bundle-analyze

### 概要
Bundle Analyzerを活用し、フロントエンドのビルド成果物を可視化・分析することで、パフォーマンス最適化を実施
---


### 実施内容
- `yarn next experimental-analyze` を実行する
- 日本語で記載する
- http://localhost:4000 を確認し、問題がある箇所を洗い出す
 - パスは /, /about, /blog, /portfoliosを確認する。それ以外は確認しない
- 結果を `ai-output` にmdファイルを作成する。問題の箇所と改善策を記載する
- mdファイルを開く