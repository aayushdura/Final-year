import React from "react";
import { randomTestData } from "../DemoData";
import "../components/styles/Answer.scss";
const Answer = () => {
  return (
    <div>
      <h2>Answer</h2>
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

export default Answer;
