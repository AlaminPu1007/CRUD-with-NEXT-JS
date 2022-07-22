import React from "react";
import {
  AiFillMail,
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillUnlock,
} from "react-icons/ai";
import { BsFillTelephoneFill, BsFacebook, BsPersonPlus } from "react-icons/bs";
import { VscAccount } from "react-icons/vsc";
import { MdLocationOn } from "react-icons/md";
import Link from "next/link";
import styles from "./footer.module.css";

let token = null;

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <section className="section">
        <div className={styles.footer_sections}>
          <div className={styles.footer_section}>
            <h1>Contact Us</h1>
            <a href="mailto:support@ecommerce.com">
              <AiFillMail size={20} className={styles.footer_icon} />
              <p>support@ecommerce.com</p>
            </a>
            <a href="tel:555-555-5555">
              <BsFillTelephoneFill size={20} className={styles.footer_icon} />
              <p>+880 19-86221266</p>
            </a>
            <a
              href="http://maps.google.com/?q=1200 Mirpur-1, Dhaka-1216"
              target="_blank"
            >
              <MdLocationOn size={22} className={styles.footer_icon} />
              <p>Mirpur-1, Dhaka-1216</p>
            </a>
          </div>
          <div className={styles.footer_section}>
            <h1>Follow us on</h1>
            <a href="https://www.facebook.com" target="_blank">
              <BsFacebook size={22} className={styles.footer_icon} />
              <p>Facebook</p>
            </a>
            <a href="https://www.twitter.com" target="_blank">
              <AiFillTwitterCircle size={25} className={styles.footer_icon} />
              <p>Twitter</p>
            </a>
            <a href="https://www.instagram.com" target="_blank">
              <AiFillInstagram size={25} className={styles.footer_icon} />
              <p>Instagram</p>
            </a>
          </div>
          <div className={styles.footer_section}>
            <h1>My Account</h1>

            {token ? (
              <Link href="/" onClick={LogOutFunction}>
                {/* <VscAccount size={22} className={styles.footer_icon} /> */}
                <a>Log Out</a>
              </Link>
            ) : (
              <Link href="/auth/login">
                {/* <VscAccount size={22} className={styles.footer_icon} /> */}
                <a>Login</a>
              </Link>
            )}
            {token ? (
              <Link href="/">
                {/* <BsPersonPlus size={25} className={styles.footer_icon} /> */}
                <a>Profile</a>
              </Link>
            ) : (
              <Link href="/">
                {/* <BsPersonPlus size={25} className={styles.footer_icon} /> */}
                <a>Register a account</a>
              </Link>
            )}

            {token ? (
              <Link href="/">
                {/* <AiFillUnlock size={25} className={styles.footer_icon} /> */}
                <a>Forget password</a>
              </Link>
            ) : null}
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
