import Link from 'next/link'
import { PATH } from '../../../utils/path'
import Image from 'next/image'

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
    <footer className='footer' aria-label='フッター'>
      <div className='max_width'>
        <ul className='footer_flx'>
          <div className='flx'>
            <div className='flx_el'>
              <Link href='/'>
                <img
                  src='/images/common/logo.svg'
                  alt='ポートフォリオ画像'
                  className='footer_logo'
                />
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
  )
}
