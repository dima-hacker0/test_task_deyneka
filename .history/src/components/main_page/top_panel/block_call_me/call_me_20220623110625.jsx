import classes from "./call_me.module.css";

const CallMe = () => {
  const callMe = () => {
    console.log(5);
  };
  return (
    <div className={classes.callMeBlock}>
      <p className={classes.workingHours}>
        <span style={{ fontWeight: 800 }}>Пн-Пт</span> 9:00 - 18:00,{" "}
        <span style={{ fontWeight: 800 }}>Сб</span> 10:00 - 18:00
      </p>
      <p className={classes.number}>8 (800) 222-54-60</p>
      <span onClick={callMe} className={classes.callMeText}>
        Позвоните мне
      </span>
    </div>
  );
};

export default CallMe;
