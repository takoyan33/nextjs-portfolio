"use server"

import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export const LogOut = async () => {
  const cookieStore = cookies()

  ;(await cookieStore).delete("auth")

  redirect("/")
}
