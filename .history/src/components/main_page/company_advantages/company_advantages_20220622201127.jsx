import classes from "./company_advantages.module.css";

const CompanyAdvantages = () => {
  return (
    <div className={classes.companyAdvantages}>
      <p className={classes.item}>
        <span>
          Гарантия от 50 лет <br />
        </span>{" "}
        на материалы и 5 <br />
        лет на монтаж
      </p>
      <p className={classes.item}>
        <span>
          Замер, монтажный
          <br /> проект и
          <br />
        </span>{" "}
        еще 4 услуги
        <br /> бесплатно
      </p>
      <p className={classes.item}>
        <span>
          Сметы
          <br /> точны
        </span>{" "}
        до копейки
      </p>
      <p className={classes.item}>
        <span>
          Поэтапная оплата,
          <br />
        </span>{" "}
        кредит или рассрочка
      </p>
      <p className={classes.item}>
        <span>
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
