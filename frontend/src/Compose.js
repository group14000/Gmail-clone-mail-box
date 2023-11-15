import React from "react";
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

function Compose() {
  return (
    <div className="compose">
      <div className="compose_header">
        <div className="compose_header_left">
          <span>New Message</span>
        </div>
        <div className="compose_header_right">
          <RemoveIcon />
          <HeightIcon />
          <CloseIcon />
        </div>
      </div>
      <div className="compose_body">
        <div className="compose_bodyForm">
          <input type="email" placeholder="Recipients" />
          <input type="text" placeholder="Subject" />
          <textarea rows="20"></textarea>
        </div>
      </div>
      <div className="compose_footer">
        <div className="compose_footer_left">
          <button type="submit">
            send <ArrowDropDownIcon />
          </button>
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
    </div>
  );
}

export default Compose;
