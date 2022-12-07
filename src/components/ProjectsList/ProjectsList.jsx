import styles from "./ProjectsList.module.css";

import { projects } from "../../utils/projects";
import LinkButton from "../LinkButton/LinkButton";

const ProjectsList = () => {
  return (
    <>
      {projects.map((project) => {
        return (
          <div key={project.id} className={styles.ProjectsList}>
            <figure className={styles.ProjectsListFigure}>
              <img
                className={styles.ProjectsListImage}
                src={`/images${project.imageSrc}`}
                alt={`${project.caption.toLowerCase()} project`}
                style={{ width: "100%" }}
              />
              <figcaption className={styles.ProjectsListCaption}>
                {project.caption}
              </figcaption>
            </figure>
            <div className={styles.ProjectsListLanguages}>
              {project.languages.map((language, idx) => (
                <span key={idx} className={styles.ProjectsListLanguage}>
                  {language}
                </span>
              ))}
            </div>
            <div className={styles.ProjectsListLinks}>
              <LinkButton isInForm={false} linkText="View Project" />
              <LinkButton isInForm={false} linkText="View Code" />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ProjectsList;
