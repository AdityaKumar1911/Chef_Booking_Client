import React from "react";
// import { Carousel } from "react-bootstrap";
import './Slider.css';


const ChefOfferSlider = () => {
  return (
    <div className="homepage-container">
      <div className="text-container">
        <h1 className="homepage-main-header-text">Bringing culinary delights to your doorstep</h1>
        <div className="typing-effect">
          <p className="selection">Handpick your preferred chef, select authentic cuisines, or delight in signature dishes</p>
        </div>
      </div>
      <div className="image-container">
        <div className="gallery">
          <div className="img-box active">
            <div className="glass">
              <p className="p-top">Step 1</p>
              <p className="p-bottom">Select a Chef</p>
            </div>
          </div>
          <div className="img-box" style={{backgroundImage: 'url("https://www.chefonwheelz.com/static/media/homepage2.925f0577f301aa62b58f.png")'}}>
          <div className="glass">
              <p className="p-top">Step 2</p>
              <p className="p-bottom">Select Date and Time</p>
            </div>
          </div>
          <div className="img-box"  style={{backgroundImage: 'url("https://www.chefonwheelz.com/static/media/homepage3.069130390283cd8c61e8.png")'}}>
          <div className="glass">
              <p className="p-top">Step 3</p>
              <p className="p-bottom">Book your slot</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefOfferSlider;
