import React from "react";
import "../CSS/Name.css";

const Name = () => {
  return (
    <div className="name-comp">
      <div>
        <p className="welcome">Welcome To</p>
        <p className="head-1">The Solo</p>
        <p className="head-2">Society</p>
        <p className="foot">
          Live the Life You’ve Always Dreamed Of – Virtually!
        </p>
      </div>
      <p className="tail">
        A revolutionary metaverse where you create, earn, connect, and thrive in
        a digital world designed to make your dreams a reality.
      </p>
      <button className="foot-btn">Step Into Your Dream World</button>
    </div>
  );
};

export default Name;
