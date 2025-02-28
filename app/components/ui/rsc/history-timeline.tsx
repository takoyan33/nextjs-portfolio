// "use client"

import histories from "public/mock/api/histories/index.json"
import React, { useEffect, useState } from "react"
import { fetchHistories } from "../../../../hooks/fetch"
import type { History } from "../../../../types"
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
		<div className="timeline">
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
