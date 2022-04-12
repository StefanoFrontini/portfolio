import styles from "../styles/Footer.module.css";
import { SiNextdotjs } from "react-icons/si";
import { AiFillHeart } from "react-icons/ai";
const date = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <small>&copy; {date} Coded By: Stefano Frontini</small>
      <small className={styles.next}>
        Made with
        <SiNextdotjs />
      </small>
    </footer>
  );
};

export default Footer;
