import classes from "./company_advantages.module.css";

const CompanyAdvantages = () => {
  return (
    <div className={classes.companyAdvantages}>
      <div>
        <span>Гарантия от 50 лет</span> на материалы и 5лет на монтаж
      </div>
      <div>
        <span>Замер, монтажныйпроект</span> и еще 4 услуги бесплатно{" "}
      </div>
      <div>Сметы точны до копейки</div>
      <div>Поэтапная оплата, кредит или рассрочка </div>
      <div>Наши крыши в каждом поселке и дачном сообществе региона </div>
    </div>
  );
};

export default CompanyAdvantages;
