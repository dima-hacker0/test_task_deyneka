import Navigation from "../../repeat_components/navigation/navigation";
import classes from "./popap_advantages.module.css";
import { connect } from "react-redux";
import CompanyAdvantages from "../main_page/company_advantages/company_advantages";

const PopapAdvantages = ({ popapAdvantagesIsOpen }) => {
  return (
    <div>
      <label className={classes.navigation}>
        <CompanyAdvantages />
      </label>
    </div>
  );
};

const mapStateToProps = (state) => {
  return state.mainPage;
};

export default connect(mapStateToProps)(PopapAdvantages);
