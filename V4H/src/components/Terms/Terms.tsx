import React from "react";
import styles from "../Terms/Terms.module.scss";
import { Helmet } from "react-helmet";

const Terms = () => {
  return (
    <div className={styles.cookieContainer}>
      <Helmet>
        <meta name="description" content="Terms" />
      </Helmet>
      <div className={styles.cookieTitle}>Terms and Conditions</div>
      <div className={styles.cookieText}>
        {" "}
        Please read these Terms and Conditions ("Terms", "Terms and Conditions") carefully before using viral4hupe
        operated by Viral4Hype . Your access to and use of the Site is conditioned on your acceptance of and compliance
        with these Terms. These Terms apply to all visitors, users, and others who access or use the Site. By accessing
        or using the Site you agree to be bound by these Terms. If you disagree with any part of the terms then you may
        not access the Site. Content Our Site allows you to post, link, store, share and otherwise make available
        certain information, text, graphics, videos, or other material ("Content"). You are responsible for the Content
        that you post on or through the Site, including its legality, reliability, and appropriateness. By posting
        Content on or through the Site, you represent and warrant that: (i) the Content is yours (you own it) and/or you
        have the right to use it and the right to grant us the rights and license as provided in these Terms, and (ii)
        that the posting of your Content on or through the Site does not violate the privacy rights, publicity rights,
        copyrights, contract rights or any other rights of any person or entity. We reserve the right to terminate the
        account of anyone found to be infringing on a copyright. Data Collection Our Site collects minimal data for the
        purpose of providing and improving the Service. By using the Site, you agree to the collection and use of
        information in accordance with this policy. We do not collect sensitive personal information. Any data collected
        is used solely for the operation of the Site and to communicate with you. Links To Other Web Sites Our Site may
        contain links to third-party web sites or services that are not owned or controlled by viral4hype. [Your website
        name] has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any
        third-party web sites or services. You further acknowledge and agree that viral4hype shall not be responsible or
        liable, directly or indirectly, for any damage or loss.
      </div>
    </div>
  );
};

export default Terms;
