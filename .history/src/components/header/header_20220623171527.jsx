import Logo from "../../repeat_components/logo";
import Navigation from "../../repeat_components/navigation";
import classes from "./header.module.css";
import classesNavigation from "./navigation.module.css";
import classesLogo from "./logo.module.css";
import CallMe from "../../repeat_components/call_me";
import callMeClasses from './call_me.module.css'
const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <Navigation classes={classesNavigation} />
        <div className={classes.smallExtensionHeader}>
          <Logo classes={classesLogo} />
          <CallMe 
        </div>
      </div>
    </header>
  );
};

export default Header;
