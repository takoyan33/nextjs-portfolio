"use client"

import { useRouter } from "next/navigation"
import type React from "react"

interface HistoryBackButtonProps {
  className?: string
  children?: React.ReactNode
}

/**
 * 履歴を戻る（history.back()と同等）ボタン
 */
export const HistoryBackButton = ({
  className = "contact__btn padding-bottom",
  children = "前のページに戻る",
}: HistoryBackButtonProps) => {
  const router = useRouter()

  return (
    <button type="button" onClick={() => router.back()} className={className}>
      {children}
    </button>
  )
}
