import React from "react";
import "./EmailList.css";
import EmailListSetting from "./EmailListSetting";
import EmailType from "./EmailType";
import EmailBody from "./EmailBody";

function EmailList() {
  return (
    <div className="emailist">
      <EmailListSetting />
      <EmailType />
      <EmailBody
        name="Digonta Halder"
        subject="This is subject"
        message="We are learning react js"
        time="3:30 Pm"
      />
    </div>
  );
}

export default EmailList;
