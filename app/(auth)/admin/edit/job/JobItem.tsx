import { Job } from "@/types"
import "./adminHistoryTable.scss"

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
        <a href={`/admin/edit/job/${job.id}`} className="portfolioTable__editBtn">
          編集
        </a>
      </td>
    </tr>
  )
}

export default JobItem
