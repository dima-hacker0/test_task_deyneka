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
          <p className={classes.item}>
            <span className={classes.highlightedItems}>
              Гарантия от 50 лет <br />
            </span>
            на материалы и 5 <br />
            лет на монтаж
            <span className={classes.titleClickPlus}>
              <br />
              Нажмите на плюсик, чтобы увидеть все преимущества работы с нами
            </span>
          </p>
          <CompanyAdvantages />
          <CentralBlock />
        </div>
      </div>
    </section>
  );
};

export default MainPage;
