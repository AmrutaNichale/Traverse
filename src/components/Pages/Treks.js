import React from "react";
import "./Home.css";

export const Treks = () => {
  return (
    <div className="home-container">
      <main style={{ margin: "0px 25px" }}>
        <h2 style={{ display: "flex", marginBottom: "20px" }}>Treks:</h2>
        <section className="featured-destinations">
          <div className="destination-card">
            <div
              className="fortData"
              style={{ backgroundImage: "url('/images/Rajgad.jpg')" }}
            >
              <h3>Rajgad</h3>
            </div>
          </div>
          <div className="destination-card">
            <div
              className="fortData"
              style={{ backgroundImage: "url('/images/Trek1.jpg')" }}
            >
              <h3>Rajmachi</h3>
            </div>
          </div>
          <div className="destination-card">
            <div
              className="fortData"
              style={{ backgroundImage: "url('/images/Trek1.jpg')" }}
            >
              <h3>Raigad</h3>
            </div>
          </div>
          <div className="destination-card">
            <div
              className="fortData"
              style={{ backgroundImage: "url('/images/Trek2.jpg')" }}
            >
              <h3>Torna</h3>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
