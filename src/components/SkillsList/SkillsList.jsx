import styles from "./SkillsList.module.css";

import Skills from "../Skills/Skill";
import { skills } from "../../utils/Skills";

const SkillsList = () => {
  return (
    <section className={styles.SkillsList}>
      {skills.map((skillType) => (
        <Skills skill={skillType.skill} yearsExp={skillType.yearsExp} />
      ))}
    </section>
  );
};

export default SkillsList;
