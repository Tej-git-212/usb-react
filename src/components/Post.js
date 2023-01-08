import React from "react";
import "./styles/Post.css";
import IconBox from "./IconBox";

function Post(props) {
  return (
    <div className="post-box box">
      <div className="post-head h">
        <img src={props.profileUrl} alt="p" className="profile-pic" />
        <div className="post-head-text">
          <b>{props.userName}</b>
          <p>{props.time}</p>
        </div>
      </div>
      <div className="post-content">
        <p>{props.content[0]}</p>
        <br />
        <p>{props.content[1]}</p>
      </div>
      <div className="post-image">
        {props.imageUrl.length > 0 ? <img src={props.imageUrl} alt="" /> : ""}
      </div>
      <IconBox text={props.text} />
    </div>
  );
}

export default Post;
