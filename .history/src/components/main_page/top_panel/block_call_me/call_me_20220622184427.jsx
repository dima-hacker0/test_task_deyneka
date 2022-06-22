import classes from "./call_me.module.css";

const CallMe = () => {
  return (
    <div className={classes.callMeBlock}>
      <p className={classes.workingHours}>
        Пн-Пт 9:00 - 18:00, Сб 10:00 - 18:00
      </p>
      <p className={classes.number}>8 (800) 222-54-60</p>
      <p>Позвоните мне</p>
    </div>
  );
};

export default CallMe;
