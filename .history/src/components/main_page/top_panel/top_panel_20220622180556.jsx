import DownloadCatalog from "./download_catalog/download_catalog";
import Materials from "./materials/materials";
import classes from "./top_panel.module.css";
import Logo from "./logo/logo";
import Answer from "./answer_online/answer";

const TopPanel = () => {
  return (
    <div className={classes.items}>
      <div className={classes.leftSide}>
        <Materials />
        <DownloadCatalog />
      </div>
      <Logo />
      <div className={classes.rightSide}>
        <Answer />
      </div>
    </div>
  );
};

export default TopPanel;
