import Image from "next/image";
import { useModal } from "react-hooks-use-modal";

export default function Portfolio({
  portfolio_name,
  portfolio_date,
  portfolio_tag,
  portfolio_img,
  portfolio_url,
  portfolio_color,
  portfolio_time,
  portfolio_about,
  portfolio_skill,
}) {
  const [Modal, open, close, isOpen] = useModal("__next", {
    preventScroll: true,
  });
  return (
    <div className="flx_el">
      <a onClick={open} target="_blank">
        <div className="tac">
          <Image
            src={portfolio_img}
            className="about_img"
            alt="ポートフォリオ画像"
            width={300}
            height={150}
          />
        </div>

        <p className="portfoli__date">
          {portfolio_date}
          <span className={portfolio_color}>{portfolio_tag}</span>
        </p>
        <p> {portfolio_name} </p>
      </a>

      <Modal>
        <div className="bg-white">
          <h2 className="text-center">{portfolio_name}</h2>
          <div className="tac">
            <Image
              src={portfolio_img}
              className="about_img"
              alt="ポートフォリオ画像"
              width={300}
              height={150}
            />
          </div>
          <p className="modal-text">制作期間：{portfolio_time}</p>
          <p className="modal-text">使用技術：{portfolio_skill}</p>
          <p className="modal-text">概要：{portfolio_about}</p>
          <p className="modal-text">
            URL： <a href={portfolio_url}>{portfolio_url}</a>
          </p>
          {/* <p className="modal-text">
            リポジトリ<a href={portfolio_url}>{portfolio_url}</a>
          </p> */}
          <button onClick={close} className="modal-button">
            閉じる
          </button>
        </div>
      </Modal>
    </div>
  );
}
