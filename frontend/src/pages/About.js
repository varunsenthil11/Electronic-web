import React from "react";
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        // style={{ backgroundImage: `url(${MultiplePizzas})` }}
      >       <h1> ABOUT US</h1></div>
      <div className="aboutBottom">
        {/* <h1> ABOUT US</h1> */}
        <p>
        Corporate Social responsibility has become a part of VVDN business philosophy. VVDN is continuously making effort towards environment sustainability through plantation drives to combat pollution and take a step towards maintaining the ecological balance. VVDN also contributes towards enriching the lives of underprivileged people of the society by promoting the education among the children, women, elderly and the differently abled and livelihood enhancement projects.

VVDN as part of its commitment is focusing on giving back to the society and making every effort to ensure that it grows in a socially and environmentally responsible way, while meeting the interests of its stakeholders by delivering economic, social and environmental benefits.
        </p>
      </div>
    </div>
  );
}

export default About;
