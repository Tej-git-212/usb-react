import React from "react";
import "./styles/Home.css";
import UploadPost from "./UploadPost";
import Post from "./Post";
import Question from "./Question";
import { dummyText, dummyHash, questions, imageUrls } from "./dummy";

export default function Home() {
  return (
    <div className="home">
      <div className="left-content h v">
        <UploadPost url={imageUrls[0]}/>
        <Post
          key="1"
          profileUrl={imageUrls[1]}
          userName="St. John Smith"
          time="5 min"
          content={[dummyText, dummyHash]}
          imageUrl={imageUrls[2]}
          text={["100+ Likes", "Comment", "Share", "Save"]}
        />
        <Post
          key="2"
          profileUrl={imageUrls[3]}
          userName="Michel smith"
          time="5 min"
          content={[dummyText, dummyHash]}
          imageUrl=""
          text={["120+ Likes", "Comment", "Share", "Save"]}
        />
      </div>
      <div className="right-content h v">
        <div className="profile-box v">
          <img src={imageUrls[4]} alt="cover-pic" />
          <img src={imageUrls[0]} alt="profile-pic" />
          <b>John Smith</b>
          <p>
            {dummyText}{" "}
            {dummyText}
          </p>
          <button className="btn dark-btn">View Profile</button>
        </div>
        <div className="question-box box">
          <b>Best questions for you.</b>
          {[1, 2, 3, 4, 5, 6, 7].map((i) => (
            <Question
              key={i}
              imageUrl={imageUrls[i + 3]}
              text={questions[i - 1]}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
