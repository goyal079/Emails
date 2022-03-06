import React, { useEffect, useState } from "react";
import "./Emails.css";
import EmailItem from "./EmailItem";
import { useDispatch, useSelector } from "react-redux";
import { getMailBody, listMails } from "../actions/mailActions";
import EmailBody from "./EmailBody";
const Emails = () => {
  const [page, setPage] = useState(1);
  const [currentMail, setCurrentMail] = useState({});
  const dispatch = useDispatch();
  const { error, loading, mailList } = useSelector((state) => state.mails);
  const { mailBody } = useSelector((state) => state.activeMail);
  useEffect(() => {
    dispatch(listMails(page));
  }, [dispatch]);
  const openMail = (id) => {
    dispatch(getMailBody(id));
  };
  return (
    <div style={{ padding: "13px", display: "flex" }}>
      <div className="mail-list">
        {mailList &&
          mailList.map((mail) => (
            <div
              key={mail.id}
              onClick={() => {
                mail.read = true;
                openMail(mail.id);
                setCurrentMail(mail);
              }}
            >
              <EmailItem mail={mail} />
            </div>
          ))}
      </div>
      {mailBody && <EmailBody mail={currentMail} mailBody={mailBody} />}
    </div>
  );
};

export default Emails;
