import { CircularProgress } from "@mui/joy";
import React from "react";
import Colors from "../../constants/Colors";

const Skills = () => {
  const skillsArray = [
    {
      name: "HTML",
      percent: 85,
    },
    {
      name: "CSS",
      percent: 80,
    },
    {
      name: "JAVASCRIPT",
      percent: 75,
    },
    {
      name: "TYPESCRIPT",
      percent: 50,
    },
    {
      name: "REACT",
      percent: 70,
    },
    {
      name: "REACT NATIVE",
      percent: 60,
    },
    {
      name: "NEXT JS",
      percent: 45,
    },
    {
      name: "MONGO DB",
      percent: 50,
    },
  ];

  return (
    <div
      style={{
        height: "70vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        // justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h4>MY SKILLS</h4>
      <div
        style={{
          display: "flex",
          width: "80%",
          flexWrap: "wrap",
        }}
      >
        {skillsArray.map((item, index) => {
          return (
            <div
              style={{
                width: "25%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              key={index}
            >
              <CircularProgress
                determinate
                size="lg"
                value={item.percent}
                sx={{
                  "--CircularProgress-trackColor": Colors.secondary,
                  "--CircularProgress-progressColor": Colors.primary,
                }}
              >
                <h4 style={{ color: Colors.text }}>{item.percent} %</h4>
              </CircularProgress>
              <h6 style={{ color: Colors.text, textAlign: "center" }}>
                {item.name}
              </h6>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
