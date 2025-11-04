import { fetchPortfolio } from "@/hooks/fetch"
import { notFound } from "next/navigation"
import EditDetail from "./edit-detail"

export default async function Portfolio({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params

  const portfolio = await fetchPortfolio(id)

  if (portfolio.status == 404 || !portfolio.data) {
    notFound()
  }

  return <EditDetail portfolio={portfolio.data} />
}
