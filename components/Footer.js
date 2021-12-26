import Link from 'next/link'


export default function Footer() {
  return (
    <div className="container">

<footer className="footer" data-aos="fade-up">
    <div className="max_width">
      <ul className="flx_footer">
        <div className="flx">
          <div className="flx_el">
            <a href="index.html">
              <p className="footer_logo">
                To You Design
              </p>
            </a>
          </div>
          <div className="flx_el">
            <a href="archive-portfolio.html">
              <p className="footer_list">
                ポートフォリオ
              </p>
            </a>
            <a href="archive-news.html">
              <p className="footer_list">
                News
              </p>
            </a>
          </div>
          <div className="flx_el">
            <a href="contact.html">
              <p className="footer_list">
                お問い合わせ
              </p>
            </a>
          </div>
        </div>
      </ul>
    </div>

    <p class="footer_text">© 2021 To You Design</p>

  </footer>

    </div>
  )
}
