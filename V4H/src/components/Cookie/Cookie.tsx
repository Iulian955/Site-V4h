import React from "react";
import styles from "../Cookie/Cookie.module.scss";
import { Helmet } from "react-helmet";

const Cookie = () => {
  return (
    <div className={styles.cookieContainer}>
      <Helmet>
        <meta name="description" content="Cookie" />
      </Helmet>
      <div className={styles.cookieTitle}>Cookie Policy </div>
      <div className={styles.cookieText}>
        {" "}
        This Cookie Policy explains how Viral4Hype uses cookies on viral4hype.com.
        <br /> By using the Site, you consent to the use of cookies. What are Cookies Cookies are small pieces of text
        sent by your web browser by a website you visit. A cookie file is stored in your web browser and allows the Site
        or a third-party to recognize you and make your next visit easier and the Site more useful to you. How We Use
        Cookies We use cookies for the following purposes: Essential Cookies: These cookies are essential to provide you
        with services available through our Site and to enable you to use some of its features. Without these cookies,
        the services that you have asked for cannot be provided, and we only use these cookies to provide you with those
        services. Analytics Cookies: These cookies allow us to analyze your use of the Site and track website
        performance so we can improve the quality and effectiveness of our services. These cookies may collect
        information such as your IP address, browser type, and pages visited on the Site. This information is anonymous
        and aggregated, and it is only used to help us understand how the Site is being used. Managing Cookies You can
        control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you
        can set most browsers to prevent them from being placed. If you do this, however, you may have to manually
        adjust some preferences every time you visit a site and some services and functionalities may not work. Changes
        to This Cookie Policy We may update our Cookie Policy from time to time. We will notify you of any changes by
        posting the new Cookie Policy on this page.
        <br /> Contact Us If you have any questions about this Cookie Policy, please contact us: By
        email:contact@viral4hype.com
      </div>
    </div>
  );
};

export default Cookie;
