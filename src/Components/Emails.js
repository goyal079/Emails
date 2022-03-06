import React, { useEffect, useState } from "react";
import "./Emails.css";
import EmailItem from "./EmailItem";
import { useDispatch, useSelector } from "react-redux";
import { getMailBody, listMails, readMail } from "../actions/mailActions";
import EmailBody from "./EmailBody";
import Loading from "./Loading";
const Emails = () => {
  const [page, setPage] = useState(1);
  const [currentMail, setCurrentMail] = useState({});
  const dispatch = useDispatch();
  const { error, loading, mailList } = useSelector((state) => state.mails);
  const { mailBody, loading: bodyLoading } = useSelector(
    (state) => state.activeMail
  );

  const openMail = (id) => {
    dispatch(getMailBody(id));
    dispatch(readMail(id));
  };

  useEffect(() => {
    dispatch(listMails(page));
  }, [dispatch]);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <header>
            <p style={{ margin: "0 25px 0 0", fontWeight: "500" }}>
              Filter By:
            </p>
            <p className="filters">Unread</p>
            <p className="filters">Read</p>
            <p className="filters">Favorite</p>
          </header>
          <div style={{ padding: "10px", display: "flex" }}>
            {/* {list.length < 1 && (
              <p style={{ color: "#e54065", fontWeight: "500" }}>
                No Mails found
              </p>
            )} */}
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
            {mailBody && (
              <EmailBody
                mail={currentMail}
                mailBody={mailBody}
                loading={bodyLoading}
              />
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Emails;
