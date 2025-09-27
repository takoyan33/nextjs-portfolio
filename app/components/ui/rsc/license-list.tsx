import { fetchLicenses } from "hooks/fetch"

/**
 * 資格のタイムライン
 */
export const LicenseList = async () => {
  const data = await fetchLicenses()
  return (
    <>
      {data?.data.map((license) => (
        <tr key={license.id} className="license__table-tr">
          <td className="license__table-td">{license.date}</td>
          <td className="license__table-td">{license.title}</td>
        </tr>
      ))}
    </>
  )
}
