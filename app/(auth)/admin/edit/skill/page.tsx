import {
  fetchBackSkills,
  fetchFrontSkills,
  fetchInfraSkills,
  fetchOtherSkills,
} from "@/hooks/fetch"
import { Skill } from "@/types"
import { Breadcrumb, LowerTitle } from "@/components/ui"
import { PATH } from "@/utils/path"
import SkillItem from "./SkillItem"

export const dynamic = "force-dynamic"

const Admin = async () => {
  const [front, back, infra, other] = await Promise.all([
    fetchFrontSkills(),
    fetchBackSkills(),
    fetchInfraSkills(),
    fetchOtherSkills(),
  ])
  return (
    <main className="u-padding">
      <div className="max_width">
        <Breadcrumb
          items={[
            { name: "管理画面", link: PATH.DASHBOARD },
            { name: "スキル", link: PATH.EDIT_PORTFOLIO },
          ]}
        />
      </div>

      <LowerTitle title="スキル" enTitle="skill" />
      <div className="max_width">
        <h2>フロントスキル</h2>
        <table className="portfolioTable">
          <thead>
            <tr>
              <th>ID</th>
              <th>名前</th>
              <th>ランク</th>
              <th>概要</th>
              <th>編集</th>
            </tr>
          </thead>
          <tbody>
            {front.data?.map((skill: Skill) => (
              <SkillItem key={skill.id} skill={skill} type="front" />
            ))}
          </tbody>
        </table>

        <h2>バックエンドスキル</h2>
        <table className="portfolioTable">
          <thead>
            <tr>
              <th>ID</th>
              <th>名前</th>
              <th>ランク</th>
              <th>概要</th>
              <th>編集</th>
            </tr>
          </thead>
          <tbody>
            {back.data?.map((skill: Skill) => (
              <SkillItem key={skill.id} skill={skill} type="back" />
            ))}
          </tbody>
        </table>

        <h2>インフラスキル</h2>
        <table className="portfolioTable">
          <thead>
            <tr>
              <th>ID</th>
              <th>名前</th>
              <th>ランク</th>
              <th>概要</th>
              <th>編集</th>
            </tr>
          </thead>
          <tbody>
            {infra.data?.map((skill: Skill) => (
              <SkillItem key={skill.id} skill={skill} type="infra" />
            ))}
          </tbody>
        </table>

        <h2>その他スキル</h2>
        <table className="portfolioTable">
          <thead>
            <tr>
              <th>ID</th>
              <th>名前</th>
              <th>ランク</th>
              <th>概要</th>
              <th>編集</th>
            </tr>
          </thead>
          <tbody>
            {other.data?.map((skill: Skill) => (
              <SkillItem key={skill.id} skill={skill} type="other" />
            ))}
          </tbody>
        </table>
      </div>
    </main>
  )
}

export default Admin
