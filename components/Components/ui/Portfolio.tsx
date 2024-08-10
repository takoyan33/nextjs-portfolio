import Image from "next/image";
import usePortfolioModal from "../parts/usePortfolioModal";

export default function Portfolio({
  portfolio_name,
  portfolio_date,
  portfolio_tag,
  portfolio_img,
  portfolio_url,
  portfolio_github,
  portfolio_color,
  portfolio_time,
  portfolio_about,
  portfolio_skill,
}) {
  const [Modal, open, close, isOpen] = usePortfolioModal();

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

        <p className="portfolio__date">
          {portfolio_date}
          <span className={portfolio_color}>{portfolio_tag}</span>
        </p>
        <p> {portfolio_name} </p>
      </a>

      <Modal>
        <div className="bg-white">
          <button onClick={close} className="modalBox_btn w-100">
            <img
              src="/images/close-icon.svg"
              alt="閉じる"
            />
          </button>
          <div className="modalBox">
            <div className="modalBox__element">
              <img
                src={portfolio_img}
                className="modalBox__element__img"
                alt="ポートフォリオ画像"
              />
            </div>

            <div className="modalBox__element">
              <h3 className="modalBox__element__text">{portfolio_name}</h3>
              <p className="modalBox__element__text">
                制作期間<br></br>
                {portfolio_time}
              </p>
              <p className="modalBox__element__text">
                使用技術<br></br>
                {portfolio_skill}
              </p>
              <p className="modalBox__element__text">
                概要<br></br>
                {portfolio_about}
              </p>
              <p className="modalBox__element__text">
                URL
                <a
                  href={portfolio_url}
                  className="modalBox__element__link"
                  target="_blank"
                >
                  {portfolio_url}
                </a>
              </p>
              <p className="modalBox__element__text">
                Github
                <a
                  href={portfolio_github}
                  className="modalBox__element__link"
                  target="_blank"
                >
                  {portfolio_github}
                </a>
              </p>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
