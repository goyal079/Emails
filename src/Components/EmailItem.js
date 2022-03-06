import React from "react";
import "./Emailitem.css";
import { formatDate } from "../helpers";
const EmailItem = ({ mail }) => {
  const recieved = formatDate(mail.date);
  const bg = mail.read
    ? { backgroundColor: "#f2f2f2" }
    : { backgroundColor: "white" };
  return (
    <div className="mail-card" style={bg}>
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
        <div className="mail-recieved">
          <p style={{ margin: "2px" }}>{recieved}</p>
          {mail.favorite && <p className="favorite">Favorite</p>}
        </div>
      </div>
    </div>
  );
};

export default EmailItem;
