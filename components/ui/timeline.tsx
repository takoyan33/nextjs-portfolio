import parse from "html-react-parser"

import { formatDate } from "@/hooks/date"

type TimelineProps = {
  title: string
  date: string
  body: string
}

/**
 * タイムライン
 */
export const Timeline = ({ title, date, body }: TimelineProps) => {
  return (
    <>
      <dt>{formatDate(date)}</dt>
      <dd>
        <h2>{title}</h2>
        {parse(body)}
      </dd>
    </>
  )
}
