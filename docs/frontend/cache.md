# キャッシュ戦略
/ 
/about
/portfolios
- 最新のコンテンツはないため、force-cacheを使用し、Data Cacheがあれば、それを利用します。
- Data Cacheがない場合は、再度データを取得し、Data Cacheを更新します。

/blog
- ISRで1日ごとのキャッシュを更新します。

/admin
- データを更新後revalidatePath()で、キャッシュエントリを削除し、更新します。

※ 今後は最近追加されたuse cacheなどに変更予定

# レンダリング形式

- SSR (サーバーサイドレンダリング)

Page Routes
/contact
/500
/admin 配下

API Routes
/api/histories
/api/jobs
/api/licenses
/api/skills/back
/api/skills/front
/api/skills/infra
/api/skills/other
/api/portfolios

- ISR 
/blog 1日ごとのキャッシュを更新します。

- SSG (静的サイト生成)
/
/about
/portfolios
/privacy-policy
/maintenance
