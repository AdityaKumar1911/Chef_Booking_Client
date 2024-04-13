import React from "react";
import { Carousel } from "react-bootstrap";
import './Slider.css'

const ChefOfferSlider = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src="https://img.freepik.com/free-photo/chef-cooking-kitchen-while-wearing-professional-attire_23-2151208326.jpg?t=st=1712907208~exp=1712910808~hmac=01047df60750cdf47bba57f9ae17867371c2ed68b3e09adf7d35b51f86d6e0ef&w=1060"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Chef Offer 1</h3>
          <p>Description of the offer 1</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/free-photo/cook-putting-boiled-egg-plate-with-salad_23-2148040234.jpg?t=st=1712907257~exp=1712910857~hmac=5d643bcebb160e43ad4c63ebd752b1f48853dd6f3906901c63e9a75218691be9&w=1060"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Chef Offer 2</h3>
          <p>Description of the offer 2</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/free-photo/young-man-throwing-red-bell-pepper-while-cutting-red-chili-chopping-board_23-2147863580.jpg?t=st=1712915554~exp=1712919154~hmac=e1ceeb4d358120d0708a54220a1ec2a2a209ea1fc475a3017303394c2c0be0ab&w=1060"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Chef Offer 3</h3>
          <p>Description of the offer 3</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default ChefOfferSlider;
