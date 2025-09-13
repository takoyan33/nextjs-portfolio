import { fetchHistories } from "hooks/fetch"
import styles from "../css/timeline.module.scss"
import { Timeline } from "../timeline"

/**
 * 経歴のタイムライン
 */
export const CareerHistoryTimeline = async () => {
  const data = await fetchHistories()
  console.log(data)
  return (
    <div className={styles.timeline}>
      <dl>
        {data?.data.map((history) => (
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
