import React from "react";
import styles from "../Footer/Footer.module.scss";
import { faLinkedin, faFacebook, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../media/assets/picturesV4H/logoAlb.svg";
import { Helmet } from "react-helmet";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <Helmet>
        <meta name="description" content="Footer" />
      </Helmet>
      <div className={styles.footerWrapper}>
        <div className={styles.footerLogo}>
          <img src={logo} alt="logo" />
        </div>
        <div className={styles.footerSections}>
          <div className={styles.footerSectionOne}>
            <div className={styles.footerTitleMain}>Let’s do it together!</div>
            <div className={styles.footerSubTitle}>Tell us a few words about your project</div>
            <div className={styles.sectionBtn}>
              <a href="https://calendly.com/viral4hype/introductory-call">
                {" "}
                <button>Get in touch</button>{" "}
              </a>
            </div>
            <div className={styles.footerSocials}>
              <a href="https://www.facebook.com/viral4hype" className="facebook">
                <FontAwesomeIcon icon={faFacebook} size="2x" color="white" opacity={0.6} />
              </a>
              <a href=" https://www.linkedin.com/company/viral4hype/s" className="linkedin">
                <FontAwesomeIcon icon={faLinkedin} size="2x" color="white" opacity={0.6} />
              </a>
            </div>
          </div>
          <div className={styles.footerSectionTwo}>
            <div className={styles.footerTitle}>Legacy</div>
            <ul>
              <li>
                <a href="/cookie">Cookie Policy</a>
              </li>
              <li>
                <a href="/terms">Terms and Conditions</a>
              </li>
              <li>
                <a href="/policy">Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div className={styles.footerSectionThree}>
            <div className={styles.footerTitle}>Contact</div>
            <ul>
              <li>contact@viral4hype.com</li>
              <li>0757 173 566</li>
              <li>Bucharest , Romania</li>
            </ul>
          </div>
        </div>
        <div className={styles.rightsSection}>© 2024 Viral4Hype / ALL RIGHTS RESERVED.</div>
      </div>
    </div>
  );
};

export default Footer;
