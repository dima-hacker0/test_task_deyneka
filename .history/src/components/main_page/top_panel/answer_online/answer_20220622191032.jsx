import Svg from "../../../../svg/svg";
import classes from "./answer.module.css";

const Answer = () => {
  return (
    <div className={classes.answerOnline}>
      <p className={classes.answerText}>
        Отвечаем <span style={{ fontWeight: 600 }}>онлайн</span>
      </p>
      <div className={classes.socialMedia}>
        <a className={classes.socialMedia__item} href="/">
          <Svg id="viber" styles={classes.icon} />
        </a>
        <a className={classes.socialMedia__item} href="/">
          <Svg id="whatsup" styles={classes.icon} />
        </a>
        <a className={classes.socialMedia__item} href="/">
          <Svg id="telegram" styles={classes.icon} />
        </a>
      </div>
    </div>
  );
};

export default Answer;
