import Svg from "../../../svg/svg";
import classes from "./company_advantages.module.css";

const CompanyAdvantages = () => {
  return (
    <div className={classes.companyAdvantages}>
      <button className={classes.escapeButton}>
        <Svg id="plus" styles={classes.cross} />
      </button>
      <div
        style={{ position: "relative" }}
        className={classes.showAllAdvantagesBlock}
      >
        <p className={classes.item}>
          <span className={classes.highlightedItems}>
            Гарантия от 50 лет <br />
          </span>
          на материалы и 5 <br />
          лет на монтаж
          <span className={classes.titleClickPlus}>
            <br />
            Нажмите на плюсик, чтобы увидеть все преимущества работы с нами
          </span>
        </p>
      </div>
      <p className={classes.item}>
        <span className={classes.highlightedItems}>
          Замер, монтажный
          <br /> проект и
          <br />
        </span>
        еще 4 услуги
        <br /> бесплатно
      </p>
      <p className={classes.item}>
        <span className={classes.highlightedItems}>
          Сметы
          <br /> точны{" "}
        </span>
        до копейки
      </p>
      <p className={classes.item}>
        <span className={classes.highlightedItems}>
          Поэтапная оплата,
          <br />
        </span>{" "}
        кредит или рассрочка
      </p>
      <p className={classes.item}>
        <span className={classes.highlightedItems}>
          Наши крыши в<br /> каждом поселке
          <br />
        </span>{" "}
        и дачном сообществе
        <br /> региона
      </p>
    </div>
  );
};

export default CompanyAdvantages;
