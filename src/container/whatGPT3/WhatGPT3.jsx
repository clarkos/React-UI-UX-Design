import React from "react";
import { Feature } from "../../components";
import "./whatGPT3.css";

const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="whpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature
          title="What is GPT-3"
          text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. At ad voluptates quia optio explicabo fugiat nisi deleniti natus asperiores voluptate, repellat, blanditiis maiores ratione ducimus. Pariatur corrupti debitis aperiam maxime?"
        />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
          The posibilities are beyond your Imagination
        </h1>
        <p>Explore the library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature
          title="Chatbot"
          text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. At ad voluptates quia optio explicabo fugiat nisi deleniti natus asperiores voluptate, repellat, blanditiis maiores ratione ducimus. Pariatur corrupti debitis aperiam maxime?"
        />
        <Feature
          title="Knowledgebase"
          text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. At ad voluptates quia optio explicabo fugiat nisi deleniti natus asperiores voluptate, repellat, blanditiis maiores ratione ducimus. Pariatur corrupti debitis aperiam maxime?"
        />
        <Feature
          title="Education"
          text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. At ad voluptates quia optio explicabo fugiat nisi deleniti natus asperiores voluptate, repellat, blanditiis maiores ratione ducimus. Pariatur corrupti debitis aperiam maxime?"
        />
      </div>
    </div>
  );
};

export default WhatGPT3;
