import { CHANGE_POPAP_ADVANTAGES_STATE, CHANGE_POPAP_STATE } from "../types";

export const changeStatePopapCreator = (popapIsOpen) => {
  return {
    type: CHANGE_POPAP_STATE,
    payload: popapIsOpen,
  };
};

export const changeStatePopapAdvantagesCreator = (popapIsOpen) => {
  return {
    type: CHANGE_POPAP_ADVANTAGES_STATE,
    payload: popapIsOpen,
  };
};
