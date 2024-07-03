import React from "react";

const FilterSection = () => {
  return (
    <div>
      <div className="filter-header-parent">
        <button className="filter-header">
          <div className="filter-header-child" />
          <div className="filters">Filters</div>
        </button>
        <div className="rectangle-parent">
          <div className="frame-child" />
          <div className="frame-div">
            <div className="frame-parent1">
              <div className="budget-parent">
                <div className="budget">Budget</div>
              </div>
              <img
                className="frame-item"
                loading="lazy"
                alt=""
                src="/group-3.svg"
              />
              <div className="budget-amount">
                <div className="div1">€0</div>
                <div className="wrapper">
                  <div className="div2">€370</div>
                </div>
                <div className="div3">€1000</div>
              </div>
            </div>
          </div>
          <div className="rectangle-wrapper">
            <div className="frame-inner" />
          </div>
          <div className="frame-wrapper1">
            <div className="frame-parent2">
              <div className="add-parent">
                <img className="add-icon" alt="" src="/add.svg" />
                <div className="ellipse-div" />
              </div>
              <div className="add-group">
                <img className="add-icon1" alt="" src="/add.svg" />
                <div className="frame-child1" />
              </div>
              <div className="add-container">
                <img className="add-icon2" alt="" src="/add.svg" />
                <div className="frame-child2" />
              </div>
              <div className="rectangle-group">
                <div className="rectangle-div" />
                <div className="separator-placeholder" />
                <div className="separator-placeholder1" />
                <div className="separator-placeholder2">0</div>
                <div className="no-of-adults-parent">
                  <div className="no-of-adults">No of Adults</div>
                  <div className="frame-wrapper2">
                    <div className="adult-counter-parent">
                      <div className="adult-counter">
                        <img className="minus-icon" alt="" src="/minus.svg" />
                        <div className="adult-counter-child" />
                      </div>
                      <div className="counter-placeholder-wrapper">
                        <div className="counter-placeholder">1</div>
                      </div>
                    </div>
                  </div>
                  <div className="ages-13-or">Ages 13 or above</div>
                </div>
                <div className="separator-placeholder3">0</div>
                <div className="frame-parent3">
                  <div className="children-number-parent">
                    <div className="children-number">
                      <div className="no-of-children">No of Children</div>
                      <div className="ages-5-12">Ages 5-12</div>
                    </div>
                    <div className="no-of-cabinsbedrooms">
                      No of Cabins/Bedrooms
                    </div>
                  </div>
                  <div className="frame-wrapper3">
                    <div className="frame-parent4">
                      <div className="minus-parent">
                        <img
                          className="minus-icon1"
                          alt=""
                          src="/minus-1.svg"
                        />
                        <div className="frame-child3" />
                      </div>
                      <div className="minus-group">
                        <img
                          className="minus-icon2"
                          alt=""
                          src="/minus-1.svg"
                        />
                        <div className="frame-child4" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="frame-child5" />
                <div className="separator-placeholder4" />
                <div className="do-you-have">Do you have Pet?</div>
              </div>
              <div className="pet-answer">
                <div className="pet-answer-child" />
                <div className="yes">Yes</div>
                <div className="arrow-wrapper">
                  <img className="arrow-icon" alt="" src="/arrow.svg" />
                </div>
              </div>
            </div>
          </div>
          <div className="boat-options">
            <div className="boat-type-selection">
              <div className="boat-type-icons">
                <div className="boat-type">Boat Type</div>
                <div className="boat-icon-list">
                  <div className="boat-icon-container">
                    <input className="boat-icon-set" type="checkbox" />
                    <div className="motorboat">Motorboat</div>
                  </div>
                </div>
                <div className="boat-icon-list1">
                  <div className="vector-parent">
                    <input className="vector" type="checkbox" />
                    <div className="rib">RIB</div>
                  </div>
                </div>
                <div className="boat-icon-list2">
                  <div className="vector-group">
                    <input className="vector1" type="checkbox" />
                    <div className="houseboat">Houseboat</div>
                  </div>
                </div>
                <div className="boat-icon-list3">
                  <div className="vector-container">
                    <input className="vector2" type="checkbox" />
                    <div className="gulet">Gulet</div>
                  </div>
                </div>
                <div className="boat-icon-list4">
                  <div className="vector-parent1">
                    <input className="vector3" type="checkbox" />
                    <div className="yacht">Yacht</div>
                  </div>
                </div>
                <div className="boat-icon-list5">
                  <div className="vector-parent2">
                    <input className="vector4" type="checkbox" />
                    <div className="sailboat">Sailboat</div>
                  </div>
                </div>
                <div className="boat-icon-list6">
                  <div className="vector-parent3">
                    <input className="vector5" type="checkbox" />
                    <div className="catamran">Catamran</div>
                  </div>
                </div>
                <div className="boat-icon-list7">
                  <div className="vector-parent4">
                    <input className="vector6" type="checkbox" />
                    <div className="jek-ski">Jek SKI</div>
                  </div>
                </div>
              </div>
              <img
                className="chevron-down-icon1"
                alt=""
                src="/chevron-down-1.svg"
              />
            </div>
          </div>
          <div className="license-option">
            <div className="license-toggle">
              <input className="license-icon" type="checkbox" />
              <div className="boat-without-license">Boat without license</div>
            </div>
          </div>
          <div className="boat-size-option">
            <div className="size-divider" />
            <div className="size-label">
              <div className="boat-size">Boat size</div>
            </div>
            <div className="size-range">
              <div className="size-slider">
                <img
                  className="size-slider-child"
                  loading="lazy"
                  alt=""
                  src="/group-3.svg"
                />
                <div className="size-values">
                  <div className="mtr">5 Mtr</div>
                  <div className="unit-label">
                    <div className="mtr1">{`15 Mtr `}</div>
                  </div>
                  <div className="mtr2">20+ Mtr</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
