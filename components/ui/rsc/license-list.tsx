import { fetchLicenses } from "hooks/fetch"

/**
 * 資格のタイムライン
 */
export const LicenseList = async () => {
  const data = await fetchLicenses()
  return (
    <table className="license__table">
      <tbody>
        <tr>
          <th className="license__table-th">日付</th>
          <th className="license__table-th">資格名</th>
        </tr>
        {(data?.data ?? []).length === 0 && (
          <tr>
            <td className="license__table-td" colSpan={2}>
              データはありません
            </td>
          </tr>
        )}
        {(data?.data ?? []).map((license) => (
          <tr key={license.id} className="license__table-tr">
            <td className="license__table-td">{license.date}</td>
            <td className="license__table-td">{license.title}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
