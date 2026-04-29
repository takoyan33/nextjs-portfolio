# バックエンド API 一覧

## 概要

- API 名: `To You Design API`
- バージョン: `v1`
- 仕様形式: `OpenAPI 3.0.1`
- ベースパス: `/api/v1`
- 認証、一覧取得、詳細取得、新規作成、更新 API を提供

## 認証

- 認証方式: `Bearer JWT`
- ヘッダー形式: `Authorization: Bearer <token>`
- 保護対象: `GET /api/v1/auth/validate`

## 共通ルール

- パスパラメータ `id` は `integer`
- 一覧 API は基本的に `{ status, data[] }` を返却
- 単体取得・作成・更新 API は `{ status, data }` または `{ status, message, data }` を返却
- 認証 API は `token` と `user` を返却
- エラー時は `error` と、必要に応じて `message` を返却

## エンドポイント一覧

| Method | Path | Summary |
| --- | --- | --- |
| `POST` | `/api/v1/auth/register` | ユーザー新規登録 |
| `POST` | `/api/v1/auth/login` | ログインして JWT トークンを取得 |
| `GET` | `/api/v1/auth/validate` | ログイン中トークンの有効性を確認 |
| `GET` | `/api/v1/histories` | 経歴一覧を取得 |
| `POST` | `/api/v1/histories` | 経歴を新規作成 |
| `GET` | `/api/v1/histories/{id}` | 経歴詳細を取得 |
| `PATCH` | `/api/v1/histories/{id}` | 経歴を更新 |
| `GET` | `/api/v1/licenses` | 資格一覧を取得 |
| `POST` | `/api/v1/licenses` | 資格を新規作成 |
| `GET` | `/api/v1/licenses/{id}` | 資格詳細を取得 |
| `PATCH` | `/api/v1/licenses/{id}` | 資格を更新 |
| `GET` | `/api/v1/jobs` | 職歴一覧を取得 |
| `POST` | `/api/v1/jobs` | 職歴を新規作成 |
| `GET` | `/api/v1/jobs/{id}` | 職歴詳細を取得 |
| `PATCH` | `/api/v1/jobs/{id}` | 職歴を更新 |
| `GET` | `/api/v1/portfolios` | ポートフォリオ一覧を取得 |
| `POST` | `/api/v1/portfolios` | ポートフォリオを新規作成 |
| `GET` | `/api/v1/portfolios/{id}` | ポートフォリオ詳細を取得 |
| `PATCH` | `/api/v1/portfolios/{id}` | ポートフォリオを更新 |
| `GET` | `/api/v1/front_skills` | フロントエンドスキル一覧を取得 |
| `POST` | `/api/v1/front_skills` | フロントエンドスキルを新規作成 |
| `GET` | `/api/v1/front_skills/{id}` | フロントエンドスキル詳細を取得 |
| `PATCH` | `/api/v1/front_skills/{id}` | フロントエンドスキルを更新 |
| `GET` | `/api/v1/back_skills` | バックエンドスキル一覧を取得 |
| `POST` | `/api/v1/back_skills` | バックエンドスキルを新規作成 |
| `GET` | `/api/v1/back_skills/{id}` | バックエンドスキル詳細を取得 |
| `PATCH` | `/api/v1/back_skills/{id}` | バックエンドスキルを更新 |
| `GET` | `/api/v1/infra_skills` | インフラスキル一覧を取得 |
| `POST` | `/api/v1/infra_skills` | インフラスキルを新規作成 |
| `GET` | `/api/v1/infra_skills/{id}` | インフラスキル詳細を取得 |
| `PATCH` | `/api/v1/infra_skills/{id}` | インフラスキルを更新 |
| `GET` | `/api/v1/other_skills` | その他スキル一覧を取得 |
| `POST` | `/api/v1/other_skills` | その他スキルを新規作成 |
| `GET` | `/api/v1/other_skills/{id}` | その他スキル詳細を取得 |
| `PATCH` | `/api/v1/other_skills/{id}` | その他スキルを更新 |
| `GET` | `/api/v1/profiles` | プロフィール一覧を取得 |
| `POST` | `/api/v1/profiles` | プロフィールを新規作成 |
| `GET` | `/api/v1/profiles/{id}` | プロフィール詳細を取得 |
| `PATCH` | `/api/v1/profiles/{id}` | プロフィールを更新 |

## 認証 API

### `POST /api/v1/auth/register`

ユーザーを新規登録します。

**リクエストボディ**

