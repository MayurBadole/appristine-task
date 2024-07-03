import React from "react";

const Pagination = () => {
  return (
    <div>
      {" "}
      <div className="action-buttons">
        <div className="button-container">
          <div className="button-row">
            <img
              className="button-row-child"
              loading="lazy"
              alt=""
              src="/group-1000004712.svg"
            />
          </div>
          <div className="pagination">
            <div className="page-dots">01</div>
            <div className="page-dots1">
              <div className="page-indicator" />
              <div className="active-page">02</div>
            </div>
            <div className="page-dots2">03</div>
            <div className="page-dots3">
              <div className="page-dots-child" />
              <div className="div4">04</div>
            </div>
            <div className="page-dots4">05</div>
          </div>
          <img
            className="button-container-child"
            loading="lazy"
            alt=""
            src="/group-1000004711.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Pagination;
