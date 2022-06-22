import classes from "./main_page.module.css";
import TopPanel from "./top_panel/top_panel";

const MainPage = () => {
  return (
    <section className={classes.mainPage}>
      <div>
        <TopPanel />
      </div>
    </section>
  );
};

export default MainPage;
