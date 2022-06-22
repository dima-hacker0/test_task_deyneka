import classes from "./logo.module.css";

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
