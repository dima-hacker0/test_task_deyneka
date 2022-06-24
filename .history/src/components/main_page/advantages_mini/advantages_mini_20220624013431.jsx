import classes from "./advantages_mini.module.css";
import Svg from "../../../svg/svg";
import { connect } from "react-redux";
import { changeStatePopapAdvantagesCreator } from "../../../redux/main_reducer/main_reducer_creator";
const AdvantagesMini = ({ dispatch }) => {
  return (
    <div className={classes.companyAdvantages}>
      <div
        style={{ position: "relative" }}
        className={classes.showAllAdvantagesBlock}
      >
        <p className={classes.item}>
          <span className={classes.highlightedItems}>
            Гарантия от 50 лет <br />
          </span>
          на материалы и 5 <br />
          лет на монтаж
          <span className={classes.titleClickPlus}>
            <br />
            Нажмите на плюсик, чтобы увидеть все преимущества работы с нами
          </span>
        </p>
        <button
          onClick={() => {
            dispatch(changeStatePopapAdvantagesCreator(true));
          }}
          className={classes.showAlladvantagesButton}
        >
          <Svg id="plus" styles={classes.plusSvg} />
        </button>
      </div>
    </div>
  );
};

export default connect()(AdvantagesMini);
