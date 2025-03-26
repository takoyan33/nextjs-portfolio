"use client"
import Image from "next/image"
import { useEffect, useState } from "react"

export const TopBackButton = () => {
	const [showBackButton, setShowBackButton] = useState<boolean>(false)
	// 150px以上スクロールしたらボタンを表示
	const handleScroll = () => {
		setShowBackButton(window.scrollY > 150)
	}

	//最初にhandleScrollを登録
	useEffect(() => {
		window.addEventListener("scroll", handleScroll)

		return () => {
			window.removeEventListener("scroll", handleScroll)
		}
	}, [handleScroll])

	return (
		<div>
			{showBackButton && (
				<div>
					<button
						type="button"
						className="back__btn"
						onClick={() => {
							window.scrollTo(0, 0)
						}}
					>
						<Image
							src="/images/top-arrow.svg"
							height={30}
							width={30}
							alt="arrow"
						/>
					</button>
				</div>
			)}
		</div>
	)
}