```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

**成功レスポンス `201`**

```json
{
  "token": "eyJhbGciOiJIUzI1NiJ9.example.jwt",
  "user": {
    "id": 1,
    "email": "user@example.com"
  }
}
```

**エラーレスポンス `422`**

```json
{
  "error": "Validation failed",
  "message": [
    "Email has already been taken"
  ]
}
```

### `POST /api/v1/auth/login`

ログインして JWT トークンを取得します。

**リクエストボディ**

```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

**成功レスポンス `200`**

```json
{
  "token": "eyJhbGciOiJIUzI1NiJ9.example.jwt",
  "user": {
    "id": 1,
    "email": "user@example.com"
  }
}
```

**エラーレスポンス `401`**

```json
{
  "error": "Not Authorized"
}
```

### `GET /api/v1/auth/validate`

JWT トークンの有効性を確認します。`Authorization` ヘッダーが必要です。

**成功レスポンス `200`**

```json
{
  "message": "Token is valid",
  "user": {
    "id": 1,
    "email": "user@example.com"
  }
}
```

**エラーレスポンス `401`**

```json
{
  "error": "Not Authorized"
}
```

## リソース別 API

### Histories

| Method | Path | Request body | Response |
| --- | --- | --- | --- |
| `GET` | `/api/v1/histories` | なし | `HistoryListResponse` |
| `POST` | `/api/v1/histories` | `HistoryInput` | `HistoryItemResponse` |
| `GET` | `/api/v1/histories/{id}` | なし | `HistoryDetailResponse` |
| `PATCH` | `/api/v1/histories/{id}` | `HistoryInput` | `MessageHistoryResponse` |

**`HistoryInput`**

```json
{
  "history": {
    "title": "string",
    "date": "string",
    "body": "string"
  }
}
```

**`History`**

```json
{
  "id": 1,
  "title": "string",
  "date": "string",
  "body": "string",
  "created_at": "2026-04-29T00:00:00Z",
  "updated_at": "2026-04-29T00:00:00Z"
}
```

### Licenses

| Method | Path | Request body | Response |
| --- | --- | --- | --- |
| `GET` | `/api/v1/licenses` | なし | `LicenseListResponse` |
| `POST` | `/api/v1/licenses` | `LicenseInput` | `LicenseItemResponse` |
| `GET` | `/api/v1/licenses/{id}` | なし | `LicenseItemResponse` |
| `PATCH` | `/api/v1/licenses/{id}` | `LicenseInput` | `MessageLicenseResponse` |

**`LicenseInput`**

```json
{
  "license": {
    "title": "string",
    "date": "string"
  }
}
```

**`License`**

```json
{
  "id": 1,
  "title": "string",
  "date": "string",
  "created_at": "2026-04-29T00:00:00Z",
  "updated_at": "2026-04-29T00:00:00Z"
}
```

### Jobs

| Method | Path | Request body | Response |
| --- | --- | --- | --- |
| `GET` | `/api/v1/jobs` | なし | `JobListResponse` |
| `POST` | `/api/v1/jobs` | `JobInput` | `JobItemResponse` |
| `GET` | `/api/v1/jobs/{id}` | なし | `JobItemResponse` |
| `PATCH` | `/api/v1/jobs/{id}` | `JobInput` | `MessageJobResponse` |

**`JobInput`**

```json
{
  "job": {
    "title": "string",
    "date": "string",
    "body": "string"
  }
}
```

**`Job`**

```json
{
  "id": 1,
  "title": "string",
  "date": "string",
  "body": "string",
  "created_at": "2026-04-29T00:00:00Z",
  "updated_at": "2026-04-29T00:00:00Z"
}
```

### Portfolios

| Method | Path | Request body | Response |
| --- | --- | --- | --- |
| `GET` | `/api/v1/portfolios` | なし | `PortfolioListResponse` |
| `POST` | `/api/v1/portfolios` | `PortfolioInput` | `PortfolioItemResponse` |
| `GET` | `/api/v1/portfolios/{id}` | なし | `PortfolioItemResponse` |
| `PATCH` | `/api/v1/portfolios/{id}` | `PortfolioInput` | `MessagePortfolioResponse` |

**`PortfolioInput`**

```json
{
  "portfolio": {
    "name": "string",
    "date": "string",
    "tag": ["string"],
    "topImg": "string",
    "front_url": "string",
    "back_url": "string",
    "front_github": "string",
    "back_github": "string",
    "color": "string",
    "about": "string",
    "aboutImg": "string",
    "function": "string",
    "functionImg": "string",
    "appeal": "string",
    "appealImg": "string",
    "front_skill": ["string"],
    "back_skill": ["string"],
    "infra_skill": ["string"],
    "time": "string",
    "prev_title": "string",
    "prev_article_id": "string",
    "next_title": "string",
    "next_article_id": "string"
  }
}
```

