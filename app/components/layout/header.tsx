"use client"

import Image from "next/image"
import React, { useEffect, useState } from "react"
import type { MenuItem } from "../../../types"
import { PATH } from "../../../utils/path"
import { TransitionLink } from "../ui"

export const Header = () => {
	const [openMenu, setOpenMenu] = useState<boolean>(false)

	// メニューの開閉
	const toggleMenu = () => setOpenMenu((prev) => !prev)

	const MENU_ITEMS: MenuItem[] = [
		{ id: 1, title: "About", link: PATH.ABOUT },
		{ id: 2, title: "ポートフォリオ", link: PATH.PORTFOLIO },
		{ id: 3, title: "ブログ", link: PATH.BLOG },
	]

	useEffect(() => {
		// メニューが開いた時にフォーカスをハンバーガーメニューに移動
		const focusTrap = document.getElementById("js-focus-trap")
		const hamburger = document.getElementById("btn01")

		const handleFocus = () => hamburger?.focus()

		if (focusTrap && hamburger) {
			focusTrap.addEventListener("focus", handleFocus)
		}

		// メニューが開いた時にスクロールを禁止
		document.body.style.overflow = openMenu ? "hidden" : ""

		return () => {
			document.body.style.overflow = ""
			focusTrap?.removeEventListener("focus", handleFocus)
		}
	}, [openMenu])

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
									priority
									width={180}
									height={50}
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
				<button
					type="button"
					className={`btn-trigger ${openMenu ? "active" : ""}`}
					id="btn01"
					onClick={toggleMenu}
					aria-controls="navigation"
					aria-expanded={openMenu}
					aria-label="メニューを開く"
				>
					<span />
					<span />
					<span />
				</button>
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
				<a id="js-focus-trap" href="#header">
					.
				</a>
			</div>
		</>
	)
}
