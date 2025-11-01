import { fetchJobs } from "hooks/fetch"
import { Timeline } from ".."
import styles from "../css/timeline.module.scss"

/**
 * 職歴のタイムライン
 */
export const JobTimeline = async () => {
  const data = await fetchJobs()
  return (
    <div className={styles.timeline}>
      <dl>
        {(data?.data ?? []).length === 0 && <dt className="job__table-td">データはありません</dt>}
        {(data?.data ?? []).map((job) => (
          <Timeline key={job.id} title={job.title} date={job.date} body={job.body} />
        ))}
      </dl>
    </div>
  )
}
