import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./aboutus.css";

const AboutUs: React.FC = () => {
  return (
    <div className="about-us-container">
      <h2>About Us</h2>
      <p>
        Welcome to Twins Tails, your trusted partner in pet care and services.
        We are dedicated to offering the best products and advice for your furry
        friends.
      </p>
      <p>
        Whether you’re looking for pet food, accessories, or expert advice,
        Twins Tails is here to help you every step of the way.
      </p>
      <div className="contact-info">
        <h3>Contact Us</h3>
        <p>
          Email: <a href="mailto:info@twinstails.com">info@twinstails.com</a>
        </p>
        <p>
          WhatsApp: <a href="https://wa.me/1234567890">+92 300-1234-567</a>
        </p>
        <div className="social-media">
          <a
            href="https://facebook.com/twinstails"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            href="https://twitter.com/twinstails"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            href="https://instagram.com/twinstails"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://linkedin.com/company/twinstails"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
      <div className="company-details">
        <h3>Our Mission</h3>
        <p>
          At Twins Tails, we believe that pets are family. Our mission is to
          provide top-notch products and services that cater to the unique needs
          of every pet and their owners. We strive to make pet care easier and
          more enjoyable.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
