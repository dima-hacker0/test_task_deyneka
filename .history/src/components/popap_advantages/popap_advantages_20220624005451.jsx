import Navigation from "../../repeat_components/navigation/navigation";
import classes from "./popap_advantages.module.css";
import { connect } from "react-redux";
const PopapAdvantages = () => {
  return (
    <div className={classes.background}>
      <label className={classes.navigation}>
        <Navigation />
      </label>
    </div>
  );
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(PopapAdvantages);
