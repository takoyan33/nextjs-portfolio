import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faCss3, faReact, faJs, faWordpress  } from "@fortawesome/free-brands-svg-icons";
import { faGem } from "@fortawesome/free-regular-svg-icons";
import { faCamera} from "@fortawesome/free-solid-svg-icons";

export default function Skill({skill_name, skill_rank, skill_tag, skill_icon}) {

return (
  <div className="flx_el">
  <p className="tac">
    <FontAwesomeIcon icon={skill_icon} className="size" />
  </p>
<p className="code_title">{skill_name} </p>
<p className="code_title">{skill_rank}</p>
<p className="code_title">{skill_tag}</p>          

</div>

)

}