import styles from "./LinkButton.module.css";

const LinkButton = ({ isInForm, linkText }) => {
  let element;

  if (isInForm) {
    element = <button className={styles.linkBtn}>{linkText}</button>;
  } else {
    element = (
      <a href="#" className={styles.link}>
        {linkText}
      </a>
    );
  }

  return <> {element}</>;
};

export default LinkButton;
