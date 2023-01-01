import React from "react";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";
import "./header.css";

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Let's Build Something amazing with GPT-3 OpenAI
        </h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
          porro at et molestiae nihil sunt molestias natus rerum fugit, corrupti
          eos earum, iste blanditiis quos libero illo officiis totam ea.
          consectetur atque quibusdam incidunt.
        </p>
        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Enter your e-mail" />
          <button type="button">Get Started</button>
        </div>
        <div className="gpt3__header-content__people">
          <img src={people} />
          <p>1600 people request access a visit in last 24hs</p>
        </div>
      </div>
      <div className="gpt3__header-image">
        <img src={ai} />
      </div>
    </div>
  );
};

export default Header;
