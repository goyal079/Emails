import React from "react";
import "./EmailBody.css";
import { formatDate } from "../helpers";
import { useDispatch } from "react-redux";
import { markFavorite, removeFavorite } from "../actions/mailActions";
import Loading from "./Loading";
const EmailBody = ({ mail, mailBody, loading }) => {
  const dispatch = useDispatch();
  const addToFavorites = () => {
    dispatch(markFavorite(mail.id));
  };
  const removeFromFavorites = () => {
    dispatch(removeFavorite(mail.id));
  };
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="body">
          <div className="body-avatar">
            <div className="body-avatar-text">
              <span>{mail.from.name.charAt(0).toUpperCase()}</span>
            </div>
          </div>
          <div className="body-mail-info">
            <div className="body-header">
              <h2>{mail.subject}</h2>
              <button
                onClick={mail.favorite ? removeFromFavorites : addToFavorites}
              >
                {mail.favorite ? "Remove favorite" : "Mark as Favorite"}
              </button>
            </div>
            <div className="body-date">{formatDate(mail.date)}</div>
            <p className="body-content">
              {mailBody.replace(/<\/?[^>]+(>|$)/g, "")}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default EmailBody;
