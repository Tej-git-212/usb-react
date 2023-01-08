import React from "react";
import "./styles/IconBox.css";
import { pink } from "@mui/material/colors";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";

function IconBox(props) {
  return (
    <div className="icon-box h">
      <div className="h">
        <FavoriteIcon
          className="icon"
          sx={{
            color: pink[500]
          }}
        />
        <b>{props.text[0]}</b>
      </div>
      <div className="icon h">
        <ChatOutlinedIcon className="icon" />
        <b>{props.text[1]}</b>
      </div>
      <div className="icon h">
        <SendOutlinedIcon className="icon" />
        <b>{props.text[2]}</b>
      </div>
      <div className="icon h">
        <BookmarkBorderOutlinedIcon className="icon" />
        <b>{props.text[3]}</b>
      </div>
    </div>
  );
}

export default IconBox;
