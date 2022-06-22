import Svg from "../../svg/svg";
import classes from "./header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <nav>
        <Svg id="house" />
        <p className={classes.linkPage}>каталог</p>
        <p className={classes.linkPage}>преимущества</p>
        <p className={classes.linkPage}>примеры работ</p>
        <p className={classes.linkPage}>монтаж</p>
        <p className={classes.linkPage}>отзывы</p>
        <p className={classes.linkPage}>ответы на вопросы</p>
        <p className={classes.linkPage}>контакты</p>
      </nav>
    </header>
  );
};

export default Header;
