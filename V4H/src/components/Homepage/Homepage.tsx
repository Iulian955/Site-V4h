import React from "react";
import styles from "../Homepage/Homepage.module.scss";
import images from "../../data/images";

const Homepage = () => {
  return (
    <div className={styles.homepageContainer}>
      <div className={styles.firstContainer}>
        <div className={styles.mainText}>
          Nature needs water for Growth <span className={styles.orange}>Your Business </span> need sustainable growth
          solutions
        </div>
      </div>
      <div className={styles.logosContainer}>
        <img src={images.homepage.accenture} alt="accenture" />
        <img src={images.homepage.zara} alt="zara" />
        <img src={images.homepage.thales} alt="thales" />
        <img src={images.homepage.dell} alt="dell" />
        <img src={images.homepage.luxoft} alt="luxoft" />
      </div>
      <div className={styles.secondContainer}>
        <div className={styles.servicesBtn}>
          <button>SERVICES</button>
        </div>

        <div className={styles.titleContainer}>
          <div className={styles.mainTitle}>How can we help your business?</div>
          <div className={styles.subTitle}>
            We want people to connect with your business, your brand, your products! Your business has resources, we
            specialise in offering the most cost-effective solutions that are specially tailored for your place in the
            market. We make you visible but we also save you time.
          </div>
        </div>

        <div className={styles.cardContainer}>
          <div className={styles.cards}>
            <div className={styles.cardX}>
              <div className={styles.headCard}>
                <img src={images.homepage.digital} alt="digital" />
                <div>Digital marketing</div>
              </div>
              <div className={styles.cardText}>
                We get to know your business, your audience, then we tailor a solution based on the opportunities you
                have in the market that will provide you with results. We do PPC, SEO, SEM, Social Media Marketing,
                branding for our clients, but the question remains…
                <span className={styles.bold}>What does your business need to grow? </span>
              </div>
              <div className={styles.cardLink}>
                <a href="/"> Schedule a meeting with us! </a>
              </div>
            </div>
            <div className={styles.cardX}>
              <div className={styles.headCard}>
                <img src={images.homepage.digital} alt="digital" />
                <div>Digital marketing</div>
              </div>
              <div className={styles.cardText}>
                We get to know your business, your audience, then we tailor a solution based on the opportunities you
                have in the market that will provide you with results. We do PPC, SEO, SEM, Social Media Marketing,
                branding for our clients, but the question remains…
                <span className={styles.bold}>What does your business need to grow? </span>
              </div>
              <div className={styles.cardLink}>
                <a href="/"> Schedule a meeting with us! </a>
              </div>
            </div>

            <div className={styles.cardX}>
              <div className={styles.headCard}>
                <img src={images.homepage.digital} alt="digital" />
                <div>Digital marketing</div>
              </div>
              <div className={styles.cardText}>
                We get to know your business, your audience, then we tailor a solution based on the opportunities you
                have in the market that will provide you with results. We do PPC, SEO, SEM, Social Media Marketing,
                branding for our clients, but the question remains…
                <span className={styles.bold}>What does your business need to grow? </span>
              </div>
              <div className={styles.cardLink}>
                <a href="/"> Schedule a meeting with us! </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.thirdContainer}></div>
    </div>
  );
};

export default Homepage;
