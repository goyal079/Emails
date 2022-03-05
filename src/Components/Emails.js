import React, { useEffect, useState } from "react";
import "./Emails.css";
import EmailItem from "./EmailItem";
import { useDispatch, useSelector } from "react-redux";
import { listMails } from "../actions/mailActions";
import EmailBody from "./EmailBody";
const Emails = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const { error, loading, mailList } = useSelector((state) => state.mails);
  useEffect(() => {
    dispatch(listMails(page));
  }, [dispatch]);
  return (
    <div style={{ padding: "13px", display: "flex" }}>
      <div className="mail-list">
        {mailList &&
          mailList.map((mail) => (
            <div key={mail.id}>
              <EmailItem mail={mail} />
            </div>
          ))}
      </div>
      <EmailBody />
    </div>
  );
};

export default Emails;
