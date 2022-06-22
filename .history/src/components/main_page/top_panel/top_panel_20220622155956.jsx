import Materials from "./materials/materials";
import classes from "./top_panel.module.css";

const TopPanel = () => {
  return (
    <div className={classes.items}>
      <Materials />
      <div className={classes.item}>
        <div className={classes.circlePdf}>Pdf</div>
        <p className={classes.downloadСatalog}>скачать прайс-каталог</p>
      </div>
      <div className={classes.item}></div>
      <div className={classes.item}></div>
      <div className={classes.item}></div>
    </div>
  );
};

export default TopPanel;
