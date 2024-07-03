import PropTypes from "prop-types";
import "./ListingContainer.css";

const ListingContainer = ({ className = "", rectangle24 }) => {
  return (
    <div className={`listing-container ${className}`}>
      <div className="listing-items">
        <img className="listing-items-child" alt="" src={rectangle24} />
        <div className="listing-details">
          <img
            className="listing-details-child"
            alt=""
            src="/rectangle-8869.svg"
          />
          <div className="listing-attributes">
            <div className="listing-background" />
            <div className="listing-overlay" />
            <div className="listing-border" />
          </div>
        </div>
      </div>
      <div className="listing-titles">
        <div className="listing-titles-child" />
        <div className="yacht-charter-in">Yacht charter in Le Gosier</div>
        <div className="listing-address">
          <div className="address-container">
            <img
              className="mappin-icon"
              loading="lazy"
              alt=""
              src="/mappin.svg"
            />
            <div className="address-label">
              <div className="washington-ave-manchester">
                4517 Washington Ave. Manchester, Kentucky 39495
              </div>
            </div>
          </div>
          <div className="guest-info">
            <div className="guest-details">
              <div className="guest-icons">
                <img
                  className="users-icon"
                  loading="lazy"
                  alt=""
                  src="/users.svg"
                />
                <div className="guest-count">
                  <div className="guest-number">9</div>
                </div>
              </div>
              <div className="pet-policy">
                <img
                  className="pawprint-icon"
                  loading="lazy"
                  alt=""
                  src="/pawprint.svg"
                />
                <div className="pet-label">
                  <div className="pets-arent-allowed">Pets aren’t allowed</div>
                </div>
              </div>
              <div className="boat-categories">
                <img
                  className="cards-icon"
                  loading="lazy"
                  alt=""
                  src="/cards.svg"
                />
                <div className="category-label">
                  <div className="boat-type1">Boat Type</div>
                </div>
              </div>
            </div>
            <div className="listing-navigation">
              <img
                className="listing-navigation-child"
                alt=""
                src="/vector-2.svg"
              />
            </div>
          </div>
        </div>
        <div className="listing-pricing">
          <div className="price-details">
            <div className="price-250-container">
              <span>{`Price : `}</span>
              <span className="span">$250</span>
            </div>
            <div className="per-hour">Per Hour</div>
          </div>
        </div>
      </div>
    </div>
  );
};

ListingContainer.propTypes = {
  className: PropTypes.string,
  rectangle24: PropTypes.string,
};

export default ListingContainer;
