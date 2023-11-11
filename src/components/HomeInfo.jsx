import React from "react";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";
const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}
      <img src={arrow} className="w-4 h-4 object-contain" />
    </Link>
  </div>
);

const renderContent = {
  1: (
    <h1 className="sm:text xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi, my name is <span className="font-semibold">Calvin</span>👋
      <br />A Software Engineer from Phoenix, Arizona
    </h1>
  ),
  2: (
    <InfoBox
      text="Successfully completed App Academy's rigorous coding bootcamp."
      link="/about"
      btnText="Learn More"
    />
  ),
  3: (
    <InfoBox
      text="Completed multiple projects throughout my time at App Academy and after"
      link="/projects"
      btnText="Visit my portfolio"
    />
  ),
  4: (
    <InfoBox
      text="Looking to start or complete a project?"
      link="/contact"
      btnText="Contact me here"
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[[currentStage] || null];
};

export default HomeInfo;
