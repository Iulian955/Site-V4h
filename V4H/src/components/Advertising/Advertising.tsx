import React, { useState } from "react";
import styles from "../Advertising/Advertising.module.scss";
import images from "../../data/images";
import { Q } from "./string.json";
import Accordion from "./Accordion";
import { uniqueId } from "lodash";

const Advertising = () => {
  const [selectedCity, setSelectedCity] = useState("Bucharest");
  const [judetTitle, setJudetTitle] = useState("Bucharest");
  const [judetInfo, setJudetInfo] = useState(
    "Strategically positioned across three prime locations in Bucharest, our outdoor advertising spaces offer visibility and targeted exposure. With a combined weekly reach of 520,000 individuals, these high-traffic areas ensure maximum engagement and impact for your advertising campaigns. Capitalize on these prime locations to effectively connect with your desired audience and amplify brand awareness in the bustling cityscape of Bucharest."
  );

  const handleCityClick = (city) => {
    setSelectedCity(city);

    if (city === "Bucharest") {
      setJudetTitle("Bucharest");
      setJudetInfo(
        "Strategically positioned across three prime locations in Bucharest, our outdoor advertising spaces offer visibility and targeted exposure. With a combined weekly reach of 520,000 individuals, these high-traffic areas ensure maximum engagement and impact for your advertising campaigns. Capitalize on these prime locations to effectively connect with your desired audience and amplify brand awareness in the bustling cityscape of Bucharest."
      );
    } else if (city === "Sibiu") {
      setJudetTitle("Sibiu");
      setJudetInfo("Sibiu Text");
    } else if (city === "Constanta") {
      setJudetTitle("Constanta");
      setJudetInfo(
        "Nestled within the bustling cityscape of Constanta, our three premier advertising spaces command attention with a daily viewership exceeding 300,000. Strategically positioned to capture the flow of over 300,000 individuals traversing these locations each day, these advertising spaces offer a prime opportunity for your brand to make a lasting impression. Leverage these high-traffic zones to maximize visibility."
      );
    }
  };

  React.useEffect(() => {
    setJudetTitle("Bucharest");
    setJudetInfo(
      "Strategically positioned across three prime locations in Bucharest, our outdoor advertising spaces offer visibility and targeted exposure. With a combined weekly reach of 520,000 individuals, these high-traffic areas ensure maximum engagement and impact for your advertising campaigns. Capitalize on these prime locations to effectively connect with your desired audience and amplify brand awareness in the bustling cityscape of Bucharest."
    );
  }, []);

  return (
    <div className={styles.advertisingContainer}>
      <div className={styles.advertisingWrapper}>
        <div className={styles.advertisingFirstSection}>
          <div className={styles.advertisingTexts}>
            <div className={styles.advertisingText}>Captivate the Streets, Amplify Your Brand</div>
            <div className={styles.sectionBtn}>
              <button>Schedule a meeting with us</button>
            </div>
          </div>
          <div className={styles.advertisingPhoto}>
            <img src={images.advertising.bg1} alt="/" />
          </div>
        </div>
        <div className={styles.advertisingSecondSection}>
          <div className={styles.servicesBtn}>
            <button>ADVERTISING</button>
          </div>
          <div className={styles.titleContainer}>
            <div className={styles.mainTitle}>Outdoor advertising</div>
            <div className={styles.subTitle}>Advertise your Brand in high traffic areas of Romania</div>
          </div>

          <div className={styles.judeteContainer}>
            <div className={styles.judetName}>
              <div
                onClick={() => handleCityClick("Bucharest")}
                className={selectedCity === "Bucharest" ? styles.activeCity : styles.inactiveCity}
              >
                Bucharest
              </div>
              <div
                onClick={() => handleCityClick("Sibiu")}
                className={selectedCity === "Sibiu" ? styles.activeCity : styles.inactiveCity}
              >
                Sibiu
              </div>
              <div
                onClick={() => handleCityClick("Constanta")}
                className={selectedCity === "Constanta" ? styles.activeCity : styles.inactiveCity}
              >
                Constanta
              </div>
            </div>

            <div className={styles.judeteText}>
              <div className={styles.judetTitle}>{judetTitle}</div>
              <div className={styles.judetInfo}>{judetInfo} </div>
            </div>
          </div>

          <div className={styles.judeteResponsive}>
            <div className={styles.cardsFAQ}>
              <div className={styles.cardsWrapper}>
                {Object.values(Q.questionList).map((item: any) => (
                  <Accordion key={uniqueId()} theQuestion={{ question: item.question, answer: item.answer }} />
                ))}{" "}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.advertisingThirdSection}>
          <div className={styles.advertisingMainTitle}>How do we chose an advertising space</div>
          <div className={styles.advertisingCards}>
            <div className={styles.cardAdv}>
              <div>
                <div className={styles.cardLogo}>
                  <img src={images.advertising.search} />
                </div>
                <div className={styles.cardTitle}>High-Traffic Zones</div>
              </div>
              <div className={styles.cardText}>
                We scout locations with heavy footfall or significant vehicular traffic. Think major intersections, busy
                downtown areas, or popular entertainment districts. The more eyeballs, the better the chance of going
                viral.
              </div>
            </div>
            <div className={styles.cardAdv}>
              <div>
                <div className={styles.cardLogo}>
                  <img src={images.advertising.eye} />
                </div>
                <div className={styles.cardTitle}>Prime Visibility</div>
              </div>
              <div className={styles.cardText}>
                We prioritize spots that offer unobstructed views and extended exposure times. It's all about being
                front and center where people can't miss the message.
              </div>
            </div>

            <div className={styles.cardAdv}>
              <div>
                <div className={styles.cardLogo}>
                  <img src={images.advertising.location} />
                </div>
                <div className={styles.cardTitle}>Buzzworthy Environments</div>
              </div>
              <div className={styles.cardText}>
                We prioritize locations that naturally generate buzz, like trendy neighborhoods, popular social spots,
                or areas where viral moments often originate. Placing digital billboards in these environments amplifies
                the potential for content to organically spread and trend.
              </div>
            </div>

            <div className={styles.cardAdv}>
              <div>
                <div className={styles.cardLogo}>
                  <img src={images.advertising.data} />
                </div>
                <div className={styles.cardTitle}>Data-Backed Selection</div>
              </div>
              <div className={styles.cardText}>
                We rely on data-driven insights to select advertising spaces. Analyzing metrics such as foot traffic
                patterns, audience demographics, and historical performance of similar campaigns in specific locations
                helps us make informed decisions. This data-driven approach ensures optimal placement for maximum impact
                and viral potential.
              </div>
            </div>
          </div>
        </div>
        <div className={styles.advertisingforthSection}>
          <div className={styles.advertisingMainTitle}>Our digital advertising spaces reach</div>
          <div className={styles.advertisingPeople}>
            <div>
              <div className={styles.peopleNumber}>9.500.000</div>
              <div className={styles.perDate}>People Monthly</div>
            </div>
            <div>
              <div className={styles.peopleNumber}>2.250.00</div>
              <div className={styles.perDate}>People Weekly</div>
            </div>
            <div>
              <div className={styles.peopleNumber}>321.500</div>
              <div className={styles.perDate}>People Daily</div>
            </div>
          </div>
        </div>

        <div className={styles.advertisingFifthSection}>
          <div className={styles.advertisingFifthTitle}>Orase acoperite</div>
          <div className={styles.mapContainer}>
            <div className={styles.mapOne}>
              <div className={styles.mapTexts}>
                <div className={styles.oras}>Bucuresti</div>

                <div>
                  <div className={styles.nrAdv}>3</div>
                  <div className={styles.advSpaces}>Advertising Spaces</div>
                </div>
              </div>
              <div className={styles.mapTexts}>
                <div className={styles.oras}>Sibiu</div>
                <div>
                  <div className={styles.nrAdv}>4</div>
                  <div className={styles.advSpaces}>Advertising Spaces</div>
                </div>
              </div>

              <div className={styles.mapTexts}>
                <div className={styles.oras}>Constanta</div>
                <div>
                  <div className={styles.nrAdv}>3</div>
                  <div className={styles.advSpaces}>Advertising Spaces</div>
                </div>
              </div>
            </div>

            <div className={styles.mapImg}>
              <img src={images.advertising.map} alt="map" />
            </div>
          </div>
        </div>

        <div className={styles.advertisingSixthSection}>
          <div className={styles.sixthTitle}>Need our services?</div>
          <div className={styles.sixthServices}>
            <div className={styles.services}>
              <div>
                <div className={styles.serviceLogo}>
                  <img src={images.advertising.phone} alt="map" />
                </div>
                <div className={styles.serviceTitle}>Give us a call</div>
              </div>
              <div className={styles.serviceText}>+40 753 754 321</div>
            </div>

            <div className={styles.services}>
              <div>
                <div className={styles.serviceLogo}>
                  <img src={images.advertising.mail} alt="map" />
                </div>
                <div className={styles.serviceTitle}>Write to us</div>
              </div>
              <div className={styles.serviceText}>email@gmail.com</div>
            </div>

            <div className={styles.services}>
              <div>
                <div className={styles.serviceLogo}>
                  <img src={images.advertising.location} alt="map" />
                </div>
                <div className={styles.serviceTitle}>Visit us</div>
              </div>
              <div className={styles.serviceText}>email@gmail.com</div>
            </div>
          </div>
        </div>

        <div className={styles.advertisingSeventhSection}>
          <div className={styles.servicesBtn}>
            <button>SERVICES</button>
          </div>
          <div className={styles.titleContainer}>
            <div className={styles.mainTitle}>Other services we provide</div>
            <div className={styles.subTitle}>Want to see the whole picture we can paint for you? Check out</div>
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
            </div>
          </div>
        </div>

        <div className={styles.advertisingSection}>
          <div className={styles.fifthWrapper}>
            <div className={styles.bigText}>Subscribe to our newsletter</div>
            <div className={styles.subscribeContainer}>
              <div className={styles.subscribeTitle}>You want to be up to date with our advertising opportunities?</div>
              <div className={styles.subscribeSubTitle}>
                Subscribe to our newsletter and always know what the best advertising spaces in Romania are
              </div>
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

export default Advertising;