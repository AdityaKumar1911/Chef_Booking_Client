import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"; // Import the styles for the carousel
import "../ChefDish/ChefDish.css";
const dishes = [
  {
    name: "Pizza",
    image: "https://chefonwheelz.s3.ap-south-1.amazonaws.com/dishes/Pizza.webp",
  },
  {
    name: "Kathiawadi food",
    image:
      "https://chefonwheelz.s3.ap-south-1.amazonaws.com/dishes/Kathiawadi+food.webp",
  },
  {
    name: "Pasta",
    image: "https://chefonwheelz.s3.ap-south-1.amazonaws.com/dishes/Pasta.webp",
  },
  // Add more dish objects here
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const DishCarousel = () => {
  return (
    <>
      <h3 className="mt-4 mb-4 text-center">Chef by Dishes</h3>
      <Carousel
        responsive={responsive}
        infinite
        autoPlay
        autoPlaySpeed={3000}
        keyBoardControl
        transitionDuration={500}
        containerClass="container-border-green"
        removeArrowOnDeviceType={["tablet", "mobile"]}
      >
        {dishes.map((dish, index) => (
          <div className="dish-card " key={index}>
            <img
              src={dish.image}
              alt={dish.name}
              style={{ width: "100%", height: "250px" }}
            />
            <p className="dish-name">{dish.name}</p>
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default DishCarousel;
