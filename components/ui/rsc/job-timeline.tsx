import { Timeline } from "@/components/ui"
import styles from "@/components/ui/css/timeline.module.scss"
import { logger } from "@/utils/logger"
import { fetchJobs } from "hooks/fetch"

/**
 * 職歴のタイムライン
 */
export const JobTimeline = async () => {
  const data = await fetchJobs()
  logger.info({ length: data?.data?.length, data: data?.data?.[0], status: data?.status }, "/job")
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
