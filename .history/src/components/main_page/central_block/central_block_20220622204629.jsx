import classes from "./central_block.module.css";

const CentralBlock = () => {
  return (
    <div className={classes.CentralBlock}>
      <h1>
        Продажа
        <span>
          кровельных
          <br /> материалов
        </span>
        в Тюмени
        <br /> и Тюменской области
      </h1>
    </div>
  );
};

export default CentralBlock;
