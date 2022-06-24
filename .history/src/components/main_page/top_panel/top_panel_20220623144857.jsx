import DownloadCatalog from "./download_catalog/download_catalog";
import Materials from "./materials/materials";
import classes from "./top_panel.module.css";
import Logo from "../../../repeat_components/logo";
import Answer from "./answer_online/answer";
import CallMe from "./block_call_me/call_me";
import classesLogo from "./logo/logo.module.css";

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
        <CallMe />
      </div>
    </div>
  );
};

export default TopPanel;
