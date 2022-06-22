import classes from "./company_advantages.module.css";

const CompanyAdvantages = () => {
  return (
    <div className={classes.companyAdvantages}>
      <div>
        <span>Гарантия от 50 лет</span> на материалы и 5лет на монтаж
      </div>
      <div>
        <span>Замер, монтажный проект</span> иеще 4 услуги бесплатно{" "}
      </div>
      <div>
        <span>Сметы точны</span> до копейки
      </div>
      <div>
        <span>Поэтапная оплата,</span> кредит или рассрочка{" "}
      </div>
      <div>Наши крыши в каждом поселке и дачном сообществе региона </div>
    </div>
  );
};

export default CompanyAdvantages;
