import Timeline from "../Timeline";
import React from "react";
import histories from "../../../../api/history/index.json";

export const HistoryTimelines = () => {
	return (
		<dl>
			{Array.isArray(histories) &&
				histories.map((history, index) => (
					<Timeline
						key={index}
						title={history.title}
						date={history.date}
						body={history.body}
					/>
				))}
		</dl>
	);
};
