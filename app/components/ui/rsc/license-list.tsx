import React from "react"

/**
 * 資格のタイムライン
 */
export const LicenseList = async () => {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_API_URL}api/licenses`,
		{
			next: { revalidate: 3600 },
		},
	)
	const { data: licenses } = await response.json()

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
