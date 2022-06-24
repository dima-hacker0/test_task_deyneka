import Svg from "../../svg/svg";
import classes from "./popap.module.css";
import InputMask from "react-input-mask";

const Popap = () => {
  return (
    <div className={classes.background}>
      <div className={classes.popap}>
        <div className={classes.container}>
          <p className={classes.submitApplicationText}>
            Быстро
            <br /> оставить заявку
          </p>
          <p className={classes.enterNumber}>
            Введите номер, мы позвоним вам в<br /> течение 10 минут в рабочее
            время
          </p>
          <p className={classes.workingHours}>
            Пн–Пт 9:00 - 18:00, Сб 10:00 - 18:00
          </p>
          <form>
            <InputMask
              className={classes.input}
              alwaysShowMask="true"
              mask="+7(999)99-99-99"
            />
            <button className={classes.buttonCallMe}>
              <div className={classes.buttonCallMe}></div>
            </button>
          </form>
        </div>
        <Svg styles={classes.cross} id="cross" />
      </div>
    </div>
  );
};

export default Popap;
