---
name:  "pj-check"
description: コードレビューのコマンド
---

## Step1: 差分取得
- `scripts/git-diff.ts` を実行して変更内容を取得

## Step2: 分析
- `scripts/file-classifier.ts` でファイル分類

## Step3: レビュー
- `/reference/REFERENCE.md` を元にレビュー

## Step4: 保存
- `scripts/save-review.ts` で保存