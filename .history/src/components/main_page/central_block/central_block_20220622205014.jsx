import classes from "./central_block.module.css";

const CentralBlock = () => {
  return (
    <div className={classes.CentralBlock}>
      <p className={classes.mainTitle}>
        Продажа{" "}
        <span>
          кровельных
          <br /> материалов{" "}
        </span>
        в Тюмени
        <br /> и Тюменской области
      </p>
    </div>
  );
};

export default CentralBlock;
