import React from "react";
import "./possibility.css";
import possibilityImg from "../../assets/possibility.png";

const Possibility = () => {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      <div className="gpt3__possibility-image">
        <img src={possibilityImg} alt="possibilities" />
      </div>
      <div className="gpt3__possibility-content">
        <h4>Request early access to get started</h4>
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde magnam
          enim odio, ullam fugiat eligendi natus. In voluptate odio praesentium
          sit voluptatibus! Alias nemo dolores voluptatum error, numquam
          suscipit mollitia?
        </p>
        <h4>Request early access to get started</h4>
      </div>
    </div>
  );
};

export default Possibility;
