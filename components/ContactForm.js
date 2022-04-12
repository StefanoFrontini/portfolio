import styles from "../styles/ContactForm.module.css";

const ContactForm = () => {
  return (
    <div className={styles.contact_container}>
      <form
        name="contact"
        action="/success"
        method="POST"
        data-netlify="true"
        className={styles.contact_form}
      >
        <input type="hidden" name="form-name" value="contact" />
        {/* <input type="text" name="firstname" id="firstname" /> */}
        <label htmlFor="yourname">Your Name:</label>
        <input type="text" name="name" id="yourname" />
        <label htmlFor="youremail">Your Email:</label>
        <input type="email" name="email" id="youremail" />
        <label htmlFor="yourmessage">Message:</label>
        <textarea
          name="message"
          id="yourmessage"
          cols="30"
          rows="10"
        ></textarea>

        <button type="submit" className={styles.btn}>
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
