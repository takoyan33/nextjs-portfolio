import { http, HttpResponse } from "msw"

export const handlers = [
  // 資格データのモック
  http.get(`*/api/licenses`, () => {
    console.log("📡 Mock hit: GET /api/portfolios")
    return HttpResponse.json({
      data: [
        { id: "1", date: "2023-01-01", title: "AWS認定ソリューションアーキテクト" },
        { id: "2", date: "2023-02-01", title: "AWS認定デベロッパー" },
        { id: "3", date: "2023-03-01", title: "AWS認定SysOpsアドミニストレーター" },
      ],
    })
  }),
  // 職歴データのモック
  http.get(`*/api/jobs`, () => {
    console.log("📡 Mock hit: GET /api/portfolios")
    return HttpResponse.json({
      data: [
        {
          id: "1",
          title: "フロントエンドエンジニア",
          date: "2023-01-01",
          body: "React/Next.jsを使用したWebアプリケーション開発に従事",
        },
        {
          id: "2",
          title: "フルスタックエンジニア",
          date: "2023-06-01",
          body: "フロントエンドとバックエンドの両方を担当し、システム全体の設計・開発を実施",
        },
      ],
    })
  }),
  // 経歴データのモック
  http.get(`*/api/histories`, () => {
    console.log("📡 Mock hit: GET /api/histories")
    return HttpResponse.json({
      data: [
        {
          id: "1",
          title: "大学卒業",
          date: "2020-03-01",
          body: "情報工学専攻でコンピュータサイエンスの基礎を学ぶ",
        },
        {
          id: "2",
          title: "IT企業入社",
          date: "2020-04-01",
          body: "新卒としてWeb開発会社に入社し、エンジニアとしてのキャリアをスタート",
        },
      ],
    })
  }),
  // スキルデータのモック
  http.get(`*/api/skills/front`, () => {
    console.log("📡 Mock hit: GET /api/skills/front")
    return HttpResponse.json({
      data: [
        {
          id: 1,
          name: "HTML",
          rank: "★★★★",
          tag: "経験年数：3年",
          about: "ホームページ制作などで長年利用。セマンティックなマークアップを意識している。",
          icon: "/images/skill/html5.svg",
        },
      ],
    })
  }),
  http.get(`*/api/skills/back`, () => {
    console.log("📡 Mock hit: GET /api/skills/back")
    return HttpResponse.json({
      data: [
        {
          id: 1,
          name: "PHP",
          rank: "★★★★",
          tag: "経験年数：3年",
          about: "ホームページ制作などで長年利用。セマンティックなマークアップを意識している。",
          icon: "/images/skill/html5.svg",
        },
      ],
    })
  }),
  http.get(`*/api/skills/infra`, () => {
    console.log("📡 Mock hit: GET /api/skills/infra")
    return HttpResponse.json({
      data: [
        {
          id: 1,
          name: "AWS",
          rank: "★★★★",
          tag: "経験年数：3年",
          about: "ホームページ制作などで長年利用。セマンティックなマークアップを意識している。",
          icon: "/images/skill/html5.svg",
        },
      ],
    })
  }),
  http.get(`*/api/skills/other`, () => {
    console.log("📡 Mock hit: GET /api/skills/other")
    return HttpResponse.json({
      data: [
        {
          id: 1,
          name: "Figma",
          rank: "★★★★",
          tag: "経験年数：3年",
          about: "ホームページ制作などで長年利用。セマンティックなマークアップを意識している。",
          icon: "/images/skill/html5.svg",
        },
      ],
    })
  }),
  http.get(`https://zenn.dev/api/articles?username=643866`, () => {
    console.log("📡 Mock hit: GET https://zenn.dev/api/articles?username=643866")
    return HttpResponse.json({
      articles: [
        {
          id: 463489,
          post_type: "Article",
          title:
            "[Next.js]サーバーコンポーネントを呼び出すとJSX コンポーネントとして使用することはできません。と表示される",
          slug: "f562975010d4fb",
          comments_count: 0,
          liked_count: 0,
          bookmarked_count: 0,
          body_letters_count: 2269,
          article_type: "tech",
          emoji: "💡",
          is_suspending_private: false,
          published_at: "2025-09-24T18:53:01.563+09:00",
          body_updated_at: "2025-09-23T23:52:36.873+09:00",
          source_repo_updated_at: null,
          pinned: false,
          path: "/643866/articles/f562975010d4fb",
          principal_type: "User",
          user: {
            id: 55470,
            username: "643866",
            name: "たこ焼き",
            avatar_small_url:
              "https://res.cloudinary.com/zenn/image/fetch/s--cptBdMob--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_70/https://storage.googleapis.com/zenn-user-upload/avatar/e1ef61bf6b.jpeg",
          },
          publication: null,
          publication_article_override: null,
        },
        {
          id: 331143,
          post_type: "Article",
          title: "PlayWrightを用いたフロントエンドE2Eテスト(React, Next.js)",
          slug: "e4bbb286e46060",
          comments_count: 0,
          liked_count: 6,
          bookmarked_count: 0,
          body_letters_count: 5629,
          article_type: "tech",
          emoji: "💨",
          is_suspending_private: false,
          published_at: "2024-11-12T23:15:50.874+09:00",
          body_updated_at: "2024-11-14T20:50:21.401+09:00",
          source_repo_updated_at: null,
          pinned: false,
          path: "/643866/articles/e4bbb286e46060",
          principal_type: "User",
          user: {
            id: 55470,
            username: "643866",
            name: "たこ焼き",
            avatar_small_url:
              "https://res.cloudinary.com/zenn/image/fetch/s--cptBdMob--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_70/https://storage.googleapis.com/zenn-user-upload/avatar/e1ef61bf6b.jpeg",
          },
          publication: null,
          publication_article_override: null,
        },
      ],
    })
  }),
  // ポートフォリオデータのモック
  http.get(`*/api/portfolios`, () => {
    console.log("📡 Mock hit: GET /api/portfolios")
    return HttpResponse.json({
      data: [
        {
          id: 3,
          name: "To You Design(ポートフォリオサイト)1",
          date: "2023-11-30",
          tag: ["React", "Next.js", "Ruby"],
          topImg: "/images/portfolio/portfolio_top3.png",
          front_url: "https://to-you-design.vercel.app/",
          front_github: "https://github.com/takoyan33/nextjs-portfolio",
          back_github: "https://github.com/takoyan33/next-portfolio-backend-posgre",
          color: "portfolio__tag--color4",
          about:
            "<p>自分についての経歴や経験を振り返るために、ポートフォリオサイトとして、Next.jsとRuby on Railsで制作しました。</p>",
          aboutImg: "/images/portfolio/portfolio_about3.png",
          function:
            "<p>内容としては</p><ul><li>経歴、職歴紹介</li><li>ポートフォリオ紹介</li><li>ブログ表示</li><li>プロフィール画面</li></ul><p>があります</p>",
          functionImg: "/images/portfolio/portfolio_function3.png",
          appeal:
            "<p>意識した点は、1つはCSS設計を意識して、綺麗にコーディングしている点です。レスポンシブを意識した実装をしました。<br>2つ目は、App Routerで実装し、読み込みを早めるため、Server Componentを利用しながら実装している点です。<br>3つ目にRuby on RailsでバックエンドのAPIを作っており、そこからデータを取得している点です。</p>",
          appealImg: "/images/portfolio/portfolio_appeal3.png",
          front_skill: ["React", "Next.js", "SCSS", "Biome"],
          back_skill: ["Ruby on Rails", "Ruby"],
          infra_skill: ["Vercel", "Render"],
          time: "2ヶ月",
          prev_title: "Manga Study",
          prev_article_id: "2",
          next_title: "サークル管理App",
          next_article_id: "4",
        },
        {
          id: 4,
          name: "To You Design(ポートフォリオサイト)2",
          date: "2023-11-30",
          tag: ["React", "Next.js", "Ruby"],
          topImg: "/images/portfolio/portfolio_top3.png",
          front_url: "https://to-you-design.vercel.app/",
          front_github: "https://github.com/takoyan33/nextjs-portfolio",
          back_github: "https://github.com/takoyan33/next-portfolio-backend-posgre",
          color: "portfolio__tag--color4",
          about:
            "<p>自分についての経歴や経験を振り返るために、ポートフォリオサイトとして、Next.jsとRuby on Railsで制作しました。</p>",
          aboutImg: "/images/portfolio/portfolio_about3.png",
          function:
            "<p>内容としては</p><ul><li>経歴、職歴紹介</li><li>ポートフォリオ紹介</li><li>ブログ表示</li><li>プロフィール画面</li></ul><p>があります</p>",
          functionImg: "/images/portfolio/portfolio_function3.png",
          appeal:
            "<p>意識した点は、1つはCSS設計を意識して、綺麗にコーディングしている点です。レスポンシブを意識した実装をしました。<br>2つ目は、App Routerで実装し、読み込みを早めるため、Server Componentを利用しながら実装している点です。<br>3つ目にRuby on RailsでバックエンドのAPIを作っており、そこからデータを取得している点です。</p>",
          appealImg: "/images/portfolio/portfolio_appeal3.png",
          front_skill: ["React", "Next.js", "SCSS", "Biome"],
          back_skill: ["Ruby on Rails", "Ruby"],
          infra_skill: ["Vercel", "Render"],
          time: "2ヶ月",
          prev_title: "Manga Study",
          prev_article_id: "2",
          next_title: "サークル管理App",
          next_article_id: "4",
        },
      ],
    })
  }),
]
