import Svg from "../../svg/svg";
import classes from "./popap.module.css";

const Popap = () => {
  return (
    <div className={classes.background}>
      <div className={classes.popap}>
        <div className={classes.container}>
          <p className={classes.submitApplicationText}>
            Быстро
            <br /> оставить заявку
          </p>
          <p>
            Введите номер, мы позвоним вам в<br /> течение 10 минут в рабочее
            время
          </p>
        </div>
        <Svg styles={classes.cross} id="cross" />
      </div>
    </div>
  );
};

export default Popap;
