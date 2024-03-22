import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export const Home = () => {
  return (
    <div className="home-container">
      <main className="mainContainer">
        <h2 style={{ display: "flex", marginBottom: "20px" }}>
          Featured Destinations:
        </h2>
        <section className="featured-destinations">
          <Link
            to="/treks"
            className="destination-card"
            style={{ backgroundImage: "url('/images/Trek2.jpg')" }}
          >
            <div className="cardData">
              <h3>Treks</h3>
            </div>
          </Link>
          <Link
            to="/temples"
            className="destination-card"
            style={{ backgroundImage: "url('/images/Rajastan.jpg')" }}
          >
            <div className="cardData">
              <h3>Temples</h3>
            </div>
          </Link>
          <Link
            to="/Table_lands"
            className="destination-card"
            style={{ backgroundImage: "url('/images/Vally.jpg')" }}
          >
            <div className="cardData">
              <h3>Table Land</h3>
            </div>
          </Link>
          <Link
            to="/Touring"
            className="destination-card"
            style={{ backgroundImage: "url('/images/destin.jpg')" }}
          >
            <div className="cardData">
              <h3>Touring</h3>
            </div>
          </Link>
          <Link
            to="/Touring"
            className="destination-card"
            style={{ backgroundImage: "url('/images/destin.jpg')" }}
          >
            <div className="cardData">
              <h3>Touring</h3>
            </div>
          </Link>
        </section>
      </main>
    </div>
  );
};
