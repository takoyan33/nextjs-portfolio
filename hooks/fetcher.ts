"use server"
import "server-only"

import { redirect } from "next/navigation"
import { CACHE_OPTIONS } from "../utils/data"

export const fetcher = async <T>(path: string, options: RequestInit = {}): Promise<T> => {
  // headersの統合と、optionsのスプレッド展開処理
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${path}`, {
    ...CACHE_OPTIONS,
    ...options,
  })

  if (!response.ok) {
    const errorText = await response.text()

    console.error(`Failed to fetch ${path}: ${response.status} - ${errorText}`)

    redirect("/404")
  }

  return response.json()
}
