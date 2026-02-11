"use client"

import Image from "next/image"
import type React from "react"
import type { ComponentType } from "react"
import ReactModal from "react-modal"

const Modal = ReactModal as unknown as ComponentType<any>

interface CommonModalProps {
  isOpen: boolean
  img: string
  closeModal: () => void
  title?: string
}

export const CommonModal = ({
  isOpen = false,
  img,
  closeModal,
  title = "画像モーダル",
}: CommonModalProps) => {
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
        <Image src={img} width={800} height={600} alt={title} onError={handleImageError} priority />
      </div>
    </Modal>
  )
}