**`Portfolio`**

```json
{
  "id": 1,
  "name": "string",
  "date": "string",
  "tag": ["string"],
  "topImg": "string",
  "front_url": "string",
  "back_url": "string",
  "front_github": "string",
  "back_github": "string",
  "color": "string",
  "about": "string",
  "aboutImg": "string",
  "function": "string",
  "functionImg": "string",
  "appeal": "string",
  "appealImg": "string",
  "front_skill": ["string"],
  "back_skill": ["string"],
  "infra_skill": ["string"],
  "time": "string",
  "prev_title": "string",
  "prev_article_id": "string",
  "next_title": "string",
  "next_article_id": "string",
  "created_at": "2026-04-29T00:00:00Z",
  "updated_at": "2026-04-29T00:00:00Z"
}
```

### Skills

共通スキーマとして `Skill` と `SkillInput` を使います。`SkillInput` は送信先に応じて `front_skill` / `back_skill` / `infra_skill` / `other_skill` のいずれか 1 つを含めます。

| Method | Path | Request body | Response |
| --- | --- | --- | --- |
| `GET` | `/api/v1/front_skills` | なし | `FrontSkillListResponse` |
| `POST` | `/api/v1/front_skills` | `SkillInput` | `FrontSkillItemResponse` |
| `GET` | `/api/v1/front_skills/{id}` | なし | `FrontSkillItemResponse` |
| `PATCH` | `/api/v1/front_skills/{id}` | `SkillInput` | `MessageFrontSkillResponse` |
| `GET` | `/api/v1/back_skills` | なし | `BackSkillListResponse` |
| `POST` | `/api/v1/back_skills` | `SkillInput` | `BackSkillItemResponse` |
| `GET` | `/api/v1/back_skills/{id}` | なし | `BackSkillItemResponse` |
| `PATCH` | `/api/v1/back_skills/{id}` | `SkillInput` | `MessageBackSkillResponse` |
| `GET` | `/api/v1/infra_skills` | なし | `InfraSkillListResponse` |
| `POST` | `/api/v1/infra_skills` | `SkillInput` | `InfraSkillItemResponse` |
| `GET` | `/api/v1/infra_skills/{id}` | なし | `InfraSkillItemResponse` |
| `PATCH` | `/api/v1/infra_skills/{id}` | `SkillInput` | `MessageInfraSkillResponse` |
| `GET` | `/api/v1/other_skills` | なし | `OtherSkillListResponse` |
| `POST` | `/api/v1/other_skills` | `SkillInput` | `OtherSkillItemResponse` |
| `GET` | `/api/v1/other_skills/{id}` | なし | `OtherSkillItemResponse` |
| `PATCH` | `/api/v1/other_skills/{id}` | `SkillInput` | `MessageOtherSkillResponse` |

**`SkillInput` の例**

```json
{
  "front_skill": {
    "name": "React",
    "rank": "A",
    "tag": "frontend",
    "about": "component design",
    "icon": "react.svg"
  }
}
```

**`Skill`**

```json
{
  "id": 1,
  "name": "React",
  "rank": "A",
  "tag": "frontend",
  "about": "component design",
  "icon": "react.svg",
  "created_at": "2026-04-29T00:00:00Z",
  "updated_at": "2026-04-29T00:00:00Z"
}
```

### Profiles

| Method | Path | Request body | Response |
| --- | --- | --- | --- |
| `GET` | `/api/v1/profiles` | なし | `ProfileListResponse` |
| `POST` | `/api/v1/profiles` | `ProfileInput` | `ProfileItemResponse` |
| `GET` | `/api/v1/profiles/{id}` | なし | `ProfileItemResponse` |
| `PATCH` | `/api/v1/profiles/{id}` | `ProfileInput` | `MessageProfileResponse` |

**`ProfileInput`**

```json
{
  "profile": {
    "content": "string",
    "hobby": "string",
    "license": "string"
  }
}
```

**`Profile`**

```json
{
  "id": 1,
  "content": "string",
  "hobby": "string",
  "license": "string",
  "created_at": "2026-04-29T00:00:00Z",
  "updated_at": "2026-04-29T00:00:00Z"
}
```

## 補足スキーマ

### `ErrorResponse`

```json
{
  "error": "Not Authorized",
  "message": "string or string[]"
}
```

### `ValidateTokenResponse`

```json
{
  "message": "Token is valid",
  "user": {
    "id": 1,
    "email": "user@example.com"
  }
}
```
