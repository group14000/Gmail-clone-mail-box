import React, { useEffect, useState } from "react";
import "./Inbox.css";
import { Button, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchEmailsPeriodically, selectAllEmails } from "../Store/emailSlice";
import { Link } from "react-router-dom";
import BlueTick from "./blueTick";
import useDeleteRequest from "../Custom-hooks/useDelete.js";

const EmailList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userEmail = localStorage.getItem("userEmail");

  const { deleteResource, isDeleting } = useDeleteRequest(); 


  const backHandler = () => {
    navigate("/MainPage");
  };

  useEffect(() => {
    dispatch(fetchEmailsPeriodically());
  }, [dispatch]);

  const emails = useSelector(selectAllEmails);

  const [unreadCount, setUnreadCount] = useState(0);

  const filteredEmails = emails.filter(
    (email) => email.recipient === userEmail
  );

  const markEmailAsUnread = (emailId) => {
    fetch(
      `https://mail-box-7ffa4-default-rtdb.firebaseio.com/email/${emailId}.json`
    )
      .then((response) => response.json())
      .then((emailData) => {
        emailData.blueTick = false;

        fetch(
          `https://mail-box-7ffa4-default-rtdb.firebaseio.com/email/${emailId}.json`,
          {
            method: "PUT",
            body: JSON.stringify(emailData),
            headers: {
              "Content-type": "application/json",
            },
          }
        )
          .then((response) => response.json())
          .then((data) => {
            console.log("Email marked as unread in Firebase");
          })
          .catch((error) => {
            console.error("Error marking email as unread in Firebase:", error);
          });
      })
      .catch((error) => {
        console.error("Error fetching email data:", error);
      });
  };


  const deleteEmail = (emailId) => {
    deleteResource(`https://mail-box-7ffa4-default-rtdb.firebaseio.com/email/${emailId}.json`)
      .then((data) => {
        console.log('Email deleted from Firebase');
        dispatch({ type: 'email/deleteEmail', payload: emailId });
      })
      .catch((error) => {
        console.error('Error deleting email:', error);
      });
  };

  const countUnreadMessages = () => {
    const count = filteredEmails.filter((email) => email.blueTick).length;
    setUnreadCount(count);
  };

  useEffect(() => {
    countUnreadMessages();
  }, [filteredEmails]);

  return (
<div className="inbox-main min-h-screen flex flex-col lg:flex-row">
  <div className="lg:w-1/4 bg-gray-200 p-4">
    <div className="mb-4">
      <div className="text-lg font-bold text-gray-800">
        Welcome to your mailbox
      </div>
      <Button className="compose-btn mt-2" onClick={backHandler}>
        Back
      </Button>
    </div>
  </div>

  <div className="lg:w-3/4 p-4">
    <h2 className="text-2xl font-bold mb-4">Emails</h2>
    <div className="mb-4 text-gray-600">Unread: {unreadCount}</div>
    <ul className="email-list">
      {filteredEmails.length > 0 ? (
        filteredEmails.map((email) => (
          <div key={email.id} className="email-item border-b border-gray-300 py-2">
            <Button
              variant="outline-danger"
              className="mr-2"
              onClick={() => deleteEmail(email.id)}
            >
              <Image
                src="https://cdn4.iconfinder.com/data/icons/round-buttons/512/blue_x.png"
                alt="Delete"
                style={{ width: "25px", height: "25px" }}
              />
            </Button>
            <Link to={`/emails/${email.id}`} className="text-blue-500">
              <li
                className={`email-item cursor-pointer ${
                  email.blueTick ? "text-blue-500" : "text-gray-800"
                }`}
                onClick={() => markEmailAsUnread(email.id)}
              >
                {email.blueTick && <BlueTick />}
                <strong className="mr-1">Sender:</strong> {email.sender}
                <strong className="ml-4">Subject:</strong> {email.subject}
              </li>
            </Link>
          </div>
        ))
      ) : (
        <p className="no-emails-message">No emails to display.</p>
      )}
    </ul>
  </div>
</div>

  );
};

export default EmailList;
