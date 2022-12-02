import Nav from "../Nav/Nav";
import LinkButton from "../LinkButton/LinkButton";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.Header}>
      <Nav />
      <div className={styles.HeaderTextGroup}>
        <h1 className={styles.HeaderIntro}>
          Nice to <br className={styles.HeaderTextBreak} />
          meet you! I'm{" "}
          <span className={styles.HeaderIntroSpan}>Adam Keyes</span>.
        </h1>
        <p className={styles.HeaderText}>
          Based in the UK, I'm a front-end developer passionate about building
          accessible web apps that users love.
        </p>
        <LinkButton linkText="contact me" />
      </div>
    </header>
  );
};

export default Header;
