import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-main">
          <div className="footer-logo">
            <h2>VahanCheck</h2>
            <p className="slogan">Ensuring Vehicle Compliance and Safety</p>
          </div>
          <p className="description">
            VahanCheck is dedicated to ensuring vehicle compliance and safety. 
            Our platform helps vehicle owners stay informed about expiration dates, 
            required tests, and compliance with the Motor Vehicles Act.
          </p>
        </div>
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className="footer-connect">
          <h4>Connect with us</h4>
          <ul className="social-media">
            <li>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p><FaEnvelope /> support@vahancheck.com</p>
          <p><FaPhone /> +1 234 567 890</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="copyright">
          &copy; {new Date().getFullYear()} VahanCheck. All rights reserved.
        </p>
        <p className="footer-links">
          <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a>
        </p>
      </div>
      <style jsx>{`
        .footer {
          background: linear-gradient(135deg, #1a2a6c, #b21f1f, #fdbb2d);
          color: #ffffff;
          padding: 4rem 0 2rem;
          font-family: 'Arial', sans-serif;
          position: relative;
          overflow: hidden;
        }

        .footer::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(to right, #fdbb2d, #b21f1f, #1a2a6c);
        }

        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }

        .footer-logo h2 {
          font-size: 2.5rem;
          margin: 0;
          background: linear-gradient(45deg, #fdbb2d, #b21f1f);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          display: inline-block;
        }

        .slogan {
          font-style: italic;
          margin-top: 0.5rem;
          color: #f0f0f0;
        }

        .description {
          margin-top: 1rem;
          line-height: 1.6;
        }

        h4 {
          font-size: 1.2rem;
          margin-bottom: 1rem;
          position: relative;
          display: inline-block;
        }

        h4::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -5px;
          width: 50%;
          height: 2px;
          background-color: #fdbb2d;
          transition: width 0.3s ease;
        }

        h4:hover::after {
          width: 100%;
        }

        .footer-links ul, .social-media {
          list-style: none;
          padding: 0;
        }

        .footer-links li {
          margin-bottom: 0.5rem;
        }

        .footer-links a, .footer-bottom a {
          color: #ffffff;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .footer-links a:hover, .footer-bottom a:hover {
          color: #fdbb2d;
        }

        .social-media {
          display: flex;
          gap: 1rem;
        }

        .social-media a {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.1);
          color: #ffffff;
          transition: all 0.3s ease;
        }

        .social-media a:hover {
          background-color: #fdbb2d;
          transform: translateY(-3px);
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .footer-contact p {
          display: flex;
          align-items: center;
          margin-bottom: 0.5rem;
        }

        .footer-contact svg {
          margin-right: 0.5rem;
        }

        .footer-bottom {
          margin-top: 2rem;
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          text-align: center;
        }

        .copyright {
          margin-bottom: 1rem;
        }

        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr;
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .footer-main, .footer-links, .footer-connect, .footer-contact {
          animation: fadeInUp 0.5s ease-out;
        }
      `}</style>
    </footer>
  );
};

export default Footer;