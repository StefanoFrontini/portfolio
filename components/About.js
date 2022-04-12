import styles from "../styles/About.module.css";

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <h2>ABOUT ME</h2>
      <div className={styles.about_container}>
        <p>
          I am a self-taught Frontend developer. I like developing websites and
          web applications that solve concrete problems. I am passionate about
          learning new skills.
        </p>
        <p>
          I have a Master in Economics and have been working in the energy
          sector for 17 years first as a project manager and regulatory expert
          and then as a consultant/salesman.
        </p>
        <p>
          My journey as a software developer started 2 years ago when I decided
          to hire myself instead of hiring a professional to support my own
          business as an energy consultant.
        </p>
      </div>
    </section>
  );
};

export default About;
