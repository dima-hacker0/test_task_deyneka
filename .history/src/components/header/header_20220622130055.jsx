import Svg from "../../svg/svg";
import classes from "./header.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <nav>
        <Svg id="house" />
        <p>каталог</p>
        <p>преимущества</p>
        <p>примеры работ</p>
        <p>монтаж</p>
        <p>отзывы</p>
        <p>ответы на вопросы</p>
        <p>контакты</p>
      </nav>
    </header>
  );
};

export default Header;
