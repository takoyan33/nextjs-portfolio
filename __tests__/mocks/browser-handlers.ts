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
    console.log("📡 Mock hit: GET /api/portfolios")
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
    console.log("📡 Mock hit: GET /api/portfolios")
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
  http.get(`*/api/skills/infra`, () => {
    console.log("📡 Mock hit: GET /api/portfolios")
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
  http.get(`*/api/skills/other`, () => {
    console.log("📡 Mock hit: GET /api/portfolios")
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
  // ポートフォリオデータのモック
  http.get(`*/api/portfolios`, () => {
    console.log("📡 Mock hit: GET /api/portfolios")
    return HttpResponse.json({
      data: [
        {
          id: "1",
          title: "ECサイト",
          description: "React/Next.jsで構築したECサイト",
          image: "/images/portfolio/ec-site.png",
          technologies: ["React", "Next.js", "TypeScript"],
          githubUrl: "https://github.com/example/ec-site",
          liveUrl: "https://ec-site.example.com",
        },
        {
          id: "2",
          title: "タスク管理アプリ",
          description: "リアルタイムでタスクを管理できるアプリ",
          image: "/images/portfolio/task-app.png",
          technologies: ["React", "Node.js", "Socket.io"],
          githubUrl: "https://github.com/example/task-app",
          liveUrl: "https://task-app.example.com",
        },
      ],
    })
  }),
]
