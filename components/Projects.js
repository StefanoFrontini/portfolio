import Image from "next/image";
import styles from "../styles/Projects.module.css";
import Button from "./Button";

const Projects = ({ projects }) => {
  return (
    <>
      <section id="projects" className={styles.projects}>
        <h2>PROJECTS</h2>
        <article className={styles.projects_container}>
          {projects.map((project) => {
            const {
              id,
              title,
              image,
              description,
              tech,
              github,
              challenges,
              live,
            } = project;
            return (
              <div key={id} className={styles.projects_card}>
                <div className={styles.projects_image}>
                  <Image
                    src={image}
                    alt={title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className={styles.projects_text}>
                  <h3 className={styles.projects_title}>{title}</h3>
                  <p className={styles.projects_description}>{description}</p>
                  <p className={styles.projects_stack}>
                    <strong>Stack: </strong>
                    {tech}
                  </p>
                  <p>
                    <strong>Challenges: </strong>
                    {challenges}
                  </p>
                  <div className={styles.projects_buttons}>
                    <Button text="LIVE SITE" url={live} />
                    <Button text="SEE CODE" url={github} />
                  </div>
                </div>
              </div>
            );
          })}
        </article>
      </section>
    </>
  );
};

export default Projects;
