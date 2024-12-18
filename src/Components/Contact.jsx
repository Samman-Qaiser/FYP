import React from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <div className={styles.gridContainer}>
      <img className={styles.robo} src="contactrobo.png" alt="robo" />
      <div className={styles.blob}>
        <div className={styles.textContainer}>
          <h1>Get In Touch</h1>
          <p>Hi! We're always here to help you.</p>
          <div className={styles.gmailBox}>
            <i className="fa-solid fa-envelope"></i>
            <span>blemishbot.support@gmail.com</span>
          </div>
          <br />
          <hr style={{ color: 'rgba(250,250,250, 0.3)' }} />
          <br />
          <p style={{ textAlign: 'center', fontSize: '1.2rem' }}>Connect with us:</p>
          <div className={styles.connectIcon}>
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-twitter"></i>
          </div>
        </div>
      </div>
      <div className={styles.contactFormContainer}>
        <div className={styles.formbox}>
          <h1 style={{ color: "#9885e8", marginBottom: "0.5rem" }}>
            We'd love to hear from you!
          </h1>
          <p>
            Whether you have a question, feedback, or just want to say hello,
            feel free to reach out to us. We'll get back to you as soon as
            possible.
          </p>
          <form className={styles.inputContainer}>
            <label htmlFor="firstName">First Name</label>
            <input type="text" placeholder="Enter your first name" />
            <label htmlFor="lastName">Last Name</label>
            <input type="text" placeholder="Enter your last name" />
            <label htmlFor="email">Email Address</label>
            <input type="email" placeholder="Enter your email" />
            <label htmlFor="help">How can we help?</label>
            <input type="text" placeholder="Enter your message here..." />
            <button className={styles.submitButton}>Send a Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
