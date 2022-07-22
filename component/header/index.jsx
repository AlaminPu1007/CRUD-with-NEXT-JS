import Link from "next/link";
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
              <Link href="/">
                <li className={styles.nav_tab}>
                  <a>Home</a>
                </li>
              </Link>
              <Link href="/">
                <li className={styles.nav_tab}>
                  <a>Create</a>
                </li>
              </Link>
              <Link href="/">
                <li className={styles.nav_tab}>
                  <a>Services</a>
                </li>
              </Link>
              <Link href="/">
                <li className={styles.nav_tab}>
                  <a>Contact</a>
                </li>
              </Link>
              <Link href="/auth/login">
                <li className={styles.nav_tab}>
                  <a>Sign in</a>
                </li>
              </Link>
              <Link href="/auth/register">
                <li className={styles.nav_tab}>
                  <a>Sign up</a>
                </li>
              </Link>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default header;
