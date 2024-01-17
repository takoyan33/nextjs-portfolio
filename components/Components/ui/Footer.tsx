import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="container">
      <footer className="footer" data-aos="fade-up">
        <div className="max_width">
          <ul className="flx_footer">
            <div className="flx">
              <div className="flx_el">
                <Link href="/">
                  <p className="footer_logo">To You Design</p>
                </Link>
              </div>
              <div className="flx_el">
                <Link href="/Portfolio">
                  <p className="footer_list">ポートフォリオ</p>
                </Link>
                <Link href="/News">
                  <p className="footer_list">News</p>
                </Link>
                {/* <Link href="/Contact">
                  <p className="footer_list">お問い合わせ</p>
                </Link> */}
                <div className="flx_el"></div>
              </div>
            </div>
          </ul>
        </div>

        <p className="footer_text">© {currentYear} To You Design</p>
      </footer>
    </div>
  );
}
