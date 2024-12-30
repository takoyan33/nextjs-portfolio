// import ScrollComponent from '../../../hooks/useFadeIn'
// "use client"
import Image from "next/image"
import React, { useRef } from "react"

type SkillProps = {
	name: string
	rank: string
	tag: string
	icon: string
	about: string
}

export const SkillElement = ({ name, rank, tag, icon, about }: SkillProps) => {
	// const dialogRef = useRef<any>(null)

	// function handleOpen() {
	// 	dialogRef.current?.show()
	// 	document.body.style.overflow = "hidden"
	// 	document.body.classList.add("modal-open")
	// }

	// function handleClose() {
	// 	dialogRef.current?.close()
	// 	document.body.style.overflow = ""
	// }
	return (
		<div className="skill__element">
			{/* <button onClick={handleOpen} className='skill__flx_el_button'> */}
			<div className="skill__svg">
				<Image
					src={icon}
					alt="skill画像"
					fill
					className="skill__svg"
					sizes="(min-width: 768px)"
				/>
			</div>
			<p className="skill__text">{name} </p>
			<p className="skill__text">{rank}</p>
			{/* </button> */}
		</div>
	)
}
