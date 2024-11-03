import licenses from '../../../../api/license/index.json'

export const License = () => {
  return (
    <div>
      {Array.isArray(licenses) &&
        licenses.map((license, index) => (
          <tr key={index} className='license__table__tr'>
            <td className='license__table__td'>{license.date}</td>
            <td className='license__table__td'>{license.title}</td>
          </tr>
        ))}
    </div>
  )
}
