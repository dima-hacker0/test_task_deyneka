import classes from "./advantages_mini.module.css";

const AdvantagesMini = () => {
  return (
    <div
      style={{ position: "relative" }}
      className={classes.showAllAdvantagesBlock}
    >
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
      <button className={classes.showAlladvantagesButton}>
        <Svg id="plus" styles={classes.plusSvg} />
      </button>
    </div>
  );
};

export default AdvantagesMini;
