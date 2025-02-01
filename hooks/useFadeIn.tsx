"use client"

import React, { useRef, useEffect } from "react"

const ScrollComponent = ({ children }) => {
	const ref = useRef(null)

	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			for (const entry of entries) {
				if (entry.isIntersecting) {
					entry.target.classList.add("is-visible")
				}
			}
		})

		if (ref.current) {
			observer.observe(ref.current)
		}

		return () => {
			observer.disconnect()
		}
	}, [])

	return (
		<div ref={ref} className="fade-in">
			{children}
		</div>
	)
}

export default ScrollComponent
