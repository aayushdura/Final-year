import React from "react";
import "../components/styles/Explore.scss";

import { randomTestData } from "../DemoData";

const Explore = () => {
  return (
    <div>
      <h2>Explore</h2>{" "}
      {randomTestData.map((data) => {
        return (
          <div
            className="onedata"
            style={{
              padding: " 1ch",
              border: "1px solid",
            }}
            key={data.id}
          >
            <div className="username">{data.username}</div>
            <div className="date">{data.date}</div>
            <div className="question">{data.question}</div>
            <div className="answer">{data.answer}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Explore;
