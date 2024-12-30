import React, { useEffect, useState } from "react"
// import histories from "../../../../api/history/index.json"
import { fetchHistories } from "../../../../hooks/fetch"
import type { history } from "../../../../utils/type"
import { Timeline } from "../Timeline"

export const HistoryTimelines = () => {
	const [histories, setHistories] = useState<history[]>([])
	useEffect(() => {
		const fetchData = async () => {
			const data = await fetchHistories()
			setHistories(data.data)
		}

		fetchData()
	}, [])
	return (
		<dl>
			{Array.isArray(histories) &&
				histories.map((history) => (
					<div key={history.id}>
						<Timeline
							title={history.title}
							date={history.date}
							body={history.body}
						/>
					</div>
				))}
		</dl>
	)
}
