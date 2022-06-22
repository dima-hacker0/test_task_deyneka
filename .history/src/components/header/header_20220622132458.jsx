import Svg from "../../svg/svg";
import classes from "./header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <nav className={classes.navigation}>
          <a href="/">
            <Svg id="house" classes={classes} />
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
      </div>
    </header>
  );
};

export default Header;
