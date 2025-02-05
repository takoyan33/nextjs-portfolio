import Image from "next/image"
import type React from "react"
import Modal from "react-modal"

interface CommonModalProps {
	isOpen: boolean
	img: string
	closeModal: () => void
}

export const CommonModal = ({ isOpen, img, closeModal }: CommonModalProps) => {
	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={closeModal}
			contentLabel="Image Modal"
			className="modal"
			overlayClassName="overlay"
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
