"use client"

import React, { useState, useEffect } from "react"
import { fetchLicenses } from "../../../../hooks/fetch"
//import licenses from "../../../../public/mock/api/licenses/index.json"
import type { License } from "../../../../types"

/**
 * 資格のタイムライン
 */
export const LicenseList = () => {
	const [licenses, setLicenses] = useState<License[]>([])

	useEffect(() => {
		const fetchData = async () => {
			const data = await fetchLicenses()
			setLicenses(data.data)
		}

		fetchData()
	}, [])
	return (
		<>
			{licenses?.map((license) => (
				<tr key={license.id} className="license__table-tr">
					<td className="license__table-td">{license.date}</td>
					<td className="license__table-td">{license.title}</td>
				</tr>
			))}
		</>
	)
}
