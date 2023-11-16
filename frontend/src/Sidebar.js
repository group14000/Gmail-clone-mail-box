import "./Sidebar.css";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import SidebarOption from "./SidebarOption";
import InboxIcon from "@mui/icons-material/Inbox";
import StarRateIcon from "@mui/icons-material/StarRate";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import SendIcon from "@mui/icons-material/Send";
import DraftsIcon from "@mui/icons-material/Drafts";
import LabelIcon from "@mui/icons-material/Label";
import DeleteIcon from "@mui/icons-material/Delete";
import FindInPageIcon from "@mui/icons-material/FindInPage";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import VideocamIcon from "@mui/icons-material/Videocam";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import {useDispatch} from "react-redux";
import {openSendMessage} from "./features/mailSlice";
function Sidebar() {

  const dispatch = useDispatch();
  return (
    <div className="sidebar">
      <Button startIcon={<AddIcon />} className="compose__btn" onClick={()=>dispatch(openSendMessage())}>
        Compose
      </Button>
      <SidebarOption
        Icon={InboxIcon}
        title="Inbox"
        number="224"
        isactive={true}
      />
      <SidebarOption Icon={StarRateIcon} title={"Starred"} number={500} />
      <SidebarOption Icon={WatchLaterIcon} title={"Snoozed"} number={"200"} />
      <SidebarOption
        Icon={LabelImportantIcon}
        title={"Important"}
        number="224"
      />
      <SidebarOption Icon={SendIcon} title="Sent" number="224" />
      <SidebarOption Icon={DraftsIcon} title="Drafts" number="224" />
      <SidebarOption Icon={LabelIcon} title={"Category"} number={"200"} />
      <SidebarOption Icon={DeleteIcon} title={"[Map]/Trash"} number={"324"} />
      <SidebarOption Icon={FindInPageIcon} title={"Documents"} number={"254"} />
      <SidebarOption Icon={ExpandMoreIcon} title={"More"} number={"200"} />
      <hr />
      <h3 className="sidebaroptions_heading">Meet</h3>
      <SidebarOption Icon={VideocamIcon} title={"New Meeting"} />
      <SidebarOption Icon={KeyboardIcon} title={"Join a meeting"} />
    </div>
  );
}

export default Sidebar;
