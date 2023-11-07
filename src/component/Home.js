import React from 'react';
import Navbar from './Navbar';
import styles from '../css/Home.module.css';

function Home() {
  return (
    <div className={styles.defaultContainer} id={styles.home}>
      <Navbar />
      <section className={styles.defaultContainer}>
        <h1 className={styles.head}>Technical Sales and Marketing Intern</h1>
        <p className={styles.subHeading}>Internship Period: 2-3 months</p>
        <p>
          Embark on an exciting journey into the heart of the IT universe as a{' '}
          <strong>Technical Sales and Marketing Intern at Codalien Technologies</strong>. Our internship program is not just about learning; it's about experiencing. Dive into hands-on industry exposure, earn rewarding incentives, and undergo real-world training that will elevate your sales and marketing skills.
        </p>
        <p>
          Are you a tech enthusiast with a passion for innovation? A versatile team player eager to make an impact. Join us, and let's launch your career into the dynamic world of IT sales and marketing at Codalien.
        </p>

        <h2 className={styles.head1}>
          Key <span style={{ color: '#20c997', }}>Responsibilities:</span>
        </h2>
        <ul className={styles.listOrder}>
          <li>Conduct market research to identify customers, trends, and competitors.</li>
          <li>Assist in product sales at events, co-working spaces, and promotions.</li>
          <li>Build customer relationships and address queries promptly.</li>
          <li>Earn incentives for successful sales.</li>
          <li>Analyze marketing and sales data and provide insights.</li>
          <li>Attend training, workshops, and receive mentorship.</li>
          <li>Able to attend events and travel for fieldwork.</li>
        </ul>

        <h2 className={styles.head1}>
          <span style={{ color: '#20c997' }}>Qualifications</span> and <span style={{ color: '#20c997' }}>Essentials:</span>
        </h2>
        <ul className={styles.listOrder}>
          <li>A Bachelor/Master degree in Engineering/Management (Pursuing or Completed).</li>
          <li>Strong communication skills.</li>
          <li>Enthusiastic about sales and marketing.</li>
          <li>Ability to work independently and in a team.</li>
        </ul>

        <h2 className={styles.head1}>
          What We <span style={{ color: '#20c997' }}>Offer: </span>
        </h2>
        <ul className={styles.listOrder}>
          <li>Learning opportunity from industry experts.</li>
          <li>Acquire valuable knowledge and skills.</li>
          <li>Exposure to the real-world of sales and marketing.</li>
          <li>Performance-Based Pre-Placement Offer (PPO) for outstanding interns with growth opportunities.</li>
          <li>Expand your network with industry professionals.</li>
          <li>Explore different cities for events and promotions.</li>
          <li>Unlock impressive incentives for stellar sales.</li>
          <li>Earn a prestigious Certificate of Completion.</li>
        </ul>

        <div className={styles.applyNow}>
          <a href="/apply" className={styles.applyButton}>
            Apply Now
          </a>
        </div>
      </section>
    </div>
  );
}

export default Home;