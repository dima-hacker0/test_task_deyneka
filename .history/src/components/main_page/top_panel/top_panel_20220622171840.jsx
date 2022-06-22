import Svg from "../../../svg/svg";
import DownloadCatalog from "./download_catalog/download_catalog";
import Materials from "./materials/materials";
import classes from "./top_panel.module.css";

const TopPanel = () => {
  return (
    <div className={classes.items}>
      <Materials />
      <DownloadCatalog />
      <div>
        <Svg id="form" styles={classes.form} />
      </div>
      <div></div>
      <div></div>
    </div>
  );
};

export default TopPanel;
