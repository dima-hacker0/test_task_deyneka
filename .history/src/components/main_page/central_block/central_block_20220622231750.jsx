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
        <ul>
          <li></li>
        </ul>
      </div>
    </div>
  );
};

export default CentralBlock;
