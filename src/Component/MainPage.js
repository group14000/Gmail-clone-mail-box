import React from "react";
import "./MainPage.css";
import MyTextEditor from "./TextEditor";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { fetchEmails } from '../Store/emailSlice';
const userEmail = localStorage.getItem("userEmail");

const MainPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const inboxHandler = () => {
    navigate("/EmailList");
  };

  const logOutHandler = () => {
    localStorage.removeItem("userEmail");
    navigate("/");
  };
  const sentHanlder= () =>{
    navigate("/SentMail");
    dispatch(fetchEmails());
  }

  return (
    <div className="mainPage">
      <div className="navbar">
        <div className="mailbox-content">
         <span className = "font-bold text-center">Welcome to your Mailbox Client </span>
        </div>
    <br/>

        <Button className="inbox-btn" onClick={logOutHandler}>
          LogOut
        </Button>
        <Button className="inbox-btn" onClick={inboxHandler}>
          Inbox
        </Button>
        <Button className="inbox-btn" onClick={sentHanlder}>
          Sent
        </Button>
        
      </div>
      <div className="text-editor">
        <MyTextEditor />
      </div>
    </div>
  );
};

export default MainPage;
