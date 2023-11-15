import ReorderIcon from "@mui/icons-material/Reorder";
import { IconButton, Avatar } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import SettingsIcon from "@mui/icons-material/Settings";
import AppsIcon from "@mui/icons-material/Apps";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header_left">
        <IconButton>
          <ReorderIcon />
        </IconButton>
        <img
          src="https://freelogopng.com/images/all_img/1682570982gmail-name-logo.png"
          alt="Gmail Logo"
          height="30"
          width="100"
        />
      </div>
      <div className="header_middle">
        <div className="search_mail">
          <IconButton>
            <SearchIcon />
          </IconButton>
          <input type="text" placeholder="Search mail" />
          <IconButton>
            <KeyboardArrowDownIcon />
          </IconButton>
        </div>
      </div>

      <div className="header_right">
        <IconButton>
          <HelpOutlineIcon />
        </IconButton>
        <IconButton>
          <SettingsIcon />
        </IconButton>
        <IconButton>
          <AppsIcon />
        </IconButton>
        <Avatar
          src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg9XrqbVocBbrLpYpv7KNhaqfRMzJIpWjSzueEyjIF4IJ00usLS_F3OJxBNRg3shTRhpjQ1ViT4653isW57pJXUuwl4Pg-i1BFD5GpqLEZQiqVP3Oj-LBOOY-VuG8OvX5xbl7xB3nfIjqdByRQCRAdstoPCH7m6KNreigCvta6ehA9uXGxj0Qq5h3mH/s736/marin%201st.jpg"
          height="30"
          width="30"
        ></Avatar>
      </div>
    </div>
  );
};

export default Header;
