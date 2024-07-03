import PropTypes from "prop-types";
import "./FrameComponent.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <section className={`dugout-river-1-parent ${className}`}>
      <img className="dugout-river-1-icon" alt="" src="/dugoutriver-1@2x.png" />
      <div className="view-tugboat-pushing-heavy-bar-parent">
        <img
          className="view-tugboat-pushing-heavy-bar-icon"
          alt=""
          src="/viewtugboatpushingheavybargedownriveralongshorerivertransportationgoods-1@2x.png"
        />
        <div className="frame-child7" />
      </div>
      <div className="to-rent-a-boat-never-easy-befo-parent">
        <h1 className="to-rent-a">To Rent a Boat Never Easy Before</h1>
        <div className="frame-wrapper6">
          <div className="rectangle-parent1">
            <div className="frame-child8" />
            <h2 className="select-your-preference">
              Select your preference as per your convenience
            </h2>
          </div>
        </div>
      </div>
      <div className="frame-wrapper7">
        <div className="rectangle-parent2">
          <div className="frame-child9" />
          <div className="departure-location-wrapper">
            <div className="departure-location">
              <div className="place-of-departure">Place of departure</div>
              <div className="city-of-departure-wrapper">
                <div className="city-of-departure">City Of Departure</div>
              </div>
            </div>
          </div>
          <div className="frame-wrapper8">
            <div className="frame-parent7">
              <div className="frame-parent8">
                <div className="frame-wrapper9">
                  <img
                    className="frame-child10"
                    loading="lazy"
                    alt=""
                    src="/group-1000004713.svg"
                  />
                </div>
                <div className="date-separator-wrapper">
                  <div className="date-separator" />
                </div>
                <div className="select-date-parent">
                  <div className="select-date">Select date</div>
                  <div className="select-dates-wrapper">
                    <div className="select-dates">Select Dates</div>
                  </div>
                </div>
              </div>
              <div className="frame-parent9">
                <div className="time-separator-wrapper">
                  <div className="time-separator" />
                </div>
                <div className="time-parent">
                  <div className="time">Time</div>
                  <div className="select-time-wrapper">
                    <div className="select-time">Select Time</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            className="round-search-icon"
            loading="lazy"
            alt=""
            src="/roundsearch.svg"
          />
        </div>
      </div>
    </section>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
