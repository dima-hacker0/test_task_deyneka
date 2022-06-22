import classes from "./materials.module.css";

const Materials = () => {
  return (
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
  );
};
