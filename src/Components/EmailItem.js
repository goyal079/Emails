import React from "react";
import "./Emailitem.css";
import { formatDate } from "../helpers";
const EmailItem = ({ mail }) => {
  const recieved = formatDate(mail.date);
  return (
    <div
      className="mail-card"
      style={{ backgroundColor: mail.read ? "f2f2f2" : "white" }}
    >
      <div className="mail-avatar">
        <div className="avatar-text">
          <span>{mail.from.name.charAt(0).toUpperCase()}</span>
        </div>
      </div>
      <div className="mail-info">
        <p>
          From:{" "}
          <b>
            {mail.from.name} {`<${mail.from.email}>`}{" "}
          </b>
        </p>
        <p>
          Subject: <b>{mail.subject}</b>
        </p>
        <p>{mail.short_description.substr(0, 50)}....</p>
        <p>{recieved}</p>
      </div>
    </div>
  );
};

export default EmailItem;
