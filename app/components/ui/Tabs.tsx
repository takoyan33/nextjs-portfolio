"use client"
import { useState } from "react"
import React from "react"

interface TabProps {
	tabs: string[]
}

export const Tabs = ({ tabs }: TabProps) => {
	const [activeTab, setActiveTab] = useState(tabs[0])

	return (
		<div>
			{tabs.map((tab) => (
				<button type="button" key={tab} onClick={() => setActiveTab(tab)}>
					{tab}
				</button>
			))}
			<div>{activeTab} content</div>
		</div>
	)
}
