import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";   
import { Container, Row, Col } from "react-bootstrap";
import { contactConfig } from "./content_option"
import "./Contact.css";

function Contact() {
  return (
      <Container>
     
        <Row className="mb-5 mt-3">
          <Col lg="8">
            <h1 className="display-4 mt-4 contact-title">Contact Us</h1>
            <hr className="t_border my-4 ml-0 text-center" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5" className="mb-5">
            <h3 className="color_sec py-4">Get in touch</h3>
            <address>
              <strong>Email:</strong>{" "}
              <a href={`mailto:${contactConfig.YOUR_EMAIL}`}>
                {contactConfig.YOUR_EMAIL}
              </a>
              <br />
              <br />
              {contactConfig.hasOwnProperty("YOUR_IID") ? (
                <p>
                  <strong>Instagram:</strong> {contactConfig.YOUR_IID}
                </p>
              ) : (
                ""
              )}
            </address>
            
            {/* Social Media Links */}
            <div className="social-media-section mt-4">
              <h4 className="color_sec mb-3">Follow Us</h4>
              <div className="social-links">
                <a href="https://instagram.com/annamneedu_sravya" target="_blank" rel="noopener noreferrer" className="social-link">
                  <i className="fab fa-instagram"></i> Instagram
                </a>
                <a href="https://facebook.com/craftbridge" target="_blank" rel="noopener noreferrer" className="social-link">
                  <i className="fab fa-facebook"></i> Facebook
                </a>
                <a href="https://twitter.com/craftbridge" target="_blank" rel="noopener noreferrer" className="social-link">
                  <i className="fab fa-twitter"></i> Twitter
                </a>
                <a href="https://linkedin.com/company/craftbridge" target="_blank" rel="noopener noreferrer" className="social-link">
                  <i className="fab fa-linkedin"></i> LinkedIn
                </a>
              </div>
            </div>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <form  className="contact__form w-100">
              <Row>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Name" 
                    type="text"
                    required 
                  />
                </Col>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control rounded-0"
                    id="email"
                    name="email"
                    placeholder="Email"
                    type="email" 
                    required 
                  />
                </Col>
              </Row>
              <textarea
                className="form-control rounded-0"
                id="message"
                name="message"
                placeholder="Message"
                rows="5" 
                required
              ></textarea>
              <br />
              <Row>
                <Col lg="12" className="form-group">
                  <button className="btn ac_btn" type="submit"> 
                  Send
                  </button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
        
        {/* Copyright Section */}
        <Row className="mt-5">
          <Col lg="12">
            <div className="copyright-section text-center">
              <hr className="t_border my-4" />
              <p className="copyright-text">
                © 2024 CraftBridge. All rights reserved. | Empowering Indian Artisans
              </p>
            </div>
          </Col>
        </Row>
      </Container>
  );
}
export default Contact;