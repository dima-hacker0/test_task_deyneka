import { CHANGE_POPAP_STATE } from "../types";

export const mainReducerCreator = (popapIsOpen) => {
  return {
    type: CHANGE_POPAP_STATE,
    payload: popapIsOpen,
  };
};
