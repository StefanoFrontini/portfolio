import ContactForm from "./ContactForm";
import styles from "../styles/Contact.module.css";
import Particles from "./Particles";
const Contact = () => {
  return (
    <>
      <section id="contact" className={styles.contact}>
        <h2>CONTACT ME</h2>
        <div className={styles.contact_container}>
          <ContactForm />
        </div>
        <Particles />
      </section>
    </>
  );
};

export default Contact;
