import Navigation from "../../repeat_components/navigation";
import Svg from "../../svg/svg";
import classes from "./header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <Navigation classes={classes} />
      </div>
    </header>
  );
};

export default Header;
