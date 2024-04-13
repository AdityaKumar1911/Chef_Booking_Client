import React from "react";
import Slider from "../OfferSlider/Slider";
import DishCarousel from "../ChefDish/ChefDish";
import OurChefs from "../OurChefs/OurChefs";
import NavBar from "../NavBar/NavBar";
import Chefbydishes from "../Chefbydishes/Chefbydishes";
import './Home.css';

function Home({ setDishName }) {
  const value = localStorage.getItem("value");
  if (!value) localStorage.setItem("value", 0);

  return (
    <div className="home">
      <NavBar />
      <Slider />
      <Chefbydishes/>
      <DishCarousel setDishName={setDishName} />
      <OurChefs />
    </div>
  );
}

export default Home;
