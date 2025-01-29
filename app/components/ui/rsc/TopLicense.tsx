// import { fetchLicenses } from "../../../../hooks/fetch"
import licenses from "public/mock/api/licenses/index.json"
import React from "react"
// import type { license } from "../../../../utils/type"

export const TopLicense = async () => {
	// const licenses = await fetchLicenses()

	// const [licenses, setLicenses] = useState<license[]>([])
	// useEffect(() => {
	// 	const fetchData = async () => {
	// 		const data = await fetchLicenses()
	// 		setLicenses(data.data)
	// 	}

	// 	fetchData()
	// }, [])
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
