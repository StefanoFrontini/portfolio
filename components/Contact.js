import ContactForm from "./ContactForm";
import styles from "../styles/Contact.module.css";
const Contact = () => {
  return (
    <section id="contact" className={styles.contact}>
      <h2>CONTACT ME</h2>
      <div className={styles.contact_container}>
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
