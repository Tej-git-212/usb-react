import React from "react";
import "./styles/UploadPost.css";
import WallpaperIcon from '@mui/icons-material/Wallpaper';

function UploadPost(props) {
  return (
    <div className="upload-post box">
      <div className="upload-row1 h">
        <img src={props.url} alt="" className="profile-pic"/>
        <input type="text" placeholder="Ask questions..."/>
      </div>
      <div className="upload-row2 h">
        <div className="h">
          <WallpaperIcon className="icon" fontSize="small"/>
          <b>Upload photo</b>
        </div>
        <div className="h">
          <button className="btn light-btn">Cancel</button>
          <button className="btn dark-btn">Post</button>
        </div>
      </div>
    </div>
  );
}

export default UploadPost;
