import axios from "axios";
import {
  MAIL_LIST_FAILED,
  MAIL_LIST_SUCCESS,
  MAIL_LIST_REQUEST,
  MAIL_BODY_FAILED,
  MAIL_BODY_SUCCESS,
  MAIL_BODY_REQUEST,
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

export const getMailBody = (id) => async (dispatch) => {
  try {
    dispatch({ type: MAIL_BODY_REQUEST });
    const { data } = await axios.get(
      `https://flipkart-email-mock.vercel.app/?id=${id}`
    );
    dispatch({
      type: MAIL_BODY_SUCCESS,
      payload: data.body,
    });
  } catch (error) {
    dispatch({
      type: MAIL_BODY_FAILED,
      payload: error.response.data.error.message,
    });
    setTimeout(() => {
      dispatch({
        type: REMOVE_ERROR,
      });
    }, 7000);
  }
};

export const readMail = (id) => (dispatch, getState) => {
  let mails = getState().mails.mailList;
  const newList = mails.map((mail) => {
    if (mail.id == id) {
      mail.read = true;
    }
    return mail;
  });
  dispatch({
    type: MAIL_LIST_SUCCESS,
    payload: newList,
  });
};

export const markFavorite = (id) => (dispatch, getState) => {
  dispatch({ type: MAIL_LIST_REQUEST });
  let mails = getState().mails.mailList;
  const newList = mails.map((mail) => {
    if (mail.id == id) {
      mail.favorite = true;
    }
    return mail;
  });
  dispatch({
    type: MAIL_LIST_SUCCESS,
    payload: newList,
  });
};

export const removeFavorite = (id) => (dispatch, getState) => {
  dispatch({ type: MAIL_LIST_REQUEST });
  let mails = getState().mails.mailList;
  const newList = mails.map((mail) => {
    if (mail.id == id) {
      mail.favorite = false;
    }
    return mail;
  });
  dispatch({
    type: MAIL_LIST_SUCCESS,
    payload: newList,
  });
};


