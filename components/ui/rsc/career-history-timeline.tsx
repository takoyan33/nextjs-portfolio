import styles from "@/components/ui/css/timeline.module.scss"
import { Timeline } from "@/components/ui/timeline"
import { fetchHistories } from "@/hooks/fetch"
import { logger } from "@/utils/logger"

/**
 * 経歴のタイムライン
 */
export const CareerHistoryTimeline = async () => {
  const json = await fetchHistories()
  logger.info(
    { length: json?.data?.length, data: json?.data?.[0], status: json?.status },
    "/histories",
  )
  const histories = Array.isArray(json?.data) ? json.data : []

  return (
    <div className={styles.timeline}>
      <dl>
        {Array.isArray(histories) &&
          histories.map((history) => (
            <Timeline
              key={history.id}
              title={history.title}
              date={history.date}
              body={history.body}
            />
          ))}
      </dl>
    </div>
  )
}
