import classes from "./top_panel.module.css";

const TopPanel = () => {
  return (
    <div className={classes.items}>
      <div className={classes.item}>
        <p className={classes.text}>
          <span>Кровельные и фасадные материалы</span> в Тюмени и области.
        </p>
        <p className={classes.text}>Профессиональный монтаж с 2010 года.</p>
      </div>
      <div className={classes.item}></div>
      <div className={classes.item}></div>
      <div className={classes.item}></div>
      <div className={classes.item}></div>
    </div>
  );
};

export default TopPanel;
