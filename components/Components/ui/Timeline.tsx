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
        <p>{body}</p>
      </dd>
    </>
  )
}
