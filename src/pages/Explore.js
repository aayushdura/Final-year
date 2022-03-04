import React from "react";

const Explore = () => {
  const randomTestData = [
    { id: "1", data: "yyyyyyyyasddddddddajjjjjjjjjjjasdklaksdlaskd,asndkansd" },
    { id: "2", data: "yyyyyyyyasddddddddajjjjjjjjjjjasdklaksdlaskd,asndkansd" },
    { id: "3", data: "yyyyyyyyasddddddddajjjjjjjjjjjasdklaksdlaskd,asndkansd" },
    { id: "4", data: "yyyyyyyyasddddddddajjjjjjjjjjjasdklaksdlaskd,asndkansd" },
    { id: "5", data: "yyyyyyyyasddddddddajjjjjjjjjjjasdklaksdlaskd,asndkansd" },
    { id: "6", data: "yyyyyyyyasddddddddajjjjjjjjjjjasdklaksdlaskd,asndkansd" },
    { id: "7", data: "yyyyyyyyasddddddddajjjjjjjjjjjasdklaksdlaskd,asndkansd" },
    { id: "8", data: "yyyyyyyyasddddddddajjjjjjjjjjjasdklaksdlaskd,asndkansd" },
    { id: "9", data: "yyyyyyyyasddddddddajjjjjjjjjjjasdklaksdlaskd,asndkansd" },
    {
      id: "10",
      data: "yyyyyyyyasddddddddajjjjjjjjjjjasdklaksdlaskd,asndkansd",
    },
    {
      id: "11",
      data: "yyyyyyyyasddddddddajjjjjjjjjjjasdklaksdlaskd,asndkansd",
    },
    {
      id: "12",
      data: "yyyyyyyyasddddddddajjjjjjjjjjjasdklaksdlaskd,asndkansd",
    },
    {
      id: "13",
      data: "yyyyyyyyasddddddddajjjjjjjjjjjasdklaksdlaskd,asndkansd",
    },
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
    <div>
      {" "}
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
            {data.data}
          </div>
        );
      })}
    </div>
  );
};

export default Explore;
