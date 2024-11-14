import React from "react"
import histories from "../../../../api/history/index.json"
import Timeline from "../Timeline"

export const HistoryTimelines = () => {
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
