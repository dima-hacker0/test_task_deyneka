import Navigation from "../../repeat_components/navigation";
import classes from "./header.module.css";
import classesNavigation from "./navigation.module.css";
const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <Navigation classes={classesNavigation} />
      </div>
    </header>
  );
};

export default Header;
