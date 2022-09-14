import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import "./skills.css";

export const Skills = () => {
  return (
    <section id="skills">
      <h5>What Skills I Have</h5>
      <h2>My Skills</h2>

      <div className="container skills_container">
        <div className="skills_frontend">
          <h3>Skills and Tools</h3>
          <div className="skills_content">
            <article className="skills_details">
              <BsPatchCheckFill />
              <h4>HTML</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="skills_details">
              <BsPatchCheckFill />
              <h4>CSS</h4>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="skills_details">
              <BsPatchCheckFill />
              <h4>JavaScript</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="skills_details">
              <BsPatchCheckFill />
              <h4>React</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="skills_details">
              <BsPatchCheckFill />
              <h4>Redux</h4>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="skills_details">
              <BsPatchCheckFill />
              <h4>Bootstrap</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="skills_details">
              <BsPatchCheckFill />
              <h4>Chakra-UI</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="skills_details">
              <BsPatchCheckFill />
              <h4>Netlify</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="skills_details">
              <BsPatchCheckFill />
              <h4>Vercel</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="skills_details">
              <BsPatchCheckFill />
              <h4>Git-bash</h4>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="skills_details">
              <BsPatchCheckFill />
              <h4>Node</h4>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="skills_details">
              <BsPatchCheckFill />
              <h4>MongoDB</h4>
              <small className="text-light">Intermediate</small>
            </article>
            
          </div>
        </div>
      </div>
    </section>
  );
};
