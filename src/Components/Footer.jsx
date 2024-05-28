import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <footer className="fa">
      <div className="cot"  style={containerStyle} >
        <div style={logoContainer}></div>
        <div style={contactInfo}>
          <h5 style={headingStyle}>Contact Us</h5>
          <p>Email: mayar.abdelkawi2001@gmail.com</p>
          <p>Phone: +1144771764</p>
        </div>
        <div style={quickLinks}>
          <h5 style={headingStyle}>Quick Links</h5>
          <ul style={listStyle}>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/products">Products</a>
            </li>
            <li>
              <a href="/about-us">About Us</a>
            </li>
            <li>
              <a href="/contact-us">Contact Us</a>
            </li>
          </ul>
        </div>
        <div style={socialMedia}>
          <h5 style={headingStyle}>Follow Us</h5>
          <ul style={listStyle}>
            <li>
              <a href="#">
                <i className="fab fa-facebook"></i> Facebook
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-twitter"></i> Twitter
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-linkedin"></i> LinkedIn
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-instagram"></i> Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="foot">
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </footer>
  );
}

// Styles


const containerStyle = {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "flex-start",
};

const logoContainer = {
  flex: "0 0 150px",
};

const contactInfo = {
  flex: "1",
};

const quickLinks = {
  flex: "1",
};

const socialMedia = {
  flex: "1",
};

const headingStyle = {
  fontSize: "18px",
  fontWeight: "bold",
  marginBottom: "10px",
};

const listStyle = {
  listStyle: "none",
  padding: "0",
};

const copyrightStyle = {
  textAlign: "center",
  backgroundColor: "#222",
  padding: "10px 0",
  fontSize: "14px",
};

export default Footer;
