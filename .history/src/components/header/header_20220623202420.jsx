import Logo from "../../repeat_components/logo/logo";
import Navigation from "../../repeat_components/navigation/navigation";
import classes from "./header.module.css";
import classesNavigation from "./styles/navigation.module.css";
import classesLogo from "./styles/logo.module.css";
import CallMe from "../../repeat_components/call_me/call_me";
import callMeClasses from "./styles/call_me.module.css";
import popapNavigation from "./styles/popapNavigation.module.css";
import { useState } from "react";
import React from "react";
import Materials from "../../repeat_components/materials/materials";
import materialsClasses from "./styles/materials.module.css";

const Header = () => {
  const checkbox = React.createRef();
  const [openMenu, setOpenMenu] = useState(true);

  const closeOpenMenu = () => {
    if (checkbox.current.checked) {
      setOpenMenu(false);
    } else {
      setOpenMenu(true);
    }
  };

  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <Navigation classes={classesNavigation} />
        <div className={classes.smallExtensionHeader}>
          <Logo classes={classesLogo} />
          <CallMe classes={callMeClasses} />
          <label htmlFor="checkbox">
            <div onClick={closeOpenMenu} className={classes.buttonOpenMenu}>
              <div
                className={
                  openMenu
                    ? `${classes.firstLineCross} ${classes.firstLine}`
                    : classes.firstLine
                }
              ></div>
              <div
                className={
                  openMenu
                    ? `${classes.secondLineCross} ${classes.secondLine}`
                    : classes.secondLine
                }
              ></div>
              <div
                className={
                  openMenu
                    ? `${classes.thirdLineCross} ${classes.thirdLine}`
                    : classes.thirdLine
                }
              ></div>
            </div>
          </label>
          <input
            style={{ display: "none" }}
            ref={checkbox}
            type="checkbox"
            id="checkbox"
          />
        </div>
      </div>
      <div
        className={
          openMenu
            ? `${classes.popapMenu} ${classes.openPopapMenu}`
            : classes.popapMenu
        }
      >
        <Navigation classes={popapNavigation} />
        <Materials classes={materialsClasses} />
      </div>
    </header>
  );
};

export default Header;