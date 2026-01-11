---
description: 現在の変更内容でプルリクエストを作成します
---

1. git status を確認し、未コミットの変更がある場合は教えてください。
2. 現在のブランチをリモートリポジトリにプッシュします。
   - `git push origin HEAD`
3. 変更内容を分析し、適切なPRタイトルと説明（body）を生成してください。
   - `git log main..HEAD` や `git diff --stat main..HEAD` を使用して変更範囲を確認します。
4. GitHub CLI を使用してプルリクエストを作成します。
   - `gh pr create --title "<生成されたタイトル>" --body "<生成された説明>"`
   - **重要**: 実際のコード変更に基づいて、具体的なタイトルと本文を生成してください。
   - もし `gh` コマンドがインストールされていない、または失敗した場合は、手動でPRを作成するためのGitHub URLを出力してください（例: `https://github.com/<owner>/<repo>/compare/<branch>`）。