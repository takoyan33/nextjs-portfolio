"use client"
import "@/styles/globals.scss"

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
        type="button"
        aria-label="モーダルを閉じる"
        style={{
          position: "absolute",
          top: "12px",
          right: "12px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "42px",
          height: "42px",
          border: "none",
          borderRadius: "50%",
          background: "rgba(255,255,255,0.9)",
          color: "#555",
          fontSize: "30px",
          lineHeight: 1,
          cursor: "pointer",
          boxShadow: "0 2px 8px rgba(0,0,0,.15)",
          transition: "all .2s ease",
          zIndex: 10,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "#333"
          e.currentTarget.style.color = "#fff"
          e.currentTarget.style.transform = "scale(1.08)"
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "rgba(255,255,255,0.9)"
          e.currentTarget.style.color = "#555"
          e.currentTarget.style.transform = "scale(1)"
        }}
      >
        ×
      </button>

      <div className="modal-content">
        <Image src={img} width={800} height={600} alt={title} onError={handleImageError} priority />
      </div>
    </Modal>
  )
}
