import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import usePortfolioModal from "../parts/usePortfolioModal";

export default function Skill({ name, rank, tag, icon, about }) {
  const [Modal, open, close, isOpen] = usePortfolioModal();
  return (
    <>
      <div className="flx_el">
        <a onClick={open} target="_blank">
          <FontAwesomeIcon icon={icon} className="size tac" />
          <p className="code_title">{name} </p>
          <p className="code_title">{rank}</p>
          <p className="code_title">{tag}</p>
        </a>
      </div>
      <Modal>
        <div className="bg-white">
          <h2 className="text-center">{name}</h2>
          <div className="tac">
            <FontAwesomeIcon icon={icon} className="size tac" />
          </div>
          <p className="modal-text">技術力：{rank}</p>
          <p className="modal-text">使用技術：{tag}</p>
          <p className="modal-text">概要：{about}</p>
          <button onClick={close} className="main__btn">
            閉じる
          </button>
        </div>
      </Modal>
    </>
  );
}
