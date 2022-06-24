import Navigation from "../../repeat_components/navigation/navigation";
import classes from "./popap_advantages.module.css";
import { connect } from "react-redux";

const PopapAdvantages = ({ popapAdvantagesIsOpen }) => {
  debugger;
  return (
    <div>
      <label className={classes.navigation}>
        <Navigation />
      </label>
    </div>
  );
};

const mapStateToProps = (state) => {
  debugger;
  return state.mainPage;
};

export default connect(mapStateToProps)(PopapAdvantages);
