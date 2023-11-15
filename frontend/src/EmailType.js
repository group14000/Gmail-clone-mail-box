import React from "react";
import InboxIcon from "@mui/icons-material/Inbox";
import PeopleIcon from "@mui/icons-material/People";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import "./EmailList.css";

function EmailType() {
  return (
    <div className="emailtype">
      <div className="emailtype_options emailtype_options--active">
        <InboxIcon />
        <p>Primary</p>
      </div>
      <div className="emailtype_options">
        <PeopleIcon />
        <p>Social</p>
      </div>
      <div className="emailtype_options">
        <LocalOfferIcon />
        <p>Promotions</p>
      </div>
    </div>
  );
}

export default EmailType;
