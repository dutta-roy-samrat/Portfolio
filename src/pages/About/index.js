import React from "react";
import Card from "../../components/Card";
import Intro from "../../components/Intro";
import DP from "../../images/Samrat_image.png";
import Socials from "../../components/Socials";
import { NavLink } from "react-router-dom";
import styles from "./styles.module.css";
export default function About() {
  React.useEffect(() => window.scrollTo(0, 0), []);
  return (
    <div className={styles.desktop_about}>
      <div className={styles.about}>
        <Card
          render={() => {
            return (
              <>
                <img src={DP} alt="Samrat" className={styles.DP} />
                <figcaption className={styles.name}>
                  Samrat
                  <br />
                  Dutta Roy
                </figcaption>
                <hr />
                <div className={styles.btn}>
                  <NavLink to="/resume">
                    <button className={styles.resume_btn}>RESUME</button>
                  </NavLink>
                  <NavLink to="/projects">
                    <button className={styles.projects_btn}>PROJECTS</button>
                  </NavLink>
                </div>
                <div className={styles.job}>FRONTEND DEVELOPER</div>
                <Socials />
              </>
            );
          }}
          className={styles.card}
        />
      </div>
      <Intro />
    </div>
  );
}
