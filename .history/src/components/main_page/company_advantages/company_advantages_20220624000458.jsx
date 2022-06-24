import { useState } from "react";
import Svg from "../../../svg/svg";
import classes from "./company_advantages.module.css";

const CompanyAdvantages = () => {
  const [openAdvantages, setOpenAdvavtages] = useState(false);

  return (
    <div
      className={
        openAdvantages
          ? `${classes.borderBlockOpen} ${classes.borderBlock}`
          : classes.borderBlock
      }
    >
      <div className={classes.companyAdvantages}>
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
          <button
            onClick={() => setOpenAdvavtages(true)}
            className={classes.showAlladvantagesButton}
          >
            <Svg id="plus" styles={classes.plusSvg} />
          </button>
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
    </div>
  );
};

export default CompanyAdvantages;
