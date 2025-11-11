/ 
/about
/portfolios
- 最新のコンテンツはないため、force-cacheを使用し、Data Cacheがあれば、それを利用します。
- Data Cacheがない場合は、再度データを取得し、Data Cacheを更新します。

/blog
- 約1ヶ月毎に更新している為、1ヶ月間はキャッシュを利用します。(ISR化)

/admin
- データを更新後revalidatePath()で、キャッシュエントリを削除し、更新します。