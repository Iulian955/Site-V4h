import React, { useState } from "react";
import styles from "../Marketing/Marketing.module.scss";
import images from "../../data/images";
import { Q } from "./string.json";
import Accordion from "./Accordion";
import { uniqueId } from "lodash";

const Marketing = () => {
  const [selectedCity, setSelectedCity] = useState("Google Ads Marketing");

  let contentDiv;

  const handleCityClick = (city) => {
    setSelectedCity(city);
  };

  if (selectedCity === "Google Ads Marketing") {
    contentDiv = (
      <div className={styles.servicesContent}>
        <div className={styles.servicesMainTitle}> Google Ads Marketing</div>
        <div className={styles.servicesSmallText}>
          Our proficiency in Google Ads Marketing is your key to unlocking unparalleled success. As certified experts in
          Google Ads, we leverage cutting-edge tools and methodologies to engineer campaigns that not only stand out but
          deliver tangible results.
          <br />
          <br />
          Benefits :
        </div>
        <ul>
          <li>Granular Targeting</li>
          <li>Strategic Keyword Optimization</li>
          <li>Ad Extensions Mastery</li>
          <li>Continuous Performance Analysis</li>
          <li>Responsive and Dynamic Ads</li>
          <li>Conversion Tracking Expertise</li>
          <li>Competitive Analysis</li>
          <li>Adaptive Budget Management</li>
        </ul>
      </div>
    );
  } else if (selectedCity === "Social Media Marketing") {
    contentDiv = (
      <div className={styles.servicesContent}>
        <div className={styles.servicesMainTitle}> Social Media Advertising</div>
        <div className={styles.servicesSmallText}>
          Our proficiency in Google Ads Marketing is your key to unlocking unparalleled success. As certified experts in
          Google Ads, we leverage cutting-edge tools and methodologies to engineer campaigns that not only stand out but
          deliver tangible results.
          <br />
          <br />
          Benefits :
        </div>
        <ul>
          <li>Granular Targeting</li>
          <li>Strategic Keyword Optimization</li>
          <li>Ad Extensions Mastery</li>
          <li>Continuous Performance Analysis</li>
          <li>Responsive and Dynamic Ads</li>
          <li>Conversion Tracking Expertise</li>
          <li>Competitive Analysis</li>
          <li>Adaptive Budget Management</li>
        </ul>
      </div>
    );
  } else if (selectedCity === "SEO") {
    contentDiv = (
      <div className={styles.servicesContent}>
        <div className={styles.servicesMainTitle}> SEO</div>
        <div className={styles.servicesSmallText}>
          Unlocking the full potential of your online presence through meticulous SEO monitoring, analysis, and audit.
          Our comprehensive approach ensures your website is primed for maximum visibility and success in search engine
          rankings. Benefits:
          <br />
          <br />
          Benefits :
        </div>
        <ul>
          <li>Thorough SEO Monitoring</li>
          <li>Data-Driven Analysis</li>
          <li>Comprehensive SEO Audit</li>
          <li>Strategic Keyword Optimization</li>
          <li>Competitor Benchmarking</li>
          <li>Proactive Issue Resolution</li>
          <li>Transparent Reporting</li>
          <li>Cutting-Edge Tool Integration</li>
        </ul>
      </div>
    );
  }

  return (
    <div className={styles.marketingContainer}>
      <div className={styles.marketingWrapper}>
        <div className={styles.marketingFirstSection}>
          <div className={styles.marketingTexts}>
            <div className={styles.marketingTitle}>The Digital Marketing Experience</div>
            <div className={styles.marketingSubTitle}>
              Unlock success with Viral 4 Hype: where tailored branding meets high conversion rates. Experience
              marketing that goes beyond, delivering tailored strategies for viral success.
            </div>
            <div className={styles.marketingBtn}>
              <button>Let’s work together</button>
            </div>

            <div className={styles.marketingClients}>
              <div className={styles.client}>
                <div>20 +</div>
                <div>Clients</div>
              </div>
              <div className={styles.client}>
                <div>250 +</div>
                <div>Monthly Revenue Generated</div>{" "}
              </div>
            </div>
          </div>

          <div className={styles.marketingPhoto}>
            <img src={images.marketing.marketing} alt="marketing" />
          </div>
        </div>

        <div className={styles.marketingSecondSection}>
          <div className={styles.servicesBtn}>
            <button>SERVICES</button>
          </div>
          <div className={styles.titleContainer}>
            <div className={styles.mainTitle}>Digital marketing services</div>
            <div className={styles.subTitle}>Empowering your business with our cutting-edge software solutions</div>
          </div>
          <div className={styles.judeteContainer}>
            <div className={styles.judetName}>
              <div
                onClick={() => handleCityClick("Google Ads Marketing")}
                className={selectedCity === "Google Ads Marketing" ? styles.activeCity : styles.inactiveCity}
              >
                Google Ads Marketing
              </div>
              <div
                onClick={() => handleCityClick("Social Media Marketing")}
                className={selectedCity === "Social Media Marketing" ? styles.activeCity : styles.inactiveCity}
              >
                Social Media Marketing
              </div>
              <div
                onClick={() => handleCityClick("SEO")}
                className={selectedCity === "SEO" ? styles.activeCity : styles.inactiveCity}
              >
                SEO
              </div>
            </div>

            <div className={styles.judeteText}>{contentDiv}</div>
          </div>

          <div className={styles.judeteResponsive}>
            <div className={styles.cardsFAQ}>
              <div className={styles.cardsWrapper}>
                <Accordion
                  key={uniqueId()}
                  theQuestion={{ question: "Google Ads Marketing", answer: contentDiv }}
                  onClick={() => handleCityClick("Google Ads Marketing")}
                />
                <Accordion
                  key={uniqueId()}
                  theQuestion={{ question: "Social Media Marketing", answer: contentDiv }}
                  onClick={() => handleCityClick("Social Media Marketing")}
                />
                <Accordion
                  key={uniqueId()}
                  theQuestion={{ question: "SEO", answer: contentDiv }}
                  onClick={() => handleCityClick("SEO")}
                />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.marketingThirdSection}>
          <div className={styles.marketingMainTitle}>Our 4 Principals we care about most in digital marketing</div>
          <div className={styles.marketingCards}>
            <div className={styles.cardAdv}>
              <div className={styles.cardLogo}>
                <img src={images.marketing.target} />
              </div>
              <div className={styles.cardTitle}>Targeted Precision</div>

              <div className={styles.cardText}>
                We believe in precision targeting, ensuring that every campaign reaches the right audience at the right
                time. Our strategies are crafted to resonate with specific demographics, behaviors, and interests,
                maximizing engagement and conversions.
              </div>
            </div>
            <div className={styles.cardAdv}>
              <div className={styles.cardLogo}>
                <img src={images.marketing.diagram} />
              </div>
              <div className={styles.cardTitle}>Data-Driven Insights</div>

              <div className={styles.cardText}>
                Data is at the core of our decision-making process. We rely on in-depth analytics and data-driven
                insights to optimize campaigns, leveraging real-time information to refine strategies and drive
                measurable results.
              </div>
            </div>

            <div className={styles.cardAdv}>
              <div className={styles.cardLogo}>
                <img src={images.marketing.creative} />
              </div>
              <div className={styles.cardTitle}>Creative Innovation</div>

              <div className={styles.cardText}>
                Innovation fuels our campaigns. We continuously explore creative avenues, integrating new technologies
                and approaches to captivate audiences, create engagement, and amplify brand impact in the ever-evolving
                digital landscape.
              </div>
            </div>

            <div className={styles.cardAdv}>
              <div className={styles.cardLogo}>
                <img src={images.marketing.transparent} />
              </div>
              <div className={styles.cardTitle}>Transparent Collaboration</div>

              <div className={styles.cardText}>
                Transparent communication and collaboration lie at the heart of our client relationships. We believe in
                fostering open dialogue, providing clear insights, and collaborating closely with our clients every step
                of the way to achieve shared objectives and success.
              </div>
            </div>
          </div>
        </div>

        <div className={styles.marketingForthSection}>
          <div className={styles.servicesBtn}>
            <button>PROCESS</button>
          </div>
          <div className={styles.titleContainer}>
            <div className={styles.mainTitle}>Ready to go Viral?</div>
            <div className={styles.subTitle}>Here are the steps</div>
          </div>{" "}
          <div className={styles.stepsContainer}>
            <div className={styles.stepsWrapper}>
              <div className={styles.stepBtn}>
                <button>Step 1</button>
              </div>

              <div className={styles.stepTexts}>
                <div className={styles.stepTitle}>Consultation</div>
                <div className={styles.stepSubTitle}>
                  Have a discussion with you about your needs during a introductory call
                </div>
              </div>
            </div>

            <div className={styles.stepsWrapper}>
              <div className={styles.stepBtn}>
                <button>Step 2</button>
              </div>

              <div className={styles.stepTexts}>
                <div className={styles.stepTitle}>Analysis and planning</div>
                <div className={styles.stepSubTitle}>
                  we analyse our first call see if your needs are in accordance with your wants and then create a
                  sustainable plan proposal for your business
                </div>
              </div>
            </div>

            <div className={styles.stepsWrapper}>
              <div className={styles.stepBtn}>
                <button>Step 3</button>
              </div>

              <div className={styles.stepTexts}>
                <div className={styles.stepTitle}>Final Call</div>
                <div className={styles.stepSubTitle}>
                  We set up another call with you to tell you what your opportunities are, how they can be put into
                  action and decide if we can work together to achieve your vision.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.marketingFifthSection}>
          <div className={styles.servicesBtn2}>
            <button>SERVICES</button>
          </div>
          <div className={styles.titleContainer}>
            <div className={styles.mainTitle2}>Other services we provide</div>
            <div className={styles.subTitle2}>Want to see the whole picture we can paint for you? Check out</div>
          </div>

          <div className={styles.cardContainer}>
            <div className={styles.cards}>
              <div className={styles.cardX2}>
                <div className={styles.headCard2}>
                  <img src={images.marketing.it} alt="it" />
                  <div>IT Services</div>
                </div>
                <div className={styles.cardText2}>
                  We stated earlier that we save you time, in our first meeting, we have the opportunity to understand
                  you and your business, then we can offer you the possibility to enhance your customers journey on your
                  website, to automate workflows within your business that take up too much of your resources: money,
                  time and energy. After that we code it! Websites, software solutions, we can do it, the question still
                  remains… What does your business need to grow?
                  <br />
                  <span className={styles.bold2}>What does your business need to grow? </span>
                </div>
                <div className={styles.cardLink2}>
                  <a href="/"> Learn More </a>
                </div>
              </div>
              <div className={styles.cardX2}>
                <div className={styles.headCard2}>
                  <img src={images.marketing.street} alt="street" />
                  <div>Street advertising</div>
                </div>
                <div className={styles.cardText2}>
                  What do you do while you are in traffic? Well... most people look around. The best marketing strategy
                  will always be an omnichannel strategy, if you are everywhere, your clients will see you! If you
                  target the Romanian Market, this might be the service you need, we constantly optimise our street
                  advertising locations, to always have the most cost-effective results. Is it worth it to be seen by
                  hungered of thousands of people on a monthly basis? Short answer, it depends. It depends on where you
                  are located in the market, the question still remains… What does your business need to grow?
                  <br />
                  <span className={styles.bold2}>What does your business need to grow? </span>
                </div>
                <div className={styles.cardLink2}>
                  <a href="/"> Learn More </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.marketingSixthSection}>
          <div className={styles.subscribeContainer}>
            <div className={styles.subscribeTitle}>Digital marketing secrets</div>
            <div className={styles.subscribeSubTitle}>Learn more, Subscribe to our newsletter</div>
            <div className={styles.subscribeFlex}>
              <div className={styles.subscribeInput}>
                <input placeholder="Email" />
              </div>
              <div className={styles.sectionBtn}>
                <button>Get in touch</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marketing;
