import { fetchJob } from "@/hooks/fetch"
import { notFound } from "next/navigation"
import EditDetail from "./edit-detail"

export default async function Portfolio({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params

  const history = await fetchJob(id)

  if (history.status == 404 || !history.data) {
    notFound()
  }

  return <EditDetail history={history.data} />
}
