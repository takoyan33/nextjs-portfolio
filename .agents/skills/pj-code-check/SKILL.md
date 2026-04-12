---
name:  "pj-code-check"
description: 現状のコミット履歴を取得し、コードレビューを行うスキル
---

## Step1: 差分取得
- `scripts/git-diff.ts` を実行してmainとの変更内容を取得

## Step2: レビュー
- `/reference/REFERENCE.md` を元にレビュー

## Step3: 保存
- `scripts/save-review.ts` で保存