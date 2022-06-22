import classes from "./answer.module.css";

const Answer = () => {
  return (
    <div className={classes.answerOnline}>
      <p className={classes.answerText}>
        Отвечаем <span style={{ fontWeight: 600 }}>онлайн</span>
      </p>
    </div>
  );
};

export default Answer;
