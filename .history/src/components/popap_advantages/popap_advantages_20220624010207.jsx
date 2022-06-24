import Navigation from "../../repeat_components/navigation/navigation";
import classes from "./popap_advantages.module.css";
import { connect } from "react-redux";

const PopapAdvantages = (props) => {
  debugger;
  return (
    <div
      className={
        popapAdvantagesIsOpen
          ? classes.background
          : `${classes.background} ${classes.hide}`
      }
    >
      <label className={classes.navigation}>
        <Navigation />
      </label>
    </div>
  );
};

const mapStateToProps = (state) => {
  return state.mainPage.popapAdvantagesIsOpen;
};

export default connect(mapStateToProps)(PopapAdvantages);
