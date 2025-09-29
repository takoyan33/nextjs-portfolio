"use client"

import type React from "react"
import { TransitionLink } from "../"

interface CommonButtonProps {
  text: string
  link?: string
  className?: string
  handleClick?: () => void
  gtmEventCategory?: string
  gtmEventAction?: string
  gtmEventLabel?: string
}

/**
 * ボタン
 */
export const CommonButton: React.FC<CommonButtonProps> = ({
  text,
  className = "more",
  handleClick,
  link,
  gtmEventCategory,
  gtmEventAction,
  gtmEventLabel,
}) => {
  // GTMイベント送信
  const handleGtmClick = () => {
    if (gtmEventCategory && gtmEventAction) {
      if (!window.dataLayer) {
        console.warn("dataLayer がまだ存在しません")
        window.dataLayer = []
      }
      window.dataLayer.push({
        event: "custom_event",
        eventCategory: gtmEventCategory,
        eventAction: gtmEventAction,
        eventLabel: gtmEventLabel ?? text,
      })
    }
    handleClick?.()
  }

  return (
    <>
      {link ? (
        <TransitionLink href={link}>
          <button
            type="button"
            onClick={handleGtmClick}
            className={`common__btn slide ${className}`}
            aria-label={text}
          >
            {text}
          </button>
        </TransitionLink>
      ) : (
        <button
          type="button"
          onClick={handleGtmClick}
          className={`common__btn slide ${className}`}
          aria-label={text}
        >
          {text}
        </button>
      )}
    </>
  )
}
