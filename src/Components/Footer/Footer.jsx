import React from 'react';
import './Footer.css'; 


import gglImage from '../../assets/images/ggl.png';
import playstoreImage from '../../assets/images/playstore.png';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-columns">
          <div className="footer-column">
            <ul>
              <li><h1>Need Help</h1></li>
              <li><p>Contact Us</p></li>
              <li><p>Track Order</p></li>
              <li><p>Returns & Refunds</p></li>
              <li><p>FAQ's</p></li>
              <li><p>Career</p></li>
            </ul>
          </div>
          <div className="footer-column">
            <ul>
              <li><h1>Company</h1></li>
              <li><p>About Us</p></li>
              <li><p>euphoria Blog</p></li>
              <li><p>euphoriastan</p></li>
              <li><p>Collaboration</p></li>
            </ul>
          </div>
          <div className="footer-column">
            <ul>
              <li><h1>More Info</h1></li>
              <li><p>Term and Conditions</p></li>
              <li><p>Privacy Policy</p></li>
              <li><p>Shipping Policy</p></li>
              <li><p>Sitemap</p></li>
            </ul>
          </div>
          <div className="footer-column">
            <ul>
              <li><h1>Location</h1></li>
              <li><p>support@euphoria.in</p></li>
              <li><p>Eklingpura Chouraha, Ahmedabad Main Road</p></li>
              <li><p>(NH 8- Near Mahadev Hotel) Udaipur, India- 313002</p></li>
            </ul>
          </div>
        </div>
        <div className="footer-social-media">
          <div className="social-icons">
            <a href="https://github.com/sakthi637" aria-label="GitHub"><i className="fab fa-github"></i></a>
            <a href="https://x.com/Sakthish63?s=09" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
            <a href="https://www.instagram.com/s_akthi_z?igsh=dzc4N3diaTFqeG93" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
            <a href="https://www.linkedin.com/in/sakthish-s-9a0089241" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
          </div>
          <div className="footer-info">
            <h1>Download The App</h1>
            <div className="info-columns">
              <div className="info-column">
                <img src={gglImage} alt="Google Play Store" />
              </div>
              <div className="info-column">
                <img src={playstoreImage} alt="Apple App Store" />
              </div>
            </div>
          </div>
        </div>
        <div className="footer-category">
          <select>
            <option value="category1">Popular Categories</option>
            <option value="category2">Category 2</option>
            <option value="category3">Category 3</option>
            <option value="category4">Category 4</option>
          </select>
        </div>
        <div className="footer-copyright">
          <p>&copy; Copyright © 2023 Euphoria Folks Pvt Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
