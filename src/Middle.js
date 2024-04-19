import React from "react";
import "./middle.css";
import Card from "./Card";
import data from "./data/values_data.json";

const Middle = () => {
  const values = data.values_data;
  console.log(data);
  return (
    <div className="middle-section">
      <div className="values-section">
        <div className="middle-heading">Our Values</div>
        <div className="cards-container">
          {values.map((value) => (
            <Card key={value.id} value={value} />
          ))}
        </div>
      </div>
      <div className="stories-section">
        <div className="stories-left">
          <img src="image/bros.png" />
        </div>
        <div className="stories-right">
          <div className="middle-heading story-heading">Our Story</div>
          <p>
            We started Ecoyaan after watching an episode of "Our Planet II",
            where we saw the devastating impact of plastic pollution and climate
            change on the albatross birds. That moment ignited our mission. We
            created Ecoyaan to connect consumers, businesses, and sustainability
            experts. We want to make it easy and convenient for people to access
            eco-friendly products and services, learn and share best practices,
            and support sustainability initiatives.
          </p>
          <p>
            As founders, we are not perfect, but we are passionate. We believe
            that every small step matters. Join us and be a part of the Ecoyaan
            community-together, we'll make a difference.
          </p>
          <p>
            Connect with the founders on LinkedIn here:{" "}
            <span>
              <a
                href="https://www.linkedin.com/in/abhishek-rao-k/"
                target="_blank"
              >
                Abhishek Rao
              </a>
            </span>{" "}
            <span>
              <a
                href="https://www.linkedin.com/in/sarwanjeetsingh/"
                target="_blank"
              >
                Sarwanjeet Singh
              </a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Middle;
