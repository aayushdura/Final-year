import React from "react";
import "../components/styles/Container.scss";
const Container = () => {
  const randomTestData = [
    { id: "1", data: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasdddddd" },
    { id: "2", data: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasdddddd" },
    { id: "3", data: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasdddddd" },
    { id: "4", data: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasdddddd" },
    { id: "5", data: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasdddddd" },
    { id: "6", data: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasdddddd" },
    { id: "7", data: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasdddddd" },
    { id: "8", data: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasdddddd" },
    { id: "9", data: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasdddddd" },
    { id: "10", data: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasdddddd" },
    { id: "11", data: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasdddddd" },
    { id: "12", data: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasdddddd" },
    { id: "13", data: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasdddddd" },
    { id: "14", data: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasdddddd" },
    { id: "15", data: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasdddddd" },
    { id: "16", data: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasdddddd" },
    { id: "17", data: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasdddddd" },
    { id: "18", data: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasdddddd" },
    { id: "19", data: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasdddddd" },
    { id: "20", data: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasdddddd" },
    { id: "21", data: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasdddddd" },
  ];
  return (
    <div className="container">
      <div className="main-body">
        {randomTestData.map((data) => {
          return (
            <div className="onedata" key={data.id}>
              {data.data}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Container;
