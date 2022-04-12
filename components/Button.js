import styles from "../styles/Button.module.css";

const Button = ({ url, text }) => {
  return (
    <a
      className={
        text === "LIVE SITE" ? styles.btn : `${styles.btn} ${styles.btn_code}`
      }
      target="_blank"
      rel="noreferrer"
      href={url || "#"}
    >
      {text}
    </a>
  );
};

export default Button;
