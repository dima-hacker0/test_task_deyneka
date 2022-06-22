import classes from "./top_panel.module.css";

const TopPanel = () => {
  return (
    <div className={classes.items}>
      <div className={classes.item}>
        <p className={classes.text}>
          <span className={classes.textMaterials}>
            Кровельные и фасадные <br /> материалы
          </span>
          в Тюмени и области.
        </p>
        <p className={classes.text}>
          Профессиональный монтаж <br /> с 2010 года.
        </p>
      </div>
      <div className={classes.item}>
        <div className={classes.circlePdf}>Pdf</div>
        <p className={classes.text}>скачать прайс-каталог</p>
      </div>
      <div className={classes.item}></div>
      <div className={classes.item}></div>
      <div className={classes.item}></div>
    </div>
  );
};

export default TopPanel;
