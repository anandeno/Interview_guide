import React, { useState } from "react";
import { Button, CssBaseline, IconButton } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import TextBox from "../components/TextBox";
import Dropdown from "../components/Dropdown";
import "../styles.scss";

const HomePage = () => {
  const [name, setName] = useState("");
  const [stream, setStream] = useState("");
  const [experience, setExperience] = useState("");

  const streams = ["Java", "Python", "Node.js"];
  const experiences = ["1 year", "2 years", "3 years"];

  const handleNextClick = () => {
    console.log("Name:", name);
    console.log("Stream:", stream);
    console.log("Experience:", experience);
  };

  return (
    <div className="center-container">
      <TextBox
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Dropdown
        label="Stream"
        options={streams}
        value={stream}
        onChange={(e) => setStream(e.target.value)}
      />
      <Dropdown
        label="Experience"
        options={experiences}
        value={experience}
        onChange={(e) => setExperience(e.target.value)}
      />
      <IconButton className="arrow-button" onClick={handleNextClick}>
        <ArrowForwardIcon />
      </IconButton>
    </div>
  );
};

export default HomePage;
