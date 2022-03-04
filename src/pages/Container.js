import React from "react";
import "../components/styles/Container.scss";
import { randomTestData } from "../DemoData";
const Container = () => {
  return (
    <div className="container">
      <h2>Home</h2>
      <div className="main-body">
        {randomTestData.map((data) => {
          return (
            <div className="onedata" key={data.id}>
              <div className="username">{data.username}</div>
              <div className="date">{data.date}</div>
              <div className="question">{data.question}</div>
              <div className="answer">{data.answer}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Container;
