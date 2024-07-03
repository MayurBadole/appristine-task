import PropTypes from "prop-types";
import "./Header.css";

const Header = ({ className = "" }) => {
  return (
    <header className={`rectangle-container ${className}`}>
      <div className="frame-child6" />
      <div className="frame-wrapper4">
        <div className="frame-parent5">
          <div className="vector-parent5">
            <img className="vector-icon" alt="" src="/vector-130.svg" />
            <img
              className="group-icon"
              loading="lazy"
              alt=""
              src="/group-1000004709.svg"
            />
          </div>
          <a className="yachtify">Yachtify</a>
        </div>
      </div>
      <div className="frame-parent6">
        <div className="frame-wrapper5">
          <div className="home-parent">
            <a className="home">Bookings</a>
            <a className="home1">Profile</a>
          </div>
        </div>
        <button className="group-button">
          <div className="rectangle" />
          <a className="contact-us">Contact Us</a>
          <img
            className="mingcutephone-call-fill-icon"
            alt=""
            src="/mingcutephonecallfill.svg"
          />
        </button>
      </div>
    </header>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
