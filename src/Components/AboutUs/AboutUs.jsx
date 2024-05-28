import React from "react";
import "./AboutUS.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Footer from "../Footer";
function AboutUs() {
  return (
    <div>
    <div className="fe">
      <div className="container2">
        <h1 style={{ transform: "translateX(-10%)" }} className="mt-4 mb-4">
          About Us
        </h1>
        <p>
          Welcome to our website! We are a dedicated team of professionals
          passionate about providing high-quality products and services to our
          customers.
        </p>
        <p>
          Our mission is to make your life easier by offering a wide range of
          products that cater to your needs. Whether you're looking for
          state-of-the-art technology, stylish fashion, or household essentials,
          we have you covered.
        </p>
        <p>
          We take pride in our commitment to customer satisfaction and strive to
          exceed your expectations. If you have any questions or feedback,
          please don't hesitate to contact us through our{" "}
          <a
            style={{ color: "black", textDecoration: "underline" }}
            href="/ContactUs"
          >
            Contact Us
          </a>{" "}
          page.
        </p>

        {/* Social Media Links */}
        <div className="mt-4" style={{ transform: "translateX(-10%)" }}>
          <h3>Connect with Us:</h3>
          <ul className="list-inline">
            <li className="list-inline-item">
              <a
                href="https://www.linkedin.com/in/your-linkedin-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="btn  btn-social btn-linkedin"
              >
                <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
              </a>
            </li>
            <li className="list-inline-item">
              <a
                href="https://github.com/your-github-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="btn  btn-social btn-github"
              >
                <FontAwesomeIcon icon={faGithub} /> GitHub <br />
              </a>
            </li>
            <li className="list-inline-item">
              <a
                href="https://www.facebook.com/your-facebook-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="btn  btn-social btn-facebook"
              >
                <FontAwesomeIcon icon={faFacebook} /> Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
}

export default AboutUs;
