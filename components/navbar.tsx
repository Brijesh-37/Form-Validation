import React from "react";
import styles from "../styles/navbar.module.css";

const Navbar = () => {
  return (
    <div>
      <nav className={styles.nav0}>
        <ul>
          <a href="/" className={styles.nav1}>
            Signup
          </a>

          <a href="/user " className={styles.nav2}>
            UserData
          </a>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
