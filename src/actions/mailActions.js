import axios from "axios";
import {
  MAIL_LIST_FAILED,
  MAIL_LIST_SUCCESS,
  MAIL_LIST_REQUEST,
  REMOVE_ERROR,
} from "../types";

export const listMails = (page) => async (dispatch) => {
  try {
    dispatch({ type: MAIL_LIST_REQUEST });
    const { data } = await axios.get(
      `https://flipkart-email-mock.vercel.app/?page=${page}`
    );
    dispatch({
      type: MAIL_LIST_SUCCESS,
      payload: data.list,
    });
  } catch (error) {
    dispatch({
      type: MAIL_LIST_FAILED,
      payload: error.response.data.error.message,
    });
    setTimeout(() => {
      dispatch({
        type: REMOVE_ERROR,
      });
    }, 7000);
  }
};
