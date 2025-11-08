import { fetchLicense } from "@/hooks/fetch"
import { notFound } from "next/navigation"
import EditDetail from "./edit-detail"

export default async function Portfolio({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params

  const license = await fetchLicense(id)

  console.log("license", license)

  if (license.status == 404 || !license.data) {
    notFound()
  }

  return <EditDetail license={license.data} />
}
