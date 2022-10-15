import React from "react";
import Link from "next/link";
import styles from "../styles/navbar.module.css";

const Navbar = () => {
  return (
    <div>
      <nav className={styles.nav0}>
        <ul>
          <Link href="/">
            <a className={styles.nav1}>Signup</a>
          </Link>

          <a href="/user " className={styles.nav2}>
            UserData
          </a>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
