import "@/styles/page/_adminTable.scss"
import { Job } from "@/types"
import Link from "next/link"

interface Props {
  job: Job
}

const JobItem = ({ job }: Props) => {
  return (
    <tr>
      <td>{job.id}</td>
      <td>{job.title}</td>
      <td>{job.date}</td>
      <td>{job.body}</td>
      <td>
        <Link href={`/admin/edit/job/${job.id}`} className="portfolioTable__editBtn">
          編集
        </Link>
      </td>
    </tr>
  )
}

export default JobItem
