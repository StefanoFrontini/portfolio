import ContactForm from "./ContactForm";
import styles from "../styles/Contact.module.css";
import Particles from "./Particles";
const Contact = () => {
  return (
    <>
      <section id="contact" className={styles.contact}>
        <h2>CONTACT ME</h2>

        <ContactForm />

        <Particles />
      </section>
    </>
  );
};

export default Contact;
