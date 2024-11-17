import React, { useEffect, useState } from "react"
// import histories from "../../../../api/history/index.json"
import { fetchHistories } from "../../../../hooks/fetch"
import Timeline from "../Timeline"

export const HistoryTimelines = () => {
	const [histories, setHistories] = useState<any>([])
	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await fetchHistories()
				setHistories(data)
			} catch (e) {
				console.error(e)
			}
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
