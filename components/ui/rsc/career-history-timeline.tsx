import styles from "../css/timeline.module.scss"
import { Timeline } from "../timeline"

/**
 * 経歴のタイムライン
 */
export const CareerHistoryTimeline = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/histories`, {
    next: { revalidate: 3600 },
  })
  const json = await response.json()
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
