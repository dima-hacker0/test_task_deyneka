import Svg from "../../../svg/svg";
import DownloadCatalog from "./download_catalog/download_catalog";
import Materials from "./materials/materials";
import classes from "./top_panel.module.css";
import logo from "../../../images/logo.png";

const TopPanel = () => {
  return (
    <div className={classes.items}>
      <div className={classes.leftSide}>
        <Materials />
        <DownloadCatalog />
      </div>
      <div className={classes.block}>
        <div className={classes.blockLogo}>
          <Svg id="form" styles={classes.form} />
          <img className={classes.logo} src={logo} alt="logo" />
        </div>
      </div>
      <div></div>
      <div></div>
    </div>
  );
};

export default TopPanel;
