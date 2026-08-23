# キャッシュ戦略

### 前提
レンダリング	タイミング	Pages Routerとの比較
Static Rendering	build時やrevalidate後	SSG・ISR相当
Dynamic Rendering	ユーザーリクエスト時	SSR相当

- App RouterはデフォルトでStatic Rendering(SSG・ISR)となっており、Dynamic Renderingはオプトイン
- Dynamic Renderingになる場合
  - cookies()/headers()などのDynamic APIs↗︎と呼ばれるAPIを利用
  - fetch()のオプション↗︎でcache: "no-store"を指定した場合や、next: { revalidate: 0 }を指定した場合

- Next.jsでは可能な限りStatic Renderingにする
  - Static Renderingは耐障害性・パフォーマンスに優れています。


/ 
/about
/portfolios
- 最新のコンテンツはないため、force-cacheを使用し、Data Cacheがあれば、それを利用します。
- Data Cacheがない場合は、再度データを取得し、Data Cacheを更新します。

/blog
- 約1ヶ月毎に更新している為、1ヶ月間はキャッシュを利用します。(ISR化)

/admin
- データを更新後revalidatePath()で、キャッシュエントリを削除し、更新します。

※ 今後は最近追加されたuse cacheなどに変更予定

# レンダリング形式

## Dynamic Rendering SSR (サーバーサイドレンダリング)
 - リクエストごとにサーバーでHTML生成します。

Page Routes
/not-found
/admin
/admin/dashboard
/admin/edit/history
/admin/edit/history/[id]
/admin/edit/job
/admin/edit/job/[id]
/admin/edit/license
/admin/edit/license/[id]
/admin/edit/portfolio
/admin/edit/portfolio/[id]
/admin/edit/skill
/admin/edit/skill/back/[id]
/admin/edit/skill/front/[id]
/admin/edit/skill/infra/[id]
/admin/edit/skill/other/[id]
/blog (ISR)
/contact
/admin
/maintenance
/portfolios

API Routes
 /api/histories
 /api/histories/[id]
 /api/jobs
 /api/jobs/[id]
 /api/licenses
 /api/licenses/[id]
 /api/portfolios
 /api/portfolios/[id]
 /api/profiles
 /api/skills/back
 /api/skills/back/[id]
 /api/skills/front
 /api/skills/front/[id]
 /api/skills/infra
 /api/skills/infra/[id]
 /api/skills/other
 /api/skills/other/[id]


## Static Rendering
 - ビルド時に1回だけHTMLを生成して固定化します。
 - リクエストごとにサーバー処理は走りません

 / 
 /about
 /maintenance
 /portfolios
 /privacy-policy
 /robots.txt
 /sitemap.xml

## SSG (静的サイト生成)
- 動的ルートをビルド時に静的生成する方式です。
/portfolios/[id]