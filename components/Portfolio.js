
import Image from 'next/image';


export default function Portfolio({portfolio_name, portfolio_date, portfolio_tag, portfolio_img, portfolio_url, portfolio_color}) {

return (
    <div className="flx_el">
        <a href={portfolio_url } target="_blank" >
          <p className="tac">
          <p className="tac">
             <Image
             src={portfolio_img} 
             className="about_img" 
             alt="ポートフォリオ画像"
             width={300}
             height={150} 
               /></p></p>
        </a>
        <p className="portfoli__date">{portfolio_date}<span className={portfolio_color}>{portfolio_tag}</span></p>
        <p> {portfolio_name} </p>
      </div>

)

}