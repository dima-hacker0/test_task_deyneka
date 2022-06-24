import classes from "./central_block.module.css";

const CentralBlock = () => {
  return (
    <div className={classes.centralBlock}>
      <h1 className={classes.mainTitle}>
        Продажа{" "}
        <span className={classes.highlightText}>
          кровельных
          <br /> материалов{" "}
        </span>
        в Тюмени
        <br /> и Тюменской области
      </h1>
      <div className={classes.turnkeyInstallation}>
        <ul className={classes.circles}>
          <li className={classes.circles__item}></li>
          <li className={classes.circles__item}></li>
          <li className={classes.circles__item}></li>
          <li className={classes.circles__item}></li>
        </ul>
        <span className={classes.turnkeyInstallation__text}>
          и монтаж под ключ
        </span>
      </div>
      <div className={classes.buttons}>
        <button className={classes.buttons__item}>
          <div className={classes.buttonContent}></div>
        </button>
        <button></button>
      </div>
    </div>
  );
};

export default CentralBlock;
