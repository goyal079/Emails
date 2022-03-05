import React from "react";
import "./Emailitem.css";
const EmailItem = () => {
  const mail = {
    id: "1",
    from: {
      email: "bounced@flipkart.com",
      name: "bounced",
    },
    date: 1582729505000,
    subject: "Lorem Ipsum",
    short_description:
      "Vestibulum sit amet ipsum aliquet, lacinia nulla malesuada, ullamcorper massa",
  };
  const date = new Date(mail.date);
  const mailDate = {
    date: date.getDate(),
    month: `${date.getMonth() + 1}`.padStart(2, 0),
    year: date.getFullYear(),
  };
  return (
    <div className="mail-card">
      <div className="mail-avatar">
        <div className="avatar-text">
          <span>A</span>
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
        <p>{mail.short_description}....</p>
        <p>
          {mailDate.date}/{mailDate.month}/{mailDate.year} 10:30 am
        </p>
      </div>
    </div>
  );
};

export default EmailItem;
