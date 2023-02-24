import Image from "next/image";
import { useModal } from "react-hooks-use-modal";

export default function Timeline({ title, date, body }) {
  return (
    <>
      <dt>{date}</dt>
      <dd>
        <h2>{title}</h2>
        <p>{body}</p>
      </dd>
    </>
  );
}
