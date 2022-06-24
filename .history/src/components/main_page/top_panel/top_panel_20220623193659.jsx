import DownloadCatalog from "./download_catalog/download_catalog";
import Materials from "../../../repeat_components/materials";
import classes from "./top_panel.module.css";
import Logo from "../../../repeat_components/logo";
import Answer from "./answer_online/answer";
import CallMe from "../../../repeat_components/call_me";
import classesLogo from "./logo/logo.module.css";
import classesCallMe from "./block_call_me/call_me.module.css";
import classesMaterials from "./materials/materials.module.css";

const TopPanel = () => {
  return (
    <div className={classes.items}>
      <div className={classes.leftSide}>
        <Materials classes={classesMaterials} />
        <DownloadCatalog />
      </div>
      <Logo classes={classesLogo} />
      <div className={classes.rightSide}>
        <Answer />
        <CallMe classes={classesCallMe} />
      </div>
    </div>
  );
};

export default TopPanel;
