import Svg from "../../../svg/svg";
import DownloadCatalog from "./download_catalog/download_catalog";
import Materials from "./materials/materials";
import classes from "./top_panel.module.css";
import logo from "../../../images/logo.png";
import Logo from "./logo/logo";

const TopPanel = () => {
  return (
    <div className={classes.items}>
      <div className={classes.leftSide}>
        <Materials />
        <DownloadCatalog />
      </div>
      <Logo />
      <div></div>
      <div></div>
    </div>
  );
};

export default TopPanel;
