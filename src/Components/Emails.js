import React, { useEffect, useState } from "react";
import "./Emails.css";
import EmailItem from "./EmailItem";
import { useDispatch, useSelector } from "react-redux";
import {
  getMailBody,
  listMails,
  readMail,
  getAllMails,
} from "../actions/mailActions";
import EmailBody from "./EmailBody";
import Loading from "./Loading";
import { filterStyle } from "../helpers";
const Emails = () => {
  const [page, setPage] = useState(1);
  const [currentMail, setCurrentMail] = useState({});
  const [filter, setFilter] = useState("");
  const [list, setList] = useState([]);
  const dispatch = useDispatch();
  const { loading, mailList } = useSelector((state) => state.mails);
  const [allMails, setAllMails] = useState([]);
  const { mailBody, loading: bodyLoading } = useSelector(
    (state) => state.activeMail
  );
  const openMail = (id) => {
    dispatch(getMailBody(id));
    dispatch(readMail(id));
  };
  const readList = () => {
    const alreadyRead = localStorage.getItem("readMails")
      ? JSON.parse(localStorage.getItem("readMails"))
      : [];
    setList(alreadyRead);
    setFilter("read");
  };
  const unreadList = () => {
    const newList = mailList.filter((mail) => !mail.read);
    setList(newList);
    setFilter("unread");
  };
  const favoriteList = () => {
    const alreadyFavorites = localStorage.getItem("favoriteMails")
      ? JSON.parse(localStorage.getItem("favoriteMails"))
      : [];
    setList(alreadyFavorites);
    setFilter("favorite");
  };
  const nextPage = () => {
    dispatch(listMails(page + 1));
    setPage(page + 1);
  };
  const prevPage = () => {
    dispatch(listMails(page - 1));
    setPage(page - 1);
  };
  useEffect(async () => {
    dispatch(listMails(page));
    const all = await getAllMails();
    setAllMails(all);
  }, []);
  useEffect(() => {
    setList(mailList);
  }, [mailList]);
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
            <p
              className="filters"
              onClick={unreadList}
              style={filter == "unread" ? filterStyle : {}}
            >
              Unread
            </p>
            <p
              className="filters"
              onClick={readList}
              style={filter == "read" ? filterStyle : {}}
            >
              Read
            </p>
            <p
              className="filters"
              onClick={favoriteList}
              style={filter == "favorite" ? filterStyle : {}}
            >
              Favorite
            </p>
          </header>
          <div className="empty-list">
            {list.length < 1 && <p>No Mails found</p>}
            <div className="mail-list">
              {mailList &&
                list.map((mail) => (
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
              <div style={{ fontWeight: "500" }}>
                <button
                  className="page-buttons"
                  disabled={page <= 1}
                  onClick={prevPage}
                >
                  {"<"}
                </button>

                <span>{page}</span>

                <button
                  className="page-buttons"
                  disabled={allMails.length < page * 10}
                  onClick={nextPage}
                >
                  {">"}
                </button>
              </div>
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
