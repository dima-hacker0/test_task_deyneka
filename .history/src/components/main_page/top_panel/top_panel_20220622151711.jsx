import classes from "./top_panel.module.css";

const TopPanel = () => {
  return (
    <div className={classes.items}>
      <div className={classes.item}>
        <p>
          Кровельные и фасадные материалы в Тюмени и области. Профессиональный
          монтаж с 2010 года.
        </p>
      </div>
      <div className={classes.item}></div>
      <div className={classes.item}></div>
      <div className={classes.item}></div>
      <div className={classes.item}></div>
    </div>
  );
};

export default TopPanel;
