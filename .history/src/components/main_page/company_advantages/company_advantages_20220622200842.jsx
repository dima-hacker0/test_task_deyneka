import classes from "./company_advantages.module.css";

const CompanyAdvantages = () => {
  return (
    <div className={classes.companyAdvantages}>
      <p className={classes.item}>
        <span>Гарантия от 50 лет</span> на материалы и 5лет на монтаж
      </p>
      <p className={classes.item}>
        <span>
          Замер, монтажный проект
          <br />
        </span>{" "}
        иеще 4 услуги бесплатно
      </p>
      <p className={classes.item}>
        <span>Сметы точны</span> до копейки
      </p>
      <p className={classes.item}>
        <span>Поэтапная оплата,</span> кредит или рассрочка
      </p>
      <p className={classes.item}>
        <span>Наши крыши в каждом поселке</span> и дачном сообществе региона
      </p>
    </div>
  );
};

export default CompanyAdvantages;
