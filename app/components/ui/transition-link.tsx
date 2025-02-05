"use client"

import Link, { type LinkProps } from "next/link"
import { useRouter } from "next/navigation"
import type React from "react"

interface TransitionLinkProps extends LinkProps {
	href: string
	children: React.ReactNode
	className?: string
	setOpenMenu?: React.Dispatch<React.SetStateAction<boolean>>
}

function sleep(ms: number): Promise<void> {
	return new Promise((resolve) => setTimeout(resolve, ms))
}

export const TransitionLink = ({
	href,
	children,
	className,
	setOpenMenu,
	...props
}: TransitionLinkProps) => {
	const router = useRouter()

	const handleTransition = async (
		e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
	) => {
		e.preventDefault()

		const body = document.querySelector("body")
		body?.classList.add("page-transition")

		await sleep(500)

		router.push(href)

		await sleep(500)

		body?.classList.remove("page-transition")
		if (setOpenMenu) {
			setOpenMenu(false)
		}
	}

	return (
		<Link
			onClick={handleTransition}
			href={href}
			{...props}
			className={className ? className : "transition-link"}
		>
			{children}
		</Link>
	)
}
