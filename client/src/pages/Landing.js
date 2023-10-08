import React from "react";
import "../assets/css/landingPage.css";
import landingBanner from "../assets/img/landing_banner.webp";
import LandingCard from "../components/ItemCard";
import sofagrey from "../assets/img/products/sofa-grey.webp";

const Landing = () => {
  return (
    <div>
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
            height="520px"
            width="450px"
            imgHeight="400px"
          />
          <LandingCard
            productName="Grey Sofa"
            price="₹20,000"
            imageUrl={sofagrey}
            height="520px"
            width="450px"
            imgHeight="400px"
          />
          <LandingCard
            productName="Grey Sofa"
            price="₹20,000"
            imageUrl={sofagrey}
            height="520px"
            width="450px"
            imgHeight="400px"
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
            height="520px"
            width="450px"
            imgHeight="400px"
          />
          <LandingCard
            productName="Grey Sofa"
            price="₹20,000"
            imageUrl={sofagrey}
            height="520px"
            width="450px"
            imgHeight="400px"
          />
          <LandingCard
            productName="Grey Sofa"
            price="₹20,000"
            imageUrl={sofagrey}
            height="520px"
            width="450px"
            imgHeight="400px"
          />
        </div>
        <button className="seeall-btn">See All</button>
      </div>
    </div>
  );
};

export default Landing;
