import React from "react";
import Card from "../../components/Card";
import Quizzical from "../../images/Quizzical.png";
import MovieSearchApp from "../../images/MovieSearchApp.png";
import styles from "./styles.module.css";
export default function Projects() {
  React.useEffect(() => window.scrollTo(0, 0), []);
  return (
    <div className={styles.projects}>
      <h1 className={styles.project}>
        <span className={styles.blue_dot}> </span>Personal Projects
      </h1>
      <Card
        render={() => (
          <>
            <p className={styles.project_name}>
              <span className={styles.blue_bar}></span>Quizzical
            </p>
            <p className={styles.role}>
              <span className={styles.blue_bar}></span>Developer
            </p>
            <p className={styles.project_description}>
              It was my first project, I built after learning React. It is a
              quiz website in which basics of react such as conditional
              rendering, use of hooks like useState and useEffect are used.
            </p>
            <a
              href="https://dutta-roy-samrat.github.io/QuizApp/"
              target="_blank"
            >
              <img
                src={Quizzical}
                alt="app link"
                className={styles.project_img}
              />
            </a>
          </>
        )}
        className={styles.card}
      />
      <Card
        render={() => (
          <>
            <p className={styles.project_name}>
              <span className={styles.blue_bar}></span>Movie Search App
            </p>
            <p className={styles.role}>
              <span className={styles.blue_bar}></span>Developer
            </p>
            <p className={styles.project_description}>
              This Project was created with the purpose of developing a frontend
              for a movie search app and implementing concepts of error
              handling, conditional rendering, custom validity message and React
              hooks.
            </p>
            <a
              href="https://dutta-roy-samrat.github.io/Movie-Search-App/"
              target="_blank"
            >
              <img
                src={MovieSearchApp}
                alt="app link"
                className={styles.project_img}
              />
            </a>
          </>
        )}
        className={styles.card}
      />
    </div>
  );
}
