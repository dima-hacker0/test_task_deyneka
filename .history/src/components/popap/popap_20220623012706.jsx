import Svg from "../../svg/svg";
import classes from "./popap.module.css";

const Popap = () => {
  return (
    <div className={classes.background}>
      <div className={classes.popap}>
        <div className={classes.container}>
          <p className={classes.submitApplicationText}>
            быстро
            <br /> оставить заявку
          </p>
        </div>
        <Svg styles={classes.cross} id="cross" />
      </div>
    </div>
  );
};

export default Popap;
