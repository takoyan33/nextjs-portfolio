import { NextResponse } from "next/server"
import data from "../../../api/job/index.json"

type Data = {
	job: Object
}

export async function GET() {
	return NextResponse.json([
		{
			title: "JBA日本ビジネスアート株式会社 長期インターン",
			date: "2020年3月",
			body: "Wordpressサイトの修正やhtml,cssのコーディングやPhotoShopなどのWebデザインの制作を半年間行いました",
		},
		{
			title: "株式会社Conexio 長期インターン",
			date: "2022年4月",
			body: "Ruby on Railsの自社サービスアプリの開発を行う。2022年12月まで行った",
		},
		{
			title: "株式会社メディアライツ 長期インターン",
			date: "2022年9月",
			body: "Unityなどを用いたスマホゲーム開発を行った。2023年3月まで",
		},
		{
			title: "株式会社Poteto 長期インターン",
			date: "2023年2月",
			body: "Reactのサービスの開発を行う。バックエンドがPython,インフラがAWSなど使った事がない技術が多くあり、勉強になった。2023年9月まで",
		},
		{
			title: "株式会社GACCI 長期インターン",
			date: "2023年10月",
			body: "バックエンドがPHPで、フロントのReactのサービスの開発を行う。2024年3月まで",
		},
		{
			title: "株式会社ノースディテール 正社員",
			date: "2024年3月",
			body: "フロントエンドの開発を行う",
		},
	])
}
