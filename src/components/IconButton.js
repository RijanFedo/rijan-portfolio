import React from "react";
import Colors from "../constants/Colors";

const IconButton = ({ title, icon, onClick }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderWidth: "1px",
          borderStyle: "solid",
          borderColor: Colors.primary,
          height: "50px",
          cursor: "pointer",
          borderRadius: "25px",
        }}
        onClick={onClick}
      >
        <h6 style={{ padding: "20px" }}>{title}</h6>
        <div
          style={{
            height: "50px",
            width: "50px",
            borderRadius: "25px",
            backgroundColor: Colors.primary,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        ></div>
      </div>
    </div>
  );
};

export default IconButton;
