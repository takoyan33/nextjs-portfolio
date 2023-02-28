import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Skill({ name, rank, tag, icon }) {
  return (
    <div className="flx_el">
        <FontAwesomeIcon icon={icon} className="size tac" />
      <p className="code_title">{name} </p>
      <p className="code_title">{rank}</p>
      <p className="code_title">{tag}</p>
    </div>
  );
}
