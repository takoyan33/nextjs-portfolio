import Image from "next/image"
import type React from "react"
import { memo } from "react"
import Modal from "react-modal"

interface CommonModalProps {
	isOpen: boolean
	img: string
	closeModal: () => void
}

export const CommonModalComponent = ({
	isOpen,
	img,
	closeModal,
}: CommonModalProps) => {
	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={closeModal}
			contentLabel="Image Modal"
			className="modal"
			overlayClassName="overlay"
			ariaHideApp={false}
		>
			<button onClick={closeModal} className="modal-close" type="button">
				&times;
			</button>
			<div className="modal-content">
				<Image src={img} width={800} height={600} alt="画像" />
			</div>
		</Modal>
	)
}

export const CommonModal = memo(CommonModalComponent)
