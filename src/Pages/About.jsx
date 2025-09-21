import styles from "../Styles/About.module.css";

export default function About() {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h4>Here's a quick snapshot about me</h4>

        <div className={styles["info-block"]}>
          <strong>Age</strong>
          <span>20 Years</span>
        </div>

        <div className={styles["info-block"]}>
          <strong>Country</strong>
          <span>Algeria</span>
        </div>

        <div className={styles["info-block"]}>
          <strong>Years of Experience</strong>
          <span>3 Years</span>
        </div>

        <div className={styles["info-block"]}>
          <strong>Hobbies</strong>
          <span>Building cool stuff, tech, and gaming</span>
        </div>
      </div>
    </div>
  );
}
