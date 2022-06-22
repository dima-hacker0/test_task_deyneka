import Svg from "../../../svg/svg";
import DownloadCatalog from "./download_catalog/download_catalog";
import Materials from "./materials/materials";
import classes from "./top_panel.module.css";
import logo from "../../../images/logo.png";

const TopPanel = () => {
  return (
    <div className={classes.items}>
      <Materials />
      <DownloadCatalog />
      <div>
        <Svg id="form" styles={classes.form} />
        <img className={classes.logo} src={logo} alt="logo" />
      </div>
      <div></div>
      <div></div>
    </div>
  );
};

export default TopPanel;
