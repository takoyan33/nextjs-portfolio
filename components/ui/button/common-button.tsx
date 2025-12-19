"use client"

import type React from "react"
import { TransitionLink } from ".."

interface BaseButtonProps {
  text: string
  id?: string
  className?: string
  handleClick?: () => void
  gtmEventCategory?: string
  gtmEventAction?: string
  gtmEventLabel?: string
}

const BaseButton: React.FC<
  BaseButtonProps & { children: (onClick: () => void) => React.ReactNode }
> = ({ text, handleClick, gtmEventCategory, gtmEventAction, gtmEventLabel, children }) => {
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

  return <>{children(handleGtmClick)}</>
}

/**
 * 通常のボタン
 */
export const ActionButton: React.FC<BaseButtonProps> = (props) => {
  return (
    <BaseButton {...props}>
      {(onClick) => (
        <button
          type="button"
          onClick={onClick}
          id={props.id}
          className={`common__btn slide ${props.className ?? "more"}`}
          aria-label={props.text}
        >
          {props.text}
        </button>
      )}
    </BaseButton>
  )
}

/**
 * リンクボタン
 */
export const LinkButton: React.FC<BaseButtonProps & { link: string }> = ({ link, ...props }) => {
  return (
    <BaseButton {...props}>
      {(onClick) => (
        <TransitionLink href={link}>
          <button
            type="button"
            onClick={onClick}
            className={`common__btn slide ${props.className ?? "more"}`}
            aria-label={props.text}
          >
            {props.text}
          </button>
        </TransitionLink>
      )}
    </BaseButton>
  )
}
