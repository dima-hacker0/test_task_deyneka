import AdvantagesMini from "./advantages_mini/advantages_mini";
import CentralBlock from "./central_block/central_block";
import CompanyAdvantages from "./company_advantages/company_advantages";
import classes from "./main_page.module.css";
import TopPanel from "./top_panel/top_panel";

const MainPage = () => {
  return (
    <section className={classes.mainPage}>
      <div className={classes.container}>
        <TopPanel />
        <div className={classes.advantagesAndMain}>
          <CompanyAdvantages />
          <AdvantagesMini />
          <CentralBlock />
        </div>
      </div>
    </section>
  );
};

export default MainPage;
