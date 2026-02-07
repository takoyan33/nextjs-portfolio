import { AboutTabs } from "@/app/about/_containers/about-tabs"
import { Breadcrumb } from "@/components/ui/breadcrumb"
import { LowerSubTitle } from "@/components/ui/lower-sub-title"
import { LowerTitle } from "@/components/ui/lower-title"
import { CareerHistoryTimeline } from "@/components/ui/rsc/career-history-timeline"
import { JobTimeline } from "@/components/ui/rsc/job-timeline"
import { LicenseList } from "@/components/ui/rsc/license-list"
import "@/styles/page/_about.scss"
import { PATH } from "@/utils/path"
import type { Metadata } from "next"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "To You Design - About",
  description: "プロフィール、経歴、職歴、資格について",
}

export const dynamic = "force-static"

const About = () => {
  return (
    <main className="u-padding">
      <div className="max_width">
        <Breadcrumb items={[{ name: "About", link: PATH.ABOUT }]} />
      </div>
      <LowerTitle title="About" enTitle="プロフィール" />
      <AboutTabs>
        <Suspense fallback={<div>読み込み中...</div>}>
          <CareerHistoryTimeline />
        </Suspense>
        <Suspense fallback={<div>読み込み中...</div>}>
          <JobTimeline />
        </Suspense>
      </AboutTabs>

      {/* ここからLicense*/}
      <section className="license max_width">
        <LowerSubTitle title="資格" />
        <Suspense fallback={<div>読み込み中...</div>}>
          <LicenseList />
        </Suspense>
      </section>
    </main>
  )
}

export default About
