import React, { useEffect, useState } from "react"
// import histories from "../../../../api/history/index.json"
import { fetchHistories } from "../../../../hooks/fetch"
import Timeline from "../Timeline"

// async function getData() {
// 	const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/histories`)

// 	if (!res.ok) {
// 		throw new Error("Failed to fetch data")
// 	}

// 	return res.json()
// }

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
