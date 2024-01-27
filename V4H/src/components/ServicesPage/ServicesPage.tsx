import React, { useState } from "react";
import styles from "../ServicesPage/ServicesPage.module.scss";
import images from "../../data/images";
import Accordion from "./Accordion";
import { uniqueId } from "lodash";
import { FaReact, FaNode, FaJava, FaPython } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { FaCss3 } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";

const ServicesPage = () => {
  const [selectedService, setSelectedService] = useState("Web development");

  let contentDiv;

  let contentDiv1 = (
    <div className={styles.servicesContent}>
      <div className={styles.svsMainTitle}>Web development services</div>
      <div className={styles.svsSmallText}>
        If we are talking about websites most of the time, we develop in REACT. If you prefer another framework we can
        adapt, our specialists have enough experience to provide services on any kind of front end or back-end
        frameworks. <br /> <br />
        If we are talking about other web application, we can build you any of the following: CRM, ERP, SaaS, Analytics
        Tool, Internal Dashboards. These are just some examples of what we can do.
        <br /> <br /> Here are the benefits of working with us on a web application
      </div>
      <ul>
        <li>More cashflow for your business</li>
        <li>Time saved for your priorities</li>
        <li>Solutions Aligned with Your Vision`</li>
        <li>Exceptional Experience for Your Visitors</li>
        <li>Become Unique in your industry</li>
        <li>Cost effective solutions for your budget</li>
        <li>Flexibility for future growth</li>
        <li>Peace of mind</li>
      </ul>
    </div>
  );

  let contentDiv2 = (
    <div className={styles.servicesContent}>
      <div className={styles.svsMainTitle}>Business digitization</div>
      <div className={styles.svsSmallText}>
        Our expertise lies in catalyzing the transformation of conventional businesses into digitally optimized
        entities, leveraging a myriad of solutions. Whether you're transitioning to a digital framework or seeking to
        enhance your existing digital infrastructure, our comprehensive suite of services ensures a seamless journey.
        <br />
        <br />
        We specialize in:
      </div>
      <ul className={styles.flexUL}>
        <li>Enterprise-wide digital strategy formulation</li>
        <li>Implementing and integrating CRM (Customer Relationship Management) systems</li>
        <li>Customized ERP (Enterprise Resource Planning) solutions tailored to your operations</li>
        <li>Designing and deploying SaaS (Software as a Service) platforms</li>
        <li>Developing Analytics Tools for data-driven insights</li>
        <li>Creating Internal Dashboards for streamlined operations</li>
      </ul>

      <div className={styles.svsSmallText}>
        {" "}
        The advantages of partnering with us for your digital transformation journey encompass: <br />
      </div>
      <ul className={styles.flexUL}>
        <li>Amplified cash flow through optimized digital operations</li>
        <li>Time efficiencies aligned with your business priorities</li>
        <li>Solutions crafted to resonate with your long-term vision and goals</li>
        <li>Exceptional experiences for your customers and stakeholders</li>
        <li>Establishing a unique digital footprint within your industry</li>
        <li>Cost-effective digital strategies curated for your specific budget</li>
        <li>Scalability and adaptability for sustained growth</li>
        <li>A sense of confidence and assurance throughout the transformation process</li>
      </ul>
    </div>
  );

  let contentDiv3 = (
    <div className={styles.servicesContent}>
      <div className={styles.svsMainTitle}>Automation and testing services</div>
      <div className={styles.svsSmallText}>
        Within your business there are parts in systems that take up too many resources, maybe it’s time, maybe it’s
        money, maybe it’s energy. <br />
        By systems we mean both digital existing systems of your workflow or departments, maybe the sales department
        takes too much time to find qualified leads, we can help with that, maybe your CRM has too many steps that need
        to be manually taken, we can help with that too.
        <br />
        The point is within these services, we take a look at your business, se what can be automate, we test it, then
        we automate it, without disrupting your workflow.
        <br />
        The benefits of working with us on testing and automation:
        <br />
      </div>
      <ul>
        <li>Reliable Product Quality</li>
        <li>Faster Time-to-Market</li>
        <li>Enhanced User Satisfaction</li>
        <li>Consistent Performance</li>
        <li>Reduced Errors and Risks</li>
        <li>Greater Productivity</li>
        <li>Cost-Efficient Solutions</li>
        <li>Innovative, Reliable Products</li>
      </ul>
    </div>
  );

  const handleServiceClick = (service: string) => {
    setSelectedService(service);
  };

  if (selectedService === "Web development") {
    contentDiv = (
      <div className={styles.servicesContent}>
        <div className={styles.svsMainTitle}>Web development services</div>
        <div className={styles.svsSmallText}>
          If we are talking about websites most of the time, we develop in REACT. If you prefer another framework we can
          adapt, our specialists have enough experience to provide services on any kind of front end or back-end
          frameworks. <br /> <br />
          If we are talking about other web application, we can build you any of the following: CRM, ERP, SaaS,
          Analytics Tool, Internal Dashboards. These are just some examples of what we can do.
          <br /> <br /> Here are the benefits of working with us on a web application
        </div>
        <ul>
          <li>More cashflow for your business</li>
          <li>Time saved for your priorities</li>
          <li>Solutions Aligned with Your Vision`</li>
          <li>Exceptional Experience for Your Visitors</li>
          <li>Become Unique in your industry</li>
          <li>Cost effective solutions for your budget</li>
          <li>Flexibility for future growth</li>
          <li>Peace of mind</li>
        </ul>
      </div>
    );
  } else if (selectedService === "Digital transformation services") {
    contentDiv = (
      <div className={styles.servicesContent}>
        <div className={styles.svsMainTitle}>Business digitization</div>
        <div className={styles.svsSmallText}>
          Our expertise lies in catalyzing the transformation of conventional businesses into digitally optimized
          entities, leveraging a myriad of solutions. Whether you're transitioning to a digital framework or seeking to
          enhance your existing digital infrastructure, our comprehensive suite of services ensures a seamless journey.
          <br />
          <br />
          We specialize in:
        </div>
        <ul className={styles.flexUL}>
          <li>Enterprise-wide digital strategy formulation</li>
          <li>Implementing and integrating CRM (Customer Relationship Management) systems</li>
          <li>Customized ERP (Enterprise Resource Planning) solutions tailored to your operations</li>
          <li>Designing and deploying SaaS (Software as a Service) platforms</li>
          <li>Developing Analytics Tools for data-driven insights</li>
          <li>Creating Internal Dashboards for streamlined operations</li>
        </ul>

        <div className={styles.svsSmallText}>
          {" "}
          The advantages of partnering with us for your digital transformation journey encompass: <br />
        </div>
        <ul className={styles.flexUL}>
          <li>Amplified cash flow through optimized digital operations</li>
          <li>Time efficiencies aligned with your business priorities</li>
          <li>Solutions crafted to resonate with your long-term vision and goals</li>
          <li>Exceptional experiences for your customers and stakeholders</li>
          <li>Establishing a unique digital footprint within your industry</li>
          <li>Cost-effective digital strategies curated for your specific budget</li>
          <li>Scalability and adaptability for sustained growth</li>
          <li>A sense of confidence and assurance throughout the transformation process</li>
        </ul>
      </div>
    );
  } else if (selectedService === "Automations and testing") {
    contentDiv = (
      <div className={styles.servicesContent}>
        <div className={styles.svsMainTitle}>Automation and testing services</div>
        <div className={styles.svsSmallText}>
          Within your business there are parts in systems that take up too many resources, maybe it’s time, maybe it’s
          money, maybe it’s energy. <br />
          By systems we mean both digital existing systems of your workflow or departments, maybe the sales department
          takes too much time to find qualified leads, we can help with that, maybe your CRM has too many steps that
          need to be manually taken, we can help with that too.
          <br />
          The point is within these services, we take a look at your business, se what can be automate, we test it, then
          we automate it, without disrupting your workflow.
          <br />
          The benefits of working with us on testing and automation:
          <br />
        </div>
        <ul>
          <li>Reliable Product Quality</li>
          <li>Faster Time-to-Market</li>
          <li>Enhanced User Satisfaction</li>
          <li>Consistent Performance</li>
          <li>Reduced Errors and Risks</li>
          <li>Greater Productivity</li>
          <li>Cost-Efficient Solutions</li>
          <li>Innovative, Reliable Products</li>
        </ul>
      </div>
    );
  }
  return (
    <div className={styles.servicesContainer}>
      <div className={styles.servicesWrapper}>
        <div className={styles.servicesFirstSection}>
          <div className={styles.servicesMainTitle}>
            Information <span className={styles.white}>and</span> Technology
          </div>
          <div className={styles.servicesSubTitle}>
            We use the latest technology to grow your business, protect your data and make your information visible for
            your targeted audience
          </div>
          <div className={styles.sectionBtn}>
            <button>Have a meeting with us</button>
          </div>
        </div>

        <div className={styles.servicesSecondSection}>
          <div className={styles.servicesBtn}>
            <button>SERVICES</button>
          </div>
          <div className={styles.titleContainer}>
            <div className={styles.mainTitle}>Our services</div>
            <div className={styles.subTitle}>
              Our services are always personalised based on your needs. If you need something more complex that is not
              listed below, we can still help you. Listed below are the services we provide most of the time to our
              partners
            </div>
          </div>

          <div className={styles.svsContainer}>
            <div className={styles.svsName}>
              <div
                onClick={() => handleServiceClick("Web development")}
                className={selectedService === "Web development" ? styles.activeSVS : styles.inactiveSVS}
              >
                Web development
              </div>
              <div
                onClick={() => handleServiceClick("Digital transformation services")}
                className={
                  selectedService === "Digital transformation services" ? styles.activeSVS : styles.inactiveSVS
                }
              >
                Digital transformation services
              </div>
              <div
                onClick={() => handleServiceClick("Automations and testing")}
                className={selectedService === "Automations and testing" ? styles.activeSVS : styles.inactiveSVS}
              >
                Automations and testing
              </div>
            </div>

            <div className={styles.svsText}>{contentDiv}</div>
          </div>

          <div className={styles.svsResponsive}>
            <div className={styles.cardsFAQ}>
              <div className={styles.cardsWrapper}>
                <Accordion key={uniqueId()} theQuestion={{ question: "Web development", answer: contentDiv1 }} />

                <Accordion
                  key={uniqueId()}
                  theQuestion={{ question: "Digital transformation services", answer: contentDiv2 }}
                />
                <Accordion
                  key={uniqueId()}
                  theQuestion={{ question: "Automations and testing", answer: contentDiv3 }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.servicesThirdSection}>
          <div className={styles.svsBigTitle}>
            Sustainable growth solutions means that we provide the most value with the least amount of recourses wasted
          </div>
          <div className={styles.svsSmallTitle}>What you can expect</div>
          <div className={styles.svsCards}>
            <div className={styles.cardAdv}>
              <div className={styles.cardLogo}>
                <img src={images.services.mind} />
              </div>
              <div className={styles.cardTitle}>Business Mindset</div>

              <div className={styles.cardText2}>
                We put ourselves in your shoes so we can come up with the best solutions based on your opportunities and
                challenges
              </div>
            </div>
            <div className={styles.cardAdv}>
              <div className={styles.cardLogo}>
                <img src={images.services.comunication} />
              </div>
              <div className={styles.cardTitle}>On point communication</div>

              <div className={styles.cardText2}>
                We won’t bother you more than we need to, we talk everything we need to at the beginning, then just
                follow up if we need your approval for a decision, we prioritise your time
              </div>
            </div>

            <div className={styles.cardAdv}>
              <div className={styles.cardLogo}>
                <img src={images.services.quality} />
              </div>
              <div className={styles.cardTitle}>Competitive quality</div>

              <div className={styles.cardText2}>
                We always strive to deliver the best quality, we are not competitive with the marketing but with
                ourselves, after all you are your best competitor.
              </div>
            </div>

            <div className={styles.cardAdv}>
              <div className={styles.cardLogo}>
                <img src={images.services.time} />
              </div>
              <div className={styles.cardTitle}>Time efficiency</div>

              <div className={styles.cardText2}>
                When we tell you a date we respect it, no delays, no hiccups, only professionalism
              </div>
            </div>
          </div>
        </div>

        <div className={styles.servicesForthSection}>
          <div className={styles.servicesBtn}>
            <button>PROCESS</button>
          </div>
          <div className={styles.titleContainer}>
            <div className={styles.mainTitle}>Want us to treat your digital needs?</div>
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
            <div className={styles.interLine}></div>

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
            <div className={styles.interLine}></div>

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

        <div className={styles.servicesFifthSection}>
          <div className={styles.svsBigTitle}>Frameworks and programming languages we love</div>
          <div className={styles.programming}>
            <div className={styles.frameworks}>
              <FaReact className={styles.frameworkLogo} />
              <div className={styles.frameworkTitle}>React</div>
            </div>

            <div className={styles.frameworks}>
              <FaNode className={styles.frameworkLogo} />
              <div className={styles.frameworkTitle}>Nodejs</div>
            </div>

            <div className={styles.frameworks}>
              <IoLogoFirebase className={styles.frameworkLogo} />
              <div className={styles.frameworkTitle}>Firebase</div>
            </div>

            <div className={styles.frameworks}>
              <FaCss3 className={styles.frameworkLogo} />
              <div className={styles.frameworkTitle}>CSS</div>
            </div>

            <div className={styles.frameworks}>
              <FaJava className={styles.frameworkLogo} />
              <div className={styles.frameworkTitle}>Java</div>
            </div>

            <div className={styles.frameworks}>
              <IoLogoJavascript className={styles.frameworkLogo} />
              <div className={styles.frameworkTitle}>JavaScript</div>
            </div>

            <div className={styles.frameworks}>
              <FaPython className={styles.frameworkLogo} />
              <div className={styles.frameworkTitle}>Python</div>
            </div>
          </div>
        </div>

        <div className={styles.servicesSixthSection}>
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
                  <img src={images.homepage.street} alt="digital" />
                  <div>Street advertising</div>
                </div>
                <div className={styles.cardText}>
                  What do you do while you are in traffic? Well... most people look around. The best marketing strategy
                  will always be an omnichannel strategy, if you are everywhere, your clients will see you! If you
                  target the Romanian Market, this might be the service you need, we constantly optimise our street
                  advertising locations, to always have the most cost-effective results. Is it worth it to be seen by
                  hungered of thousands of people on a monthly basis? Short answer, it depends. It depends on where you
                  are located in the market, the question still remains… What does your business need to grow?
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

        <div className={styles.servicesSeventhSection}>
          <div className={styles.subscribeContainer}>
            <div className={styles.subscribeTitle}>
              Want to learn how to technologically advance your business and stay ahead of your competition?
            </div>
            <div className={styles.subscribeSubTitle}>Don’t miss out on our newsletter</div>
            <div className={styles.subscribeFlex}>
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
    </div>
  );
};

export default ServicesPage;
