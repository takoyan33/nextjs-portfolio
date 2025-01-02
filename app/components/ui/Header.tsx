"use client"
import Image from "next/image"
import Link from "next/link"
import React, { useState } from "react"
import { PATH } from "../../../utils/path"
import type { MenuItem } from "../../../utils/type"
import { TransitionLink } from "./"

export default function Header() {
	const [openMenu, setOpenMenu] = useState<boolean>(false)

	// メニューの開閉
	const menuFunction = (): void => {
		setOpenMenu(!openMenu)
	}

	const MENU_ITEMS: MenuItem[] = [
		{
			id: 1,
			title: "About",
			link: PATH.ABOUT,
		},
		{
			id: 2,
			title: "ポートフォリオ",
			link: PATH.PORTFOLIO,
		},
		{
			id: 3,
			title: "ブログ",
			link: PATH.BLOG,
		},
	]

	return (
		<>
			<header id="header" className="header" aria-label="ヘッダー">
				<div className="header_flx">
					<div className="header_logo">
						<div className="logo">
							<TransitionLink href={PATH.INDEX}>
								<Image
									src="/images/common/logo.svg"
									alt="ポートフォリオ画像"
									fill
									priority
									sizes="(min-width: 768px) 50vw, 100vw"
									className="logo"
								/>
							</TransitionLink>
						</div>
					</div>
					<nav aria-label="メインナビゲーション">
						<ul>
							{MENU_ITEMS.map((item) => (
								<li key={item.id}>
									<TransitionLink href={item.link}>{item.title}</TransitionLink>
								</li>
							))}
							<TransitionLink
								href={PATH.CONTACT}
								className="header_btn_contact"
							>
								お問い合わせ
							</TransitionLink>
						</ul>
					</nav>
				</div>
				<div
					className={`btn-trigger ${openMenu ? "active" : ""}`}
					id="btn01"
					onClick={menuFunction}
					onKeyDown={menuFunction}
				>
					<span />
					<span />
					<span />
				</div>
			</header>
			<div className={`drawerMenu ${openMenu ? "open" : undefined}`}>
				<ul>
					{MENU_ITEMS.map((item) => (
						<li key={item.id}>
							<TransitionLink href={item.link} setOpenMenu={setOpenMenu}>
								<span className="mainTitle">{item.title}</span>
							</TransitionLink>
						</li>
					))}
				</ul>
			</div>
		</>
	)
}
