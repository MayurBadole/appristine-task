import PropTypes from "prop-types";
import "./Footer.css";

const Footer = ({ className = "" }) => {
  return (
    <div className={`footer ${className}`}>
      <footer className="footer-child" />
      <div className="footer-container">
        <div className="footer-content">
          <div className="company-info-parent">
            <div className="company-info">
              <b className="yachtify1">Yachtify</b>
              <div className="lorem-ipsum-dolor">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </div>
            </div>
            <div className="social-links">
              <img
                className="social-links-child"
                loading="lazy"
                alt=""
                src="/group-39774.svg"
              />
              <div className="group-div">
                <div className="frame-child11" />
                <img
                  className="carbonlogo-twitter-icon"
                  loading="lazy"
                  alt=""
                  src="/carbonlogotwitter.svg"
                />
              </div>
              <div className="rectangle-parent3">
                <div className="frame-child12" />
                <img
                  className="ciyoutube-icon"
                  loading="lazy"
                  alt=""
                  src="/ciyoutube.svg"
                />
              </div>
              <div className="rectangle-parent4">
                <div className="frame-child13" />
                <img
                  className="ant-designinstagram-filled-icon"
                  loading="lazy"
                  alt=""
                  src="/antdesigninstagramfilled.svg"
                />
              </div>
            </div>
          </div>
          <div className="navigation-links">
            <h3 className="quick-links">Quick Links</h3>
            <div className="link-items">
              <div className="home2">Home</div>
              <div className="register-as-boat">Register as boat owner</div>
              <div className="register-as-broker">Register as Broker</div>
              <div className="support-links">
                <div className="contact-us1">Contact us</div>
                <div className="faqs">FAQ’S</div>
              </div>
            </div>
          </div>
          <div className="get-in-touch-parent">
            <h3 className="get-in-touch">Get In Touch</h3>
            <div className="contact-details">
              <div className="button">
                <img
                  className="mingcutephone-call-fill-icon1"
                  alt=""
                  src="/mingcutephonecallfill-1.svg"
                />
              </div>
              <div className="contact-info">
                <div className="address-details">+1 12345 67890</div>
              </div>
            </div>
            <div className="contact-details1">
              <div className="button1">
                <img
                  className="group-icon1"
                  loading="lazy"
                  alt=""
                  src="/group.svg"
                />
              </div>
              <div className="infoseoworldcom-wrapper">
                <div className="infoseoworldcom">example@gmail.com</div>
              </div>
            </div>
            <div className="location">
              <div className="location-marker">
                <div className="button2">
                  <img
                    className="mdimap-marker-icon"
                    loading="lazy"
                    alt=""
                    src="/mdimapmarker.svg"
                  />
                </div>
              </div>
              <div className="infoseoworldcom1">
                1014 N Main St, Miami, Oklahoma, 74354, United States
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="copyright-child" />
        <div className="all-rights-reserved">© 2023 All rights reserved</div>
      </div>
    </div>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
