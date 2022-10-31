import React from "react";
import About from "../../components/About/About";
import AboutMe from "../../components/AboutMe/AboutMe";
import Skills from "../../components/Skills/Skills";
import "./AboutContainer.scss";
import me from "../../assets/me.jpg";

const skills = [
  "HTML5",
  "CSS3",
  "SASS",
  "JavaScript",
  "React",
  "Jest",
  "Cypress",
  "React Testing Library",
  "Github Actions",
  "TDD",
  "GCP",
  "CI/CD",
  "OOP",
  "Java",
  "Spring",
  "SQL",
];

const skillsJSX = (skills) => {
  return skills.map((skill, index) => {
    return (
      <div key={index}>
        <Skills title={skill} />
      </div>
    );
  });
};

const AboutContainer = () => {
  return (
    <div className="aboutcontainer">
        <img className="aboutcontainer__image" src={me} alt="" />
      <About title="ABOUT ME" />
      <div className="aboutcontainer__flex">
        <AboutMe />
        <div className="aboutcontainer__skills">
          <h2 className="aboutcontainer__skills--title">SKILLS</h2>
          <div className="aboutcontainer__skills--buttons">
          {skillsJSX(skills)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContainer;
