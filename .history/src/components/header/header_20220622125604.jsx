import Svg from "../../svg/svg";
import classes from "./header.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <nav>
        <Svg id="house" />
      </nav>
    </header>
  );
};

export default Header;
