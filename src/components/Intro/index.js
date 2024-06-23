import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./styles.module.css";
export default function Intro() {
  return (
    <div className={`${styles.intro}`}>
      <p className={styles.greetings}>Hello</p>
      <h3 className={styles.starting_intro}>Here's who I am AND what I do</h3>
      <div className={styles.btn}>
        <NavLink to="/resume">
          <button className={styles.resume_btn}>RESUME</button>
        </NavLink>
        <NavLink to="/personal-projects">
          <button className={styles.projects_btn}>PERSONAL PROJECTS</button>
        </NavLink>
      </div>
      <p className={styles.about_myself}>
        I am a dedicated web development enthusiast actively honing my frontend
        skills. I specialize in React, JavaScript, Next.js, and various other
        essential frontend tools, continually striving to expand my knowledge
        and expertise.
      </p>
      <p className={styles.about_myself}>
        Originally a Mechanical Engineer, I've transitioned into a passionate
        front-end web developer, dedicated to crafting efficient and engaging
        user interfaces.
      </p>
    </div>
  );
}
