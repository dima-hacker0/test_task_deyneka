import Svg from "../../../../svg/svg";
import classes from "./answer.module.css";

const Answer = () => {
  return (
    <div className={classes.answerOnline}>
      <p className={classes.answerText}>
        Отвечаем <span style={{ fontWeight: 600 }}>онлайн</span>
      </p>
      <div className={classes.socialMedia}>
        <a href="">
          <Svg id="viber" />
        </a>
        <a href="">
          <Svg id="whatsup" />
        </a>
        <a href=""></a>
      </div>
    </div>
  );
};

export default Answer;
