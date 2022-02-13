import Link from "next/link";

export default function Header() {
  return (
    <>
      {/*ここからPCヘッダー*/}
      <div className="max_width">
        <header className="pc">
          <div className="header_flx">
            <h1>
              <Link href="/">To You Design</Link>
            </h1>
            <nav className="pc-nav">
              <ul>
                <li>
                  <Link href="Portfolio">ポートフォリオ</Link>
                </li>
                <li>
                  <Link href="News">News</Link>
                </li>
                <li>
                  <Link href="Contact">お問い合わせ</Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      </div>
      {/*ここまでPCヘッダー*/}

      {/*ここからSPヘッダー*/}
      <header className="header sp">
        <div className="header__inner">
          <h1>
            <a href="index.html">To You Design</a>
          </h1>
          {/*ナビゲーション*/}
          <nav className="nav">
            <ul className="nav__lists"></ul>
          </nav>
          {/*hamburgerボタン*/}
          <div className="hamburger-btn">
            <span className="hamburger-btn__parts -top"></span>
            <span className="hamburger-btn__parts -middle"></span>
            <span className="hamburger-btn__parts -bottom"></span>
          </div>
          {/*hamburgerメニュ*/}
          <nav className="hamburger">
            <ul className="hamburger__lists">
              <li className="hamburger__list" data-aos="fade-up">
                <a className="hamburger__link" href="portfolio.html">
                  ポートフォリオ
                </a>
              </li>
              <li className="hamburger__list" data-aos="fade-up">
                <a className="hamburger__link" href="news.html">
                  News
                </a>
              </li>
              <li className="hamburger__list" data-aos="fade-up">
                <a className="hamburger__link" href="contact.html">
                  お問い合わせ
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      {/*ここからSPヘッダ*/}
    </>
  );
}
