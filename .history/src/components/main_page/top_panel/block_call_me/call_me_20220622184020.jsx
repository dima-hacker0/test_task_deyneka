import classes from "./call_me.module.css";

const CallMe = () => {
  return (
    <div className={classes.callMeBlock}>
      <p>Пн-Пт 9:00 - 18:00, Сб 10:00 - 18:00</p>
      <p></p>
    </div>
  );
};

export default CallMe;
