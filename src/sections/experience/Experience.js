import React from "react";
import Colors from "../../constants/Colors";

const Experience = () => {
  const educationArray = [
    {
      name: "B.E",
      specalisation: "Mechanical Engineering",
      percent: 85,
      fromYear: 2016,
      toYear: 2020,
      institution: "National Engineering College",
      place: "Kovilpatti",
      note: "Graduated from National Engineering College, Kovilpatti with 77% marks.",
    },
    {
      name: "HSC",
      specalisation: "Computer Science",
      percent: 85,
      fromYear: 2015,
      toYear: 2016,
      institution: "Kanchi Sri Sankara AMHSS",
      place: "Tiruchendur",
      note: "Completed HSC from Kanchi Sri Sankara AMHSS, Tiruchendur with 77% marks.",
    },
    {
      name: "SSLC",
      specalisation: null,
      percent: 85,
      fromYear: 2013,
      toYear: 2014,
      institution: "Kanchi Sri Sankara AMHSS",
      place: "Tiruchendur",
      note: "Completed SSLC from Kanchi Sri Sankara AMHSS, Tiruchendur with 95% marks.",
    },
  ];

  const experienceArray = [
    {
      position: "Front End Developer",
      company: "Fyn Mobility",
      fromYear: 2023,
      toYear: "Present",
      note: "Developed and maintained dynamic applications using React Native and Next.js.",
    },
    {
      position: "Junior React Developer",
      company: "Uplogic Technologies Pvt Ltd",
      fromYear: 2022,
      toYear: 2023,
      note: "Developed and maintained dynamic mobile applications using React Native.",
    },
  ];

  return (
    <div
      style={{
        height: "80vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h4>EXPERIENCE & EDUCATION</h4>
      <div
        style={{
          width: "80%",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            width: "48%",
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
            // backgroundColor: "blue",
          }}
        >
          {experienceArray.map((item, index) => {
            return (
              <div
                style={{
                  // width: "50%",
                  display: "flex",
                  flexDirection: "column",
                  // alignItems: "center",
                  marginBottom: "50px",
                }}
                key={index}
              >
                <div
                  style={{
                    backgroundColor: Colors.secondary,
                    width: "max-content",
                    padding: "2px",
                    paddingRight: "6px",
                    paddingLeft: "6px",
                    borderRadius: "6px",
                    marginBottom: "10px",
                  }}
                >
                  <h6 style={{ fontSize: "12px", opacity: 0.6, margin: 0 }}>
                    {item.fromYear}
                    {"  -  "}
                    {item.toYear}
                  </h6>
                </div>
                <h5
                  style={{
                    color: Colors.text,
                    margin: 0,
                    marginBottom: "10px",
                  }}
                >
                  {item.position}
                  <span style={{ fontSize: "16px", opacity: 0.6 }}>
                    {"  "}-{"  "}
                    {item.company}
                  </span>
                </h5>
                <h6 style={{ fontSize: "12px", opacity: 0.6, margin: 0 }}>
                  {item.note}
                </h6>
              </div>
            );
          })}
        </div>
        <div
          style={{
            width: "48%",
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
            // backgroundColor: "green",
          }}
        >
          {educationArray.map((item, index) => {
            return (
              <div
                style={{
                  // width: "50%",
                  display: "flex",
                  flexDirection: "column",
                  // alignItems: "center",
                  marginBottom: "50px",
                }}
                key={index}
              >
                <div
                  style={{
                    backgroundColor: Colors.secondary,
                    width: "max-content",
                    padding: "2px",
                    paddingRight: "6px",
                    paddingLeft: "6px",
                    borderRadius: "6px",
                    marginBottom: "10px",
                  }}
                >
                  <h6 style={{ fontSize: "12px", opacity: 0.6, margin: 0 }}>
                    {item.fromYear}
                    {"  -  "}
                    {item.toYear}
                  </h6>
                </div>
                <h5
                  style={{
                    color: Colors.text,
                    margin: 0,
                    marginBottom: "10px",
                  }}
                >
                  {item.name}
                  {item.specalisation && (
                    <span style={{ fontSize: "16px", opacity: 0.6 }}>
                      {"  "}-{"  "}
                      {item.specalisation}
                    </span>
                  )}
                </h5>
                <h6 style={{ fontSize: "12px", opacity: 0.6, margin: 0 }}>
                  {item.note}
                </h6>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Experience;
