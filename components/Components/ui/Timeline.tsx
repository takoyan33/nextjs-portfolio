import parse from 'html-react-parser'

type TimelineProps = {
  title: string
  date: string
  body: string
}

export default function Timeline({ title, date, body }: TimelineProps) {
  return (
    <>
      <dt>{date}</dt>
      <dd>
        <h2>{title}</h2>
        {parse(body)}
      </dd>
    </>
  )
}
