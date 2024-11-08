"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { PATH } from "../../../utils/path";

export default function Header() {
	const [openMenu, setOpenMenu] = useState<boolean>(false);

	const menuFunction = () => {
		setOpenMenu(!openMenu);
	};

	const handleMenuItemClick = (link: string) => {
		menuFunction();
	};

	type MenuItem = {
		title: string;
		link: string;
	};

	const MENU_ITEMS: MenuItem[] = [
		{
			title: "About",
			link: PATH.ABOUT,
		},
		{
			title: "ポートフォリオ",
			link: PATH.PORTFOLIO,
		},
		{
			title: "ブログ",
			link: PATH.BLOG,
		},
	];

	return (
		<>
			<header id="header" className="header" aria-label="ヘッダー">
				<div className="header_flx">
					<div className="header_logo">
						<Link className="logo" href="/">
							<Image
								src="/images/common/logo.svg"
								alt="ポートフォリオ画像"
								fill
								sizes="(min-width: 768px) 50vw, 100vw"
								className="logo"
							/>
						</Link>
					</div>
					<nav>
						<ul>
							{MENU_ITEMS.map((item, index) => (
								<li key={index}>
									<Link
										href={item.link}
										onClick={() => handleMenuItemClick(item.link)}
									>
										{item.title}
									</Link>
								</li>
							))}
							<Link href={PATH.CONTACT} className="header_btn_contact">
								お問い合わせ
							</Link>
						</ul>
					</nav>
				</div>
				<div
					className={`btn-trigger ${openMenu ? "active" : ""}`}
					id="btn01"
					onClick={menuFunction}
				>
					<span></span>
					<span></span>
					<span></span>
				</div>
			</header>
			<div className={`drawerMenu ${openMenu ? "open" : undefined}`}>
				<ul>
					{MENU_ITEMS.map((item, index) => (
						<li key={index}>
							<Link
								href={item.link}
								onClick={() => handleMenuItemClick(item.link)}
							>
								<p className="mainTitle">{item.title}</p>
							</Link>
						</li>
					))}
				</ul>
			</div>
		</>
	);
}
