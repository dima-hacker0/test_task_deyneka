import Svg from "../../../svg/svg";
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
          <div className={classes.buttonContent}>
            <span className={classes.buttonText}>
              Рассчитать стоимость
              <br /> материалов и монтажа
            </span>
            <Svg id="arrow" styles={classes.arrow} />
          </div>
        </button>
        <button className={classes.buttons__item}>
          <div className={classes.buttonContent}>
            <span className={classes.buttonText}>
              записаться на
              <br /> просмотр объектов
            </span>
            <Svg styles={classes.arrow} id="arrow" />
          </div>
        </button>
      </div>
      <div className={classes.answerSomeQuestions}>
        <Svg id="click" styles={classes.logoClick} />
        <p>
          Ответьте на несколько вопросов и получите сметную стоимость и 3
          подарка за экономию нашего времени
        </p>
      </div>
    </div>
  );
};

export default CentralBlock;
