import "@/styles/page/_admin.scss"
import { cookies } from "next/headers"
import AdminForm from "./admin-form"

const AdminPage = async () => {
  const cookieStore = await cookies()
  const auth = cookieStore.get("auth")

  return <AdminForm auth={auth?.value} />
}

export default AdminPage
