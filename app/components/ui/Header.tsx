"use client"
import Image from "next/image"
import Link from "next/link"
import React, { useState } from "react"
import { PATH } from "../../../utils/path"

export default function Header() {
	const [openMenu, setOpenMenu] = useState<boolean>(false)

	const menuFunction = () => {
		setOpenMenu(!openMenu)
	}

	const handleMenuItemClick = (link: string) => {
		menuFunction()
	}

	type MenuItem = {
		id: number
		title: string
		link: string
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
			<header id='header' className='header' aria-label='ヘッダー'>
				<div className='header_flx'>
					<div className='header_logo'>
						<Link className='logo' href='/'>
							<Image
								src='/images/common/logo.svg'
								alt='ポートフォリオ画像'
								fill
								priority
								sizes='(min-width: 768px) 50vw, 100vw'
								className='logo'
							/>
						</Link>
					</div>
					<nav aria-label='メインナビゲーション'>
						<ul>
							{MENU_ITEMS.map((item) => (
								<li key={item.id}>
									<Link
										href={item.link}
										onClick={() => handleMenuItemClick(item.link)}
									>
										{item.title}
									</Link>
								</li>
							))}
							<Link href={PATH.CONTACT} className='header_btn_contact'>
								お問い合わせ
							</Link>
						</ul>
					</nav>
				</div>
				<div
					className={`btn-trigger ${openMenu ? "active" : ""}`}
					id='btn01'
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
							<Link
								href={item.link}
								onClick={() => handleMenuItemClick(item.link)}
							>
								<span className='mainTitle'>{item.title}</span>
							</Link>
						</li>
					))}
				</ul>
			</div>
		</>
	)
}
