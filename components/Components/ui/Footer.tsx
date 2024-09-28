import Link from 'next/link'
import { PATH } from '../../../utils/path'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  type MenuItem = {
    title: string
    link: string
  }

  const MENU_ITEMS: MenuItem[] = [
    {
      title: 'About',
      link: PATH.ABOUT,
    },
    {
      title: 'ポートフォリオ',
      link: PATH.PORTFOLIO,
    },
    {
      title: 'ブログ',
      link: PATH.BLOG,
    },
    {
      title: 'お問い合わせ',
      link: PATH.CONTACT,
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
