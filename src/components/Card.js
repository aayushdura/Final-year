import React from "react";
import "./styles/Card.scss";
const Card = ({ data }) => {
  return (
    <div className="card">
      <div className="question">{data.question}</div>
      <div className="answer">{data.answer}</div>
      Posted By <span className="username"> {data.username}</span> On :{" "}
      <span className="date">{Date(data.date)}</span>
    </div>
  );
};

export default Card;
