import classes from "./popap_advantages.module.css";
import { connect } from "react-redux";
import CompanyAdvantages from "../main_page/company_advantages/company_advantages";

const PopapAdvantages = ({ popapAdvantagesIsOpen }) => {
  return (
    <div
      className={
        popapAdvantagesIsOpen
          ? classes.background
          : `${classes.background} ${classes.hide}`
      }
    >
      <label className={classes.labelAdvantages}>
        <CompanyAdvantages />
      </label>
    </div>
  );
};

const mapStateToProps = (state) => {
  return state.mainPage;
};

export default connect(mapStateToProps)(PopapAdvantages);
