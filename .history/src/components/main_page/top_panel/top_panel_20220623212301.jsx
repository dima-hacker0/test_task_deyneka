import DownloadCatalog from "../../../repeat_components/download_catalog/download_catalog";
import Materials from "../../../repeat_components/materials/materials";
import classes from "./top_panel.module.css";
import Logo from "../../../repeat_components/logo/logo";
import Answer from "../../../repeat_components/answer_online/answer";
import CallMe from "../../../repeat_components/call_me/call_me";

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
