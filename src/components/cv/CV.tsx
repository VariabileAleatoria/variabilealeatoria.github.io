import "./styles.css";
import { education, workExperience } from "../../resources/CV";
import * as React from "react";
import CVTimeline from "../UI/CVTimeline";


const CV = () => {
  return (
    <div className="cvCard">
      <h2>Who am I</h2>
      Computer Engineer, born in Genoa (Italy) in 1997.
      <h2>Education</h2>
      <CVTimeline steps={education} />
      <h2>Work Experience</h2>
      <CVTimeline steps={workExperience} />
      <h2>Contact me</h2>
      <ul>
        <li>
          <i>name.surname</i>@&#123;live, edu.unige&#125;.it
        </li>
        <li>
          <a
            className="link"
            href="https://www.linkedin.com/in/alessandro-orlich/"
          >
            LinkedIn
          </a>
        </li>
      </ul>
    </div>
  );
};

export default CV;
