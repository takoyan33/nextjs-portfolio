"use server"
import "server-only"

import { CACHE_OPTIONS } from "../utils/data"

export const fetcher = async <T>(path: string): Promise<T> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${path}`, CACHE_OPTIONS)

  if (!response.ok) {
    const errorText = await response.text()

    console.error(`Failed to fetch ${path}: ${response.status} - ${errorText}`)

    throw new Error(`Failed to fetch ${path}: ${response.status}`)
  }

  return response.json()
}
