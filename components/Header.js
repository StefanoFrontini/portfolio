import { useState, useRef, useEffect } from "react";
import styles from "../styles/Header.module.css";
import { FaBars } from "react-icons/fa";

const Header = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);
  return (
    <header className={styles.nav}>
      <div className={styles.nav_center}>
        <div className={styles.nav_header}>
          <a href="#home" className={styles.brand}>
            /SF/
          </a>
          <button className={styles.nav_toggle} onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>
        <div className={styles.links_container} ref={linksContainerRef}>
          <ul className={styles.links} ref={linksRef}>
            <li>
              <a href="#home" onClick={toggleLinks}>
                Home
              </a>
            </li>
            <li>
              <a href="#projects" onClick={toggleLinks}>
                Projects
              </a>
            </li>
            <li>
              <a href="#about" onClick={toggleLinks}>
                About
              </a>
            </li>
            <li>
              <a href="#contact" onClick={toggleLinks}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
    // <nav className={styles.navbar}>
    //   <div className={styles.nav_center}>
    // <a href="#home" className="nav__brand">
    //   /SF/
    // </a>
    //     <ul className={styles.nav__links}>
    //   <li>
    //     <a href="#home" className="nav__link">
    //       Home
    //     </a>
    //   </li>
    //   <li>
    //     <a href="#projects" className="nav__link">
    //       Projects
    //     </a>
    //   </li>
    //   <li>
    //     <a href="#about" className="nav__link">
    //       About
    //     </a>
    //   </li>
    //   <li>
    //     <a href="#contact" className="nav__link">
    //       Contact
    //     </a>
    //   </li>
    //     </ul>
    //     <span className="nav__hamburger" id="hamburger"></span>
    //   </div>
    // </nav>
  );
};

export default Header;
