import Link from "next/link";

export default function Header() {
  return (
    <>
      {/*ここからPCヘッダー*/}
      <div class="max_width">
        <header class="pc">
          <div class="header_flx">
            <h1>
              <Link href="/">To You Design</Link>
            </h1>
            <nav class="pc-nav">
              {/* <ul>
            <li><Link href="Portfolio">
              ポートフォリオ
              </Link></li>
            <li><Link href="News">
              News
             </Link> 
              </li>
            <li><Link href="Contact">
            お問い合わせ
              </Link></li>
          </ul> */}
            </nav>
          </div>
        </header>
      </div>
      {/*ここまでPCヘッダー*/}

      {/*ここからSPヘッダー*/}
      <header class="header sp">
        <div class="header__inner">
          <h1>
            <a href="index.html">To You Design</a>
          </h1>
          {/*ナビゲーション*/}
          <nav class="nav">
            <ul class="nav__lists"></ul>
          </nav>
          {/*hamburgerボタン*/}
          {/* <div class="hamburger-btn">
        <span class="hamburger-btn__parts -top"></span>
        <span class="hamburger-btn__parts -middle"></span>
        <span class="hamburger-btn__parts -bottom"></span>
      </div> */}
          {/*hamburgerメニュ*/}
          {/* <nav class="hamburger">
        <ul class="hamburger__lists">
          <li class="hamburger__list" data-aos="fade-up">
            <a class="hamburger__link" href="portfolio.html">ポートフォリオ</a>
          </li>
          <li class="hamburger__list" data-aos="fade-up">
            <a class="hamburger__link" href="news.html">News</a>
            </li>
          <li class="hamburger__list" data-aos="fade-up">
            <a class="hamburger__link" href="contact.html">お問い合わせ</a>
          </li>
        </ul>
      </nav> */}
        </div>
      </header>
      {/*ここからSPヘッダ*/}
      {/* <div class="loader-wrap">
      <div class="loader">Loading...</div>
    </div> */}
    </>
  );
}
