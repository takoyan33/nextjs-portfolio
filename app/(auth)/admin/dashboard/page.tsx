"use client"

import { Breadcrumb, LowerTitle } from "../../../../components/ui"
import { PATH } from "../../../../utils/path"

const Admin = () => {
  return (
    <main className="u-padding">
      <div className="max_width">
        <Breadcrumb items={[{ name: "管理画面", link: PATH.ABOUT }]} />
      </div>

      <LowerTitle title="管理画面" enTitle="dashboard" />
      <div className="max_width"></div>
    </main>
  )
}

export default Admin
