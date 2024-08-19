import Image from 'next/image'
import Link from 'next/link'

export default function PortfolioItem({
  portfolio_id,
  portfolio_name,
  portfolio_date,
  portfolio_tag,
  portfolio_topImg,
  portfolio_color,
}) {
  return (
    <div className='flx_el'>
      <Link href={`portfolios/${portfolio_id}`}>
        <div className='tac'>
          <Image
            src={portfolio_topImg}
            className='about_img'
            alt='ポートフォリオ画像'
            width={300}
            height={150}
          />
        </div>
        <div className='portfolio__date'>
          {portfolio_date}
          {portfolio_tag.map((tag, index) => (
            <li className={portfolio_color} key={index}>
              {tag}
            </li>
          ))}
        </div>
        <p> {portfolio_name} </p>
      </Link>
    </div>
  )
}
