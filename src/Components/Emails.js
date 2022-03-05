import React, { useEffect, useState } from "react";
import "./Emails.css";
import EmailItem from "./EmailItem";
import { useDispatch, useSelector } from "react-redux";
import { listMails } from "../actions/mailActions";
const Emails = () => {
  //   const [page, setPage] = useState(1);
  const dispatch = useDispatch();
    const { error, loading, mailList } = useSelector((state) => state.mails);
  useEffect(() => {
    dispatch(listMails(1));
  }, [dispatch]);
  return (
    <div>
      <EmailItem />
      <EmailItem />
      <EmailItem />
      <EmailItem />
    </div>
  );
};

export default Emails;
