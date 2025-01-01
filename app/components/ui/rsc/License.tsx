"use client"

import React, { useEffect, useState } from "react"
import { fetchLicenses } from "../../../../hooks/fetch"
//import licenses from "../../../../api/licenses/index.json"
import type { license } from "../../../../utils/type"

export const License = () => {
	const [licenses, setLicenses] = useState<license[]>([])
	useEffect(() => {
		const fetchData = async () => {
			const data = await fetchLicenses()
			setLicenses(data.data)
		}

		fetchData()
	}, [])
	return (
		<>
			{Array.isArray(licenses) &&
				licenses.map((license) => (
					<tr key={license.id} className="license__table-tr">
						<td className="license__table-td">{license.date}</td>
						<td className="license__table-td">{license.title}</td>
					</tr>
				))}
		</>
	)
}
