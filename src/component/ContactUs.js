import React from 'react';
import Navbar from './Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhone,
  faInstagram,
  faLinkedin,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import {
  faInstagram as fabInstagram,
  faLinkedin as fabLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import styles from '../css/ContactUs.module.css';

const ContactUs = () => {
  return (
    <> <Navbar />
      <section id="contact-us" className={styles.contactCard}>
        <h1>
          Contact <span className={styles.contactUsText}>Us</span>
        </h1>
        <p className={styles.contactDescription}>
          🚀 Are you eager to kickstart your career in sales and be a part of our
          dynamic team? Join us today and let's initiate the dialogue. 🌟 We promise
          to make your growth a top priority and equip you with invaluable sales
          experience. 💪 Let's embark on this exciting journey together! 🌠
          #SalesOpportunity #CareerGrowth
        </p>
        <p className={styles.contactDescription}>
          <strong>About Us</strong> Established in 2016, Codalien Technologies is a
          trailblazing force in the world of technology and innovation. With ISO
          9001:2015 and ISO 27001:2013 certifications, we are committed to quality
          and security. Our core competencies include Custom Software Solutions
          Development, IoT, Artificial Intelligence and Machine Learning, and Data
          Engineering. We've collaborated with industry leaders such as BMW,
          American Express, and Uber. Our mission is to revolutionize the digital
          landscape, fostering innovation, inspiring growth, and forging strategic
          partnerships. Codalien Technologies is dedicated to propelling businesses
          forward in a rapidly evolving digital world.
        </p>
        {/* <p className={styles.contactDescription}>
          <strong>Address: </strong> A-49, Block A, Mohan Cooperative Industrial
          Estate, Badarpur, New Delhi, Delhi 110044
        </p> */}
        <p className={`${styles.contactUsText} ${styles.address}`}>
          <strong>Address: </strong> A-49, Block A, Mohan Cooperative Industrial Estate, Badarpur, New Delhi, Delhi 110044
        </p>
        <p className={styles.connectWithUsText}>Connect with Us</p>
        <div className={styles.contactContainer}>
          <div className={styles.contactInfo}>
            <strong>
              <FontAwesomeIcon icon={faPhone} />
            </strong>
            <p style={{ display: 'contents', verticalAlign: 'middle', fontSize: '18px', margin: '6px' }}>
              <strong>098733 33033</strong>
            </p>
          </div>
          <div className={styles.contactIcons}>
            <div className={styles.contactLink}>
              <a href="https://www.instagram.com/codalien/" target="_blank">
                <FontAwesomeIcon icon={fabInstagram} size="2x" />
              </a>
            </div>
            <div className={styles.contactLink}>
              <a href="https://www.linkedin.com/company/codalien/mycompany/" target="_blank">
                <FontAwesomeIcon icon={fabLinkedin} size="2x" />
              </a>
            </div>
            <div className={styles.contactLink}>
              <a href="mailto:contact@codalien.com">
                <FontAwesomeIcon icon={faEnvelope} size="2x" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;