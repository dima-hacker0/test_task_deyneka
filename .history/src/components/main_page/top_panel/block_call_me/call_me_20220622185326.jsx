import classes from "./call_me.module.css";

const CallMe = () => {
  return (
    <div className={classes.callMeBlock}>
      <p className={classes.workingHours}>
        <span>Пн-Пт</span> 9:00 - 18:00, <span>Сб</span> 10:00 - 18:00
      </p>
      <p className={classes.number}>8 (800) 222-54-60</p>
      <span className={classes.callMeText}>Позвоните мне</span>
    </div>
  );
};

export default CallMe;
