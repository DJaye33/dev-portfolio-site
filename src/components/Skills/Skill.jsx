import styles from "./Skill.module.css";

const Skill = ({ skill, yearsExp }) => {
  return (
    <div className={styles.skillContainer}>
      <div className={styles.skill}>{skill}</div>
      <aside className={styles.yearsExp}>{yearsExp}</aside>
    </div>
  );
};

export default Skill;
