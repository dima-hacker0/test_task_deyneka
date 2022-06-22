import Svg from "../../svg/svg";
import classes from "./header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <a href="/">
          <Svg id="house" />
        </a>
        <a href="/" className={classes.linkPage}>
          каталог
        </a>
        <a href="/" className={classes.linkPage}>
          преимущества
        </a>
        <a href="/" className={classes.linkPage}>
          примеры работ
        </a>
        <a href="/" className={classes.linkPage}>
          монтаж
        </a>
        <a href="/" className={classes.linkPage}>
          отзывы
        </a>
        <a href="/" className={classes.linkPage}>
          ответы на вопросы
        </a>
        <a href="/" className={classes.linkPage}>
          контакты
        </a>
      </nav>
    </header>
  );
};

export default Header;
