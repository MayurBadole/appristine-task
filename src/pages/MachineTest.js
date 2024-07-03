import FrameComponent1 from "../components/Header";
import FrameComponent from "../components/FrameComponent";
import ListingContainer from "../components/ListingContainer";
import Footer from "../components/Footer";
import "./MachineTest.css";
import Pagination from "../components/Pagination";
import FilterSection from "../components/FilterSection";

const MachineTest = () => {
  return (
    <div className="machine-test">
      <div className="div">$5000</div>
      <FrameComponent1 />
      <main className="frame-parent">
        <FrameComponent />
        <section className="frame-wrapper">
          <div className="frame-group">
            <div className="frame-container">
              <FilterSection />
              <div className="calendar-banner">
                <div className="calendar-button">
                  <div className="calendar-button-child" />
                  <img
                    className="calendar-icon"
                    loading="lazy"
                    alt=""
                    src="/calendar.svg"
                  />
                  <div className="calendar-label">
                    <div className="add-date">{`Add date & time to find your ideal boat for the best price`}</div>
                  </div>
                  <img
                    className="xcircle-icon"
                    loading="lazy"
                    alt=""
                    src="/xcircle.svg"
                  />
                </div>
                <div className="charter-listings">
                  <div className="charter-listings-child" />
                  <ListingContainer rectangle24="/rectangle-24@2x.png" />
                  <ListingContainer rectangle24="/rectangle-24@2x.png" />
                  <ListingContainer rectangle24="/rectangle-24@2x.png" />
                  <ListingContainer rectangle24="/rectangle-24@2x.png" />
                  <ListingContainer rectangle24="/rectangle-24@2x.png" />
                  <ListingContainer rectangle24="/rectangle-24@2x.png" />
                  <ListingContainer rectangle24="/rectangle-24@2x.png" />
                  <ListingContainer rectangle24="/rectangle-24@2x.png" />
                  <ListingContainer rectangle24="/rectangle-24@2x.png" />
                </div>
              </div>
            </div>
            <Pagination />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default MachineTest;
