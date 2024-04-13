import React from "react";
import Slider from "../OfferSlider/Slider";
import DishCarousel from "../ChefDish/ChefDish";
import OurChefs from "../OurChefs/OurChefs";
import NavBar from "../NavBar/NavBar";

function Home() {
  const value = localStorage.getItem("value");
  if (!value) localStorage.setItem("value", JSON.stringify(0));

  return (
    <div>
      <NavBar />
      <Slider />
      <DishCarousel />
      <OurChefs />
    </div>
  );
}

export default Home;
