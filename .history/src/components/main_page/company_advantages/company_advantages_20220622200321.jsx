import classes from "./company_advantages.module.css";

const CompanyAdvantages = () => {
  return (
    <div className={classes.companyAdvantages}>
      <p>
        <span>Гарантия от 50 лет</span> на материалы и 5лет на монтаж
      </p>
      <p>
        <span>Замер, монтажный проект</span> иеще 4 услуги бесплатно
      </p>
      <p>
        <span>Сметы точны</span> до копейки
      </p>
      <p>
        <span>Поэтапная оплата,</span> кредит или рассрочка
      </p>
      <p>
        <span>Наши крыши в каждом поселке</span> и дачном сообществе региона
      </p>
    </div>
  );
};

export default CompanyAdvantages;
