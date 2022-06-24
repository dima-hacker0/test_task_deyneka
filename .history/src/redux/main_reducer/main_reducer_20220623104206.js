import { CHANGE_POPAP_STATE } from "../types";

const initialState = {
  popapIsOpen: false,
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_POPAP_STATE:
      break;

    default:
      break;
  }
};

export default mainReducer;
