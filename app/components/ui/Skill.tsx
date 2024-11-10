// import ScrollComponent from '../../../hooks/useFadeIn'
"use client"
import Image from "next/image"
import React, { useRef } from "react"

type SkillProps = {
	name: string
	rank: string
	tag: string
	icon: string
	about: string
}

export default function Skill({ name, rank, tag, icon, about }: SkillProps) {
	const dialogRef = useRef<any>(null)

	function handleOpen() {
		dialogRef.current?.show()
		document.body.style.overflow = "hidden"
		document.body.classList.add("modal-open")
	}

	function handleClose() {
		dialogRef.current?.close()
		document.body.style.overflow = ""
	}
	return (
		<>
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
			{/* <dialog ref={dialogRef} className='modalBox_bg'>
        <div className='modalBox_overlay'>
          <button onClick={handleClose} className='modalBox_btn w-100' aria-label='閉じる'>
            <img src='/images/close-icon.svg' alt='閉じる' />
          </button>
          <div className='modalBox'>
            <div className='modalBox__element'>
              <h2 className='skill_text'>{name}</h2>
              <p className='tac modalBox__skill__svg'>
                <Image
                  src={icon}
                  alt='ポートフォリオ画像'
                  fill
                  priority
                  className='modalBox__skill__svg'
                  sizes='(min-width: 768px) width: 100%'
                />
              </p>
            </div>

            <div className='modalBox__element'>
              <p className='modal-text'>
                技術力<br></br>
                {rank}
              </p>
              <p className='modal-text'>
                使用技術<br></br>
                {tag}
              </p>
              <p className='modal-text'>
                概要<br></br>
                {about}
              </p>
              <p className='modal-text'>
                使用例<br></br>ー
              </p>
            </div>
          </div>
        </div>
      </dialog> */}
		</>
	)
}