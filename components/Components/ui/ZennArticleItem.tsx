import Image from 'next/image'
import Link from 'next/link'

export default function ZennArticleItem({
  portfolio_id,
  portfolio_name,
  portfolio_date,
  portfolio_tag,
  portfolio_topImg,
}) {
  return (
    <div className='flx_el'>
      <Link href={`portfolios/${portfolio_id}`}>
        <div className='portfolio__img'>
          <Image
            src={portfolio_topImg}
            alt='ポートフォリオ画像'
            fill
            sizes='(min-width: 768px) 50vw, 100vw'
          />
        </div>
        <div className='portfolio__flex'>
          <p className='portfolio__date'>{portfolio_date}</p>
          {portfolio_tag.map((tag, index) => (
            <li className='portfolio__tag' key={index}>
              {tag}
            </li>
          ))}
        </div>
        <p className='portfolio__title'> {portfolio_name} </p>
      </Link>
    </div>
  )
}