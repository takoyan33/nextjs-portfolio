import Image from "next/image"
import type React from "react"
import { memo, useCallback } from "react"
import Modal from "react-modal"

interface CommonModalProps {
	isOpen: boolean
	img: string
	closeModal: () => void
	title?: string
}

/**
 * モーダルコンポーネント
 * @param isOpen - モーダルの表示状態
 * @param img - 表示する画像のパス
 * @param closeModal - モーダルを閉じる関数
 * @param title - モーダルのタイトル（オプション）
 */
export const CommonModalComponent = ({
	isOpen = false,
	img,
	closeModal,
	title = "画像モーダル",
}: CommonModalProps) => {
	const handleKeyDown = useCallback(
		(e: React.KeyboardEvent) => {
			if (e.key === "Escape") {
				closeModal()
			}
		},
		[closeModal],
	)

	const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
		e.currentTarget.src = "/images/placeholder.png"
	}

	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={closeModal}
			contentLabel={title}
			className="modal"
			overlayClassName="overlay"
			ariaHideApp={false}
			onKeyDown={handleKeyDown}
		>
			<button
				onClick={closeModal}
				className="modal-close"
				type="button"
				aria-label="モーダルを閉じる"
			>
				&times;
			</button>
			<div className="modal-content">
				<Image
					src={img}
					width={800}
					height={600}
					alt={title}
					onError={handleImageError}
					priority={true}
				/>
			</div>
		</Modal>
	)
}

CommonModalComponent.displayName = "CommonModal"

export const CommonModal = memo(CommonModalComponent)
