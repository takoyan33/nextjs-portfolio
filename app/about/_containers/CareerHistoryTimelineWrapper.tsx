import { CareerHistoryTimeline } from "../../components/ui/rsc"

const CareerHistoryTimelineWrapper = () => {
  return (
    <>
      {/* @ts-expect-error Server Component ※ts側のバグ */}
      <CareerHistoryTimeline />
    </>
  )
}

export default CareerHistoryTimelineWrapper
