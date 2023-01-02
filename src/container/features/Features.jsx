import React from "react";
import { Feature } from "../../components";
import "./features.css";

const featuresData = [
  {
    title: "Improving end distrust instantly",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit eos asperiores laborum at earum voluptatibus ex, iure tempore excepturi placeat maxime ea eius quos quisquam aspernatur dignissimos facilis ipsa accusantium?",
  },
  {
    title: "Become the tended active",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit eos asperiores laborum at earum voluptatibus ex, iure tempore excepturi placeat maxime ea eius quos quisquam aspernatur dignissimos facilis ipsa accusantium?",
  },
  {
    title: "Message or am nothing",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit eos asperiores laborum at earum voluptatibus ex, iure tempore excepturi placeat maxime ea eius quos quisquam aspernatur dignissimos facilis ipsa accusantium?",
  },
  {
    title: "Really boy law country",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit eos asperiores laborum at earum voluptatibus ex, iure tempore excepturi placeat maxime ea eius quos quisquam aspernatur dignissimos facilis ipsa accusantium?",
  },
];

const Features = () => {
  return (
    <div className="gpt3__features section__padding" id="features">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">
          The Future is now ando you just need to realize it. Step into the
          Future today & make it Happen.
        </h1>
        <p>Request Early Acces to Get Started</p>
      </div>
      <div className="gpt3__features-container">
        {featuresData.map((item, index) => (
          <Feature
            title={item.title}
            text={item.text}
            key={item.title + index}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
