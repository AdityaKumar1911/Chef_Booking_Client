import React from "react";
import Slider from "../OfferSlider/Slider";
import DishCarousel from "../ChefDish/ChefDish";
import OurChefs from "../OurChefs/OurChefs";
import NavBar from "../NavBar/NavBar";

function Home({ setDishName }) {
  const value = localStorage.getItem("value");
  if (!value) localStorage.setItem("value", 0);

  return (
    <div>
      <NavBar />
      <Slider />
      <DishCarousel setDishName={setDishName} />
      <OurChefs />
    </div>
  );
}

export default Home;
