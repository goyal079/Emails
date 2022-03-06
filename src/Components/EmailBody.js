import React from "react";
import "./EmailBody.css";
import { formatDate } from "../helpers";
const EmailBody = ({ mail, mailBody }) => {
  return (
    <div className="body">
      <div className="body-avatar">
        <div className="body-avatar-text">
          <span>{mail.from.name.charAt(0).toUpperCase()}</span>
        </div>
      </div>
      <div className="body-mail-info">
        <div className="body-header">
          <h2>{mail.subject}</h2>
          <button>Mark as favorite</button>
        </div>
        <div className="body-date">{formatDate(mail.date)}</div>
        <p className="body-content">
          {mailBody.replace(/<\/?[^>]+(>|$)/g, "")}
        </p>
      </div>
    </div>
  );
};

export default EmailBody;
