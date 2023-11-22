import React from "react";

const Portfolio = () => {
  return (
    <div className="portfolio-section">
      <div className="portfolio-container">
        <h5>PORTFOLIO</h5>
        <h1>Recent Projects</h1>
        <div className="projects">
          <div className="col-6" id="project1">
            <div className="content">
              <h6>Stationary</h6>
              <p>A yellow pencil with envelopes on a clean, blue backdrop!</p>
            </div>
          </div>
          <div className="col-6" id="project2">
            <div className="content">
              <h6>Ice Cream</h6>
              <p>
                A dark blue background with a colored pencil, a clip, and a tiny
                ice cream cone!
              </p>
            </div>
          </div>
          <div className="col-6" id="project3">
            <div className="content">
              <h6>Strawberries</h6>
              <p>
                Strawberries are such a tasty snack, especially with a little
                sugar on top!
              </p>
            </div>
          </div>
          <div className="col-6" id="project4">
            <div className="content">
              <h6>Workspace</h6>
              <p>
                A yellow workspace with some scissors, pencils, and other
                objects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
