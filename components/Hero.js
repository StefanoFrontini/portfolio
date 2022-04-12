import styles from "../styles/Hero.module.css";
import { VscGithub, VscTwitter } from "react-icons/vsc";

const Hero = () => {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.hero_container}>
        <h1>Stefano Frontini</h1>
        <h2>Software Engineer</h2>
        <div className={styles.buttons}>
          <a className={styles.btn} href="#projects">
            PROJECTS
          </a>
          <a className={`${styles.btn} ${styles.btn_contact}`} href="#contact">
            CONTACT
          </a>
        </div>
        <div className={styles.icons}>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/StefanoFrontini"
          >
            <VscGithub />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/ste_fro"
          >
            <VscTwitter />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
