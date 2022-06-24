import Logo from "../../repeat_components/logo/logo";
import Navigation from "../../repeat_components/navigation/navigation";
import classes from "./header.module.css";
import CallMe from "../../repeat_components/call_me/call_me";
import { useState } from "react";
import React from "react";
import Materials from "../../repeat_components/materials/materials";
import DownloadCatalog from "../../repeat_components/download_catalog/download_catalog";
import Answer from "../../repeat_components/answer_online/answer";

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
        <label className={classes.bigMenu}>
          <Navigation />
        </label>
        <div className={classes.smallExtensionHeader}>
          <Logo />
          <CallMe />
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
        <Navigation />
        <Materials />
        <DownloadCatalog />
        <Answer />
      </div>
    </header>
  );
};

export default Header;
