// Compose.js
import React, { useState, useEffect } from "react";
import "./Compose.css";
import RemoveIcon from "@mui/icons-material/Remove";
import HeightIcon from "@mui/icons-material/Height";
import CloseIcon from "@mui/icons-material/Close";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import FormatColorTextIcon from "@mui/icons-material/FormatColorText";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import LinkIcon from "@mui/icons-material/Link";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import PhotoIcon from "@mui/icons-material/Photo";
import PhonelinkIcon from "@mui/icons-material/Phonelink";
import CreateIcon from "@mui/icons-material/Create";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "./features/mailSlice";
import { db, firebase } from "./firebase";
import { Button } from "@mui/material";

function Compose() {
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (emailSent) {
      handleCloseCompose();
    }
  }, [emailSent]);

  const handleCloseCompose = () => {
    dispatch(closeSendMessage());
  };

  const formSubmit = async (e) => {
    e.preventDefault();

    if (to === "") {
      return alert("To is required");
    }
    if (subject === "") {
      return alert("Subject is required");
    }
    if (message === "") {
      return alert("Message is required");
    }

    try {
      const timestamp = firebase.firestore.FieldValue.serverTimestamp();

      await db.collection("emails").add({
        to: to,
        subject: subject,
        message: message,
        timestamp: timestamp,
      });

      setEmailSent(true);
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Error sending email. Please try again.");
    }
  };

  return (
    <div className="compose">
      <div className="compose_header">
        <div className="compose_header_left">
          <span>New Message</span>
        </div>
        <div className="compose_header_right">
          <RemoveIcon />
          <HeightIcon />
          <CloseIcon onClick={handleCloseCompose} />
        </div>
      </div>
      <form onSubmit={formSubmit}>
        <div className="compose_body">
          <div className="compose_bodyForm">
            <input
              type="email"
              placeholder="Recipients"
              value={to}
              onChange={(e) => setTo(e.target.value)}
            />
            <input
              type="text"
              placeholder="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            <textarea
              rows="20"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
        </div>
        <div className="compose_footer">
          <div className="compose_footer_left">
            <Button type="submit">
              {emailSent ? "Email Sent" : "Send"} <ArrowDropDownIcon />
            </Button>
          </div>
          <div className="compose_footer_right">
            <FormatColorTextIcon />
            <AttachFileIcon />
            <LinkIcon />
            <InsertEmoticonIcon />
            <NoteAddIcon />
            <PhotoIcon />
            <PhonelinkIcon />
            <CreateIcon />
            <MoreVertIcon />
            <DeleteIcon />
          </div>
        </div>
      </form>
    </div>
  );
}

export default Compose;
