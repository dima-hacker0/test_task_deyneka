import Svg from "../../svg/svg";
import classes from "./popap.module.css";
import InputMask from "react-input-mask";
import React, { useState } from "react";
import { connect } from "react-redux";
import { changeStatePopapCreator } from "../../redux/main_reducer/main_reducer_creator";

const Popap = ({ dispatch, mainPage: { popapIsOpen } }) => {
  const checkBox = React.createRef();

  const [activeChecbox, setCheckBox] = useState(false);
  const [showAcceptConditions, setShowAcceptConditions] = useState(false);
  const [visibleApplicationSened, setVisibleApplicationSened] = useState(false);

  const submitForm = (event) => {
    event.preventDefault();
    if (!checkBox.current.checked) {
      setShowAcceptConditions(true);
      return;
    }
    setVisibleApplicationSened(true);
    setTimeout(() => {
      setVisibleApplicationSened(false);
    }, 2000);
  };

  const clickCheckBox = () => {
    if (checkBox.current.checked) {
      setCheckBox(false);
    } else {
      setShowAcceptConditions(false);
      setCheckBox(true);
    }
  };

  const clickBackground = (e) => {
    console.log(e.target);
  };

  return (
    <div
      onClick={clickBackground}
      className={
        popapIsOpen
          ? classes.background
          : `${classes.background} ${classes.hideElement}`
      }
    >
      <div className={classes.popap}>
        <div className={classes.container}>
          <p className={classes.submitApplicationText}>
            Быстро
            <br /> оставить заявку
          </p>
          <p className={classes.enterNumber}>
            Введите номер, мы позвоним вам в<br /> течение 10 минут в рабочее
            время
          </p>
          <p className={classes.workingHours}>
            Пн–Пт 9:00 - 18:00, Сб 10:00 - 18:00
          </p>

          <form onSubmit={submitForm}>
            <div className={classes.inputBlock}>
              <p className={classes.enterNumberInput}>Введите номер телефона</p>
              <InputMask
                className={classes.input}
                alwaysShowMask="true"
                mask="+7(999)99-99-99"
              />
            </div>
            <button type="submit" className={classes.buttonCallMe}>
              <p className={classes.buttonCallMe__text}>Позвоните мне</p>
              <Svg id="arrow" styles={classes.arrow}></Svg>
            </button>
            <div className={classes.checkBoxBlock}>
              <label
                onClick={clickCheckBox}
                className={classes.checkBoxLabel}
                htmlFor="checkbox"
              >
                <div
                  className={
                    activeChecbox
                      ? classes.customCheckboxActive
                      : classes.customCheckBoxInactive
                  }
                >
                  {activeChecbox ? (
                    <Svg id="check-mark" styles={classes.checkMark} />
                  ) : null}
                </div>
              </label>
              <div className={classes.acceptConditionsBlock}>
                <p className={classes.acceptConditions}>
                  Нажимая кнопку вы соглашаетесь с условиями
                  <br />{" "}
                  <span style={{ color: "#F38120" }}>
                    Политики конфиденциальности
                  </span>
                </p>
                {showAcceptConditions ? (
                  <p className={classes.warningTitle}>
                    Для начала примите условия
                  </p>
                ) : null}
              </div>
            </div>
            <input
              style={{ display: "none" }}
              ref={checkBox}
              id="checkbox"
              type="checkbox"
            />
          </form>
        </div>
        <div
          className={
            visibleApplicationSened
              ? `${classes.applicationSended} ${classes.showElement}`
              : classes.applicationSended
          }
        >
          <Svg styles={classes.greenCheckMark} id="green-check-mark" />
          <p>Заявка отправлена</p>
        </div>
        <label
          onClick={() => {
            dispatch(changeStatePopapCreator(false));
          }}
        >
          <Svg styles={classes.cross} id="cross" />
        </label>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, null)(Popap);
