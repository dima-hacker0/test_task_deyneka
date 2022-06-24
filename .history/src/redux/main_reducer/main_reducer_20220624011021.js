import { CHANGE_POPAP_ADVANTAGES_STATE, CHANGE_POPAP_STATE } from "../types";

const initialState = {
  popapIsOpen: false,
  popapAdvantagesIsOpen: false,
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_POPAP_STATE:
      return { ...state, popapIsOpen: action.payload };
    case CHANGE_POPAP_ADVANTAGES_STATE:
      return { ...state, popapAdvantagesIsOpen: action.payload };
    default:
      return state;
  }
};

export default mainReducer;
