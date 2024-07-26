import React from "react";
import IconButton from "../../components/IconButton";
import Colors from "../../constants/Colors";

const Introduction = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "100vh",
      }}
    >
      <div>
        <div
          style={{
            height: "70vh",
            width: "500px",
            margin: "25px",
            borderRadius: "25px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={require("../../assets/images/rijan.png")}
            style={{
              height: "70vh",
              width: "400px",
              objectFit: "cover",
              backgroundColor: Colors.primary,
              borderRadius: "25px",
              borderWidth: "2.5px",
              borderStyle: "solid",
              borderColor: "black",
            }}
          />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ width: "80%" }}>
          <h1 className="prim-head">- I'M RIJAN .</h1>
          <h1 className="sec-head">Web and Mobile App Developer</h1>
          <p>
            I'm an experienced front-end developer focused on creating seamless
            user experiences. With a background in web development, I specialize
            in building interactive and visually appealing interfaces. I strive
            to stay updated with industry trends to deliver modern and
            innovative solutions.
          </p>
          <IconButton title="MORE ABOUT ME" />
        </div>
      </div>
    </div>
  );
};

export default Introduction;
