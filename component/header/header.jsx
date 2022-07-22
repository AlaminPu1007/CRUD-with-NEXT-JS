import React from "react";
import styles from "./header.module.css";

function header() {
  return (
    <header>
      <div className={styles.nav_wrapper}>
        <div className={styles.logo_container}>
          <img className={styles.logo} src="/favicon.ico" alt="Logo" />
        </div>
        <nav>
          <label className={styles.menu_btn} htmlFor="menuToggle">
            <div className={styles.menu} />
            <div className={styles.menu} />
            <div className={styles.menu} />
          </label>
          <div className={styles.nav_container}>
            <ul className={styles.nav_tabs}>
              <li className={styles.nav_tab}>Home</li>
              <li className={styles.nav_tab}>Products</li>
              <li className={styles.nav_tab}>Services</li>
              <li className={styles.nav_tab}>Contact</li>
              <li className={styles.nav_tab}>Sign in</li>
              <li className={styles.nav_tab}>Sign up</li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default header;
