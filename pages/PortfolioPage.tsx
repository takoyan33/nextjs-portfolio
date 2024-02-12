import Header from "../components/Components/ui/Header";
import Footer from "../components/Components/ui/Footer";
import Portfolio from "../components/Components/ui/Portfolio";
import { PORTFOLIO_LIST } from "../components/Components/data/data";

export default function PortfolioPage() {
  return (
    <>
      <Header />

      <div className="">
        <div className="max_width">
          <h2 className="main__title">Portfolio</h2>
          <h3 className="main__subtitle">ポートフォリオ</h3>
          <div className="flx padding">
            {PORTFOLIO_LIST.map((portfolio, index) => (
              <Portfolio
                key={index}
                portfolio_name={portfolio.name}
                portfolio_date={portfolio.date}
                portfolio_tag={portfolio.tag}
                portfolio_img={portfolio.img}
                portfolio_url={portfolio.url}
                portfolio_color={portfolio.color}
                portfolio_time={portfolio.time}
                portfolio_about={portfolio.about}
                portfolio_skill={portfolio.skill}
                portfolio_github={portfolio.github}
              />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
