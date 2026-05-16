---
name:  "pj-make-plan-doc"
description: 設計書と画面仕様書とMermaidを作成する
---

# pj-make-plan-doc

**このファイルは手順・原則のみ。詳細・コード例は reference.md に書く。**

1. **ページの解析**
 - pj-make-plan-doc `パス名`で指定されたパスを確認する
 - ページ内容を確認する

2. **設計書の作成**
 - assets/DRAFT-DOC.md のフォーマットで設計書を作成
   - docs/frontend/ に配置する
 - assets/DRAFT-MERMAID.md のフォーマットでMermaidを作成
   - docs/frontend/mermaid/ に配置する
 - Draw.ioの画面設計図を作成
  - 実際に画面を起動して確認 (pnpm dev:mock)
  - コードも確認し、画面図に詳細に記載する
  - 左側に画面図と右側に画面要素の説明を日本語で記載する
    - テーブル形式で記載し、No1, No2 と書く
    - 条件分岐があればその説明を行う
    - metaタグなどの情報も記載する
  - pc版とsp版の両方を作成する
    - pc版だとdocs/frontend/drawio/pc/`[page-name].drawio` に配置する
    - sp版だとdocs/frontend/drawio/sp/`[page-name].drawio` に配置する