import React from "react"
import licenses from "../../../../api/licenses/index.json"

export const License = () => {
	return (
		<>
			{Array.isArray(licenses) &&
				licenses.map((license) => (
					<tr key={license.id} className='license__table-tr'>
						<td className='license__table-td'>{license.date}</td>
						<td className='license__table-td'>{license.title}</td>
					</tr>
				))}
		</>
	)
}
