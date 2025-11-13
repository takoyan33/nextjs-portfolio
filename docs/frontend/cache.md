# キャッシュ戦略
/ 
/about
/portfolios
- 最新のコンテンツはないため、force-cacheを使用し、Data Cacheがあれば、それを利用します。
- Data Cacheがない場合は、再度データを取得し、Data Cacheを更新します。

/blog
- 約1ヶ月毎に更新している為、1ヶ月間はキャッシュを利用します。(ISR化)

/admin
- データを更新後revalidatePath()で、キャッシュエントリを削除し、更新します。

※ 今後は最近追加されたuse cache などに変更予定

# レンダリング形式

Page Routes
/about
/blog
/admin
/404

API Routes
/api/licenses
/api/skills/back
/api/skills/front
/api/skills/infra
/api/skills/other
/api/portfolios

- SSR (サーバーサイドレンダリング)

Page Routes
/
/portfolios
/privacy-policy
/maintenance
/contact
/500

API Routes
/api/histories
/api/jobs


- SSG (静的サイト生成)
