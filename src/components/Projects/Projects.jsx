import styles from "./Projects.module.css";

import LinkButton from "../LinkButton/LinkButton";

const Projects = () => {
  return (
    <main className={styles.Projects}>
      <header className={styles.ProjectsHeader}>
        <h2 className={styles.ProjectsHeading}>Projects</h2>
        <LinkButton isInForm={false} linkText="Contact Me" />
      </header>
    </main>
  );
};

export default Projects;
