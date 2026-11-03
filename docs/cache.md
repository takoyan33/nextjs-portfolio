# キャッシュ戦略

## 1. 前提：レンダリング形式

App Router では、ページのレンダリング形式とデータのキャッシュ設定を組み合わせて、パフォーマンスを最適化します。


| レンダリング形式          | タイミング     | Pages Routerとの比較 |
| ----------------- | --------- | ---------------- |
| Static Rendering  | ビルド時や再生成時 | SSG・ISR相当        |
| Dynamic Rendering | リクエスト時    | SSR相当            |


- **Static Renderingを基本とする**：可能な限り静的に生成し、サーバー処理を減らすことで、パフォーマンスと耐障害性を高めます。
- **Dynamic Renderingを使用するケース**：リクエストごとに最新の情報が必要なページや、ユーザーごとに異なる情報を扱うページなど。

Dynamic Renderingになる主なケースは以下のとおりです。

- `cookies()` や `headers()` などの Dynamic APIs を使用する。
- `fetch()` に `cache: "no-store"` を指定する。
- `fetch()` に `next: { revalidate: 0 }` を指定する。

※ レンダリングやキャッシュの動作は、Next.jsのバージョンや設定によって異なります。

## 2. ページごとのキャッシュ戦略


| 対象ページ         | キャッシュ戦略    | 方針                               |
| ------------- | ---------- | -------------------------------- |
| `/`           | Data Cache | 更新頻度が低いため、`force-cache` を使用する    |
| `/about`      | Data Cache | 更新頻度が低いため、`force-cache` を使用する    |
| `/portfolios` | Data Cache | 更新頻度が低いため、`force-cache` を使用する    |
| `/blog`       | ISR        | 約1か月ごとの更新を想定し、再検証間隔を設定する         |
| `/admin`      | キャッシュ再検証   | データ更新後に `revalidatePath()` を呼び出す |


### Data Cache：`force-cache`

`/`、`/about`、`/portfolios` では、更新頻度が低いため、キャッシュを優先してデータを取得します。

- キャッシュが存在する場合は、キャッシュされたデータを利用する。
- キャッシュが存在しない場合は、データを取得してキャッシュに保存する。

### ISR：`revalidate`

`/blog` では、約1か月ごとの更新を想定し、一定期間キャッシュを利用します。

- 再検証間隔を設定し、キャッシュを再生成する。
- 毎回データを取得する必要をなくし、表示速度を維持する。

### キャッシュの再検証：`revalidatePath()`

`/admin` でデータを更新した場合は、`revalidatePath()` を使用して、対象パスに関連するキャッシュを再検証します。

- データの更新後にキャッシュを再検証する。
- 次回のアクセス時に、更新後のデータが反映されるようにする。

## 3. レンダリング形式ごとのページ一覧

### 3.1. Dynamic Rendering（SSR相当）

リクエスト時にサーバーで処理を行い、HTMLを生成する方式です。

**Page Routes**

- `/not-found`
- `/admin`
- `/admin/dashboard`
- `/admin/edit/history`
- `/admin/edit/history/[id]`
- `/admin/edit/job`
- `/admin/edit/job/[id]`
- `/admin/edit/license`
- `/admin/edit/license/[id]`
- `/admin/edit/portfolio`
- `/admin/edit/portfolio/[id]`
- `/admin/edit/skill`
- `/admin/edit/skill/back/[id]`
- `/admin/edit/skill/front/[id]`
- `/admin/edit/skill/infra/[id]`
- `/admin/edit/skill/other/[id]`
- `/contact`
- `/maintenance`

※ `/blog` はISR、`/admin` はキャッシュ再検証の対象としても管理します。

**API Routes**

- `/api/histories`
- `/api/histories/[id]`
- `/api/jobs`
- `/api/jobs/[id]`
- `/api/licenses`
- `/api/licenses/[id]`
- `/api/portfolios`
- `/api/portfolios/[id]`
- `/api/profiles`
- `/api/skills/back`
- `/api/skills/back/[id]`
- `/api/skills/front`
- `/api/skills/front/[id]`
- `/api/skills/infra`
- `/api/skills/infra/[id]`
- `/api/skills/other`
- `/api/skills/other/[id]`

### 3.2. Static Rendering（静的レンダリング）

ビルド時などにHTMLを生成し、静的なコンテンツとして配信する方式です。

- `/`
- `/about`
- `/maintenance`
- `/portfolios`
- `/privacy-policy`
- `/robots.txt`
- `/sitemap.xml`

### 3.3. SSG：動的ルートの静的生成

動的なURLを持つページを、ビルド時に静的生成する方式です。

- `/portfolios/[id]`

## 4. 今後の改善方針

今後は、近年追加された `use cache` などのキャッシュ機能への移行を検討します。

キャッシュの設定を整理し、ページの更新頻度やデータの特性に応じて、適切なキャッシュ戦略を採用します。