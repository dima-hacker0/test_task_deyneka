import Svg from "../svg/svg";

const Navigation = ({ classes }) => {
  return (
    <nav className={classes.navigation}>
      <a href="/">
        <Svg id="house" styles={classes.svg} />
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
  );
};

export default Navigation;
