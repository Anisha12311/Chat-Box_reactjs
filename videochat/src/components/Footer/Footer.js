import React from "react";
import { HeartTwoTone } from "@ant-design/icons";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
       <HeartTwoTone twoToneColor="#f50057" /> {" "}
      <a
        className="footer__link"
        href="https://github.com/Anisha12311/Chat-Box_reactjs"
        target="_blank"
        style={{ color: "#fdfdfd" }}
        rel="noreferrer"
      >
      Anisha 
      </a>
      <br />

      
    </footer>
  );
};

export default Footer;
