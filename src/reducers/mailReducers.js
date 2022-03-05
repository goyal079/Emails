import {
  MAIL_LIST_FAILED,
  MAIL_LIST_SUCCESS,
  MAIL_LIST_REQUEST,
  REMOVE_ERROR,
} from "../types";

export const mailListReducer = (state = [], action) => {
  switch (action.type) {
    case MAIL_LIST_REQUEST:
      return { loading: true };
    case MAIL_LIST_SUCCESS:
      return { loading: false, mailList: action.payload };
    case MAIL_LIST_FAILED:
      return { loading: false, error: action.payload };
    case REMOVE_ERROR:
      return { ...state, error: null };
    default:
      return state;
  }
};
