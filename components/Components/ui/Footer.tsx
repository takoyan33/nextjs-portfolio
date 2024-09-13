import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const MENU_ITEMS = [
    {
      title: 'About',
      link: 'About',
    },
    {
      title: 'ポートフォリオ',
      link: 'Portfolio',
    },
    {
      title: 'ブログ',
      link: 'Blog',
    },
  ]
  return (
    <div className='container'>
      <footer className='footer' data-aos='fade-up'>
        <div className='max_width'>
          <ul className='footer_flx'>
            <div className='flx'>
              <div className='flx_el'>
                <Link href='/'>
                  <p className='footer_logo'>To You Design</p>
                </Link>
              </div>
              <div className='flx_el'>
                {MENU_ITEMS.map((item, index) => (
                  <Link href={item.link} key={index}>
                    <p className='footer_list'>{item.title}</p>
                  </Link>
                ))}
              </div>
            </div>
          </ul>
        </div>

        <p className='footer_text'>© {currentYear} To You Design</p>
      </footer>
    </div>
  )
}
