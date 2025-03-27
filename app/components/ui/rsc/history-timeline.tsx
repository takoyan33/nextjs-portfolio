// "use client"

import React, { useEffect, useState } from "react"
import { fetchHistories } from "../../../../hooks/fetch"
import histories from "../../../../public/mock/api/histories/index.json"
import type { History } from "../../../../types"
import styles from "../css/timeline.module.scss"
import { Timeline } from "../timeline"

export const HistoryTimeline = () => {
	// const [histories, setHistories] = useState<History[]>([])
	// useEffect(() => {
	// 	const fetchData = async () => {
	// 		const data = await fetchHistories()
	// 		setHistories(data.data)
	// 	}

	// 	fetchData()
	// }, [])
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
