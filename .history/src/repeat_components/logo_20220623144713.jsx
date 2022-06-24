import classes from "./logo.module.css";
import Svg from "../svg/svg";
import logo from "../../../../images/logo.png";

const Logo = () => {
  return (
    <div className={classes.block}>
      <div className={classes.blockLogo}>
        <Svg id="form" styles={classes.form} />
        <img className={classes.logo} src={logo} alt="logo" />
      </div>
    </div>
  );
};

export default Logo;
