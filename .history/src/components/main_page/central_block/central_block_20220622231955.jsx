import classes from "./central_block.module.css";

const CentralBlock = () => {
  return (
    <div className={classes.CentralBlock}>
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
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <span>и монтаж под ключ</span>
      </div>
    </div>
  );
};

export default CentralBlock;
