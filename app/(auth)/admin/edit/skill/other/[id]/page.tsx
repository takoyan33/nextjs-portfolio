import { fetchOtherSkill } from "@/hooks/fetch"
import { notFound } from "next/navigation"
import EditDetail from "./edit-detail"

export default async function Portfolio({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params

  const skill = await fetchOtherSkill(id)

  if (skill.status == 404 || !skill.data) {
    notFound()
  }

  return <EditDetail skill={skill.data} />
}
