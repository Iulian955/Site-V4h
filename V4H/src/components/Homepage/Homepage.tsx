import React, { useState } from "react";
import styles from "../Homepage/Homepage.module.scss";
import images from "../../data/images";
import { Q } from "./string.json";
import Accordion from "./Accordion";
import { uniqueId } from "lodash";

const Homepage = () => {
  return (
    <div className={styles.homepageContainer}>
      <div className={styles.firstContainer}>
        <div className={styles.mainText}>
          Nature needs water for Growth <span className={styles.orange}>Your Business </span> need sustainable growth
          solutions
        </div>

        <div className={styles.mainSubTitle}>
          {" "}
          At viral4hype we offer services that grow your business, each day we optimise them to get more results with no
          waste in resources. Cost effective!
        </div>

        <div className={styles.homeBtn}>
          <button>Schedule a meeting with us</button>
        </div>
      </div>
      {/* <div className={styles.logosContainer}>
        <img src={images.homepage.accenture} alt="accenture" />
        <img src={images.homepage.zara} alt="zara" />
        <img src={images.homepage.thales} alt="thales" />
        <img src={images.homepage.dell} alt="dell" />
        <img src={images.homepage.luxoft} alt="luxoft" />
      </div> */}
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
                <br />
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
                <br />
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
                <br /> <span className={styles.bold}>What does your business need to grow? </span>
              </div>
              <div className={styles.cardLink}>
                <a href="/"> Schedule a meeting with us! </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.thirdContainer}>
        <div className={styles.thirdWrapper}>
          <div className={styles.firstSection}>
            <div className={styles.firstSectionTitle}>
              Viral 4 Hype is an exclusive company that offers sustainable growth solutions for business.
            </div>
            <div className={styles.firstSectionText}>
              We’ve covered what we considered sustainable growth solutions for business, now let’s talk about what we
              mean when we say exclusive. <br />
              <br />
              We carefully select our clients, there are strong seeds and there are weak seeds, we can offer a healthy
              environment for seeds to grow, but a weak seed, can only grow so much. <br />
              <br />
              The difference between seeds and business is that business can change, so if we wont work with you now, we
              will tell you why so you can try again in the future. We work with open-minded businesses that take risks
              to grow and that understand the importance of hard work and planning.
            </div>
            <div className={styles.sectionBtn}>
              <button>Get in touch</button>
            </div>
          </div>
          <div className={styles.secondSection}>
            <div className={styles.cardsFAQ}>
              <div className={styles.cardsWrapper}>
                {Object.values(Q.questionList).map((item: any) => (
                  <Accordion key={uniqueId()} theQuestion={{ question: item.question, answer: item.answer }} />
                ))}{" "}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.forthContainer}>
        <div className={styles.forthWrapper}>
          <div className={styles.servicesBtn}>
            <button>PROCESS</button>
          </div>
          <div className={styles.titleContainer}>
            <div className={styles.mainTitle}>How can you work with us?</div>
            <div className={styles.subTitle}>The process</div>
          </div>

          <div className={styles.stepsContainer}>
            <div className={styles.stepsWrapper}>
              <div className={styles.stepBtn}>
                <button>Step 1</button>
              </div>

              <div className={styles.stepTexts}>
                <div className={styles.stepTitle}>Have a meeting with us</div>
                <div className={styles.stepSubTitle}>
                  In this meeting we will answer any relevant question you have about us, our strategy, our results, we
                  will also ask you many relevant questions to understand you, your business, your goals and your
                  objectives{" "}
                </div>
              </div>
            </div>

            <div className={styles.interLine}></div>
            <div className={styles.stepsWrapper}>
              <div className={styles.stepBtn}>
                <button>Step 2</button>
              </div>

              <div className={styles.stepTexts}>
                <div className={styles.stepTitle}>Analysis and planning phase</div>
                <div className={styles.stepSubTitle}>
                  During this step we will analyse if you can work with us, what opportunities there are in the market
                  for you, if your goals are feasible or need to be recalibrated. During this phase we will also plan an
                  initial proposal with an overview of the most sustainable solutions that will grow your business
                </div>
              </div>
            </div>
            <div className={styles.interLine}></div>
            <div className={styles.stepsWrapper}>
              <div className={styles.stepBtn}>
                <button>Step 3</button>
              </div>

              <div className={styles.stepTexts}>
                <div className={styles.stepTitle}>NDA and GO!</div>
                <div className={styles.stepSubTitle}>
                  During this phase, we will set up another meeting with you, sign an NDA, offer our solution, after you
                  analyse and accept the proposal, we will start working on making people see you, want you, love you
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.fifthContainer}>
        <div className={styles.fifthWrapper}>
          <div className={styles.bigText}>Want to learn how you can optimise your business on your own?</div>
          <div className={styles.subscribeContainer}>
            <div className={styles.subscribeTitle}>
              Subscribe to our newsletter, you might win more than just knowledge
            </div>
            <div className={styles.subscribeInput}>
              <input placeholder="Email" />
            </div>
            <div className={styles.sectionBtnNew}>
              <button>Get in touch</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
