import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import usePortfolioModal from "../parts/usePortfolioModal";
import CommonButton from "../ui/CommonButton";

export default function Skill({ name, rank, tag, icon, about }) {
  const [Modal, open, close, isOpen] = usePortfolioModal();
  return (
    <>
      <div className="flx_el">
        <a onClick={open} target="_blank">
          <FontAwesomeIcon icon={icon} className="tac fa-5x size" />
          <p className="skill_text">{name} </p>
          <p className="skill_text">{rank}</p>
          <p className="skill_text">{tag}</p>
        </a>
      </div>
      <Modal>
        <div className="bg-white">
          <h2 className="skill_text">{name}</h2>
          <div className="tac">
            <FontAwesomeIcon icon={icon} className="fa-10x size" />
          </div>
          <p className="modal-text">技術力：{rank}</p>
          <p className="modal-text">使用技術：{tag}</p>
          <p className="modal-text">概要：{about}</p>
          <CommonButton text="閉じる" className="w-8" handleClick={close} />
        </div>
      </Modal>
    </>
  );
}
