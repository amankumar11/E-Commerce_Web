import React from "react";
import "../assets/css/landingPage.css";
import Navbar from "../components/Navbar";
import landingBanner from "../assets/img/landing_banner.webp";
import LandingCard from "../components/LandingCard";
import sofagrey from "../assets/img/products/sofa-grey.webp";

const Landing = () => {
  return (
    <div>
      <Navbar />
      <div className="landing">
        <img src={landingBanner} alt="landingBanner" width="100%"></img>
      </div>
      <div className="services-landing">
        <h1>Our Services</h1>
        <div className="card-layout">
          <LandingCard
            productName="Grey Sofa"
            price="₹20,000"
            imageUrl={sofagrey}
          />
          <LandingCard
            productName="Grey Sofa"
            price="₹20,000"
            imageUrl={sofagrey}
          />
          <LandingCard
            productName="Grey Sofa"
            price="₹20,000"
            imageUrl={sofagrey}
          />
        </div>
        <button className="seeall-btn">See All</button>
      </div>
      <div className="products-landing">
        <h1>Our Products</h1>
        <div className="card-layout">
          <LandingCard
            productName="Grey Sofa"
            price="₹20,000"
            imageUrl={sofagrey}
          />
          <LandingCard
            productName="Grey Sofa"
            price="₹20,000"
            imageUrl={sofagrey}
          />
          <LandingCard
            productName="Grey Sofa"
            price="₹20,000"
            imageUrl={sofagrey}
          />
        </div>
        <button className="seeall-btn">See All</button>
      </div>
    </div>
  );
};

export default Landing;
