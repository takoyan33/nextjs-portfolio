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

## Step4: 修正確認
- `scripts/save-review.ts` を確認して、項目ごとに手動で直すか自動で直すか選択する

## Step5: 修正後レビュー
- 再度Step1からStep4行い、指摘点がなくなるまで繰り返し行う