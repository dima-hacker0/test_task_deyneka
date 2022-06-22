import Svg from "../../svg/svg";
import classes from "./header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <nav>
        <Svg id="house" />
        <a className={classes.linkPage}>каталог</a>
        <a className={classes.linkPage}>преимущества</a>
        <a className={classes.linkPage}>примеры работ</a>
        <a className={classes.linkPage}>монтаж</a>
        <a className={classes.linkPage}>отзывы</a>
        <a className={classes.linkPage}>ответы на вопросы</a>
        <a className={classes.linkPage}>контакты</a>
      </nav>
    </header>
  );
};

export default Header;
