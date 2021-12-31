import React from "react";
import "./DetailsCarousel.scss";

const DetailsCarousel = (props) => {
  
  return (
    <div className="details-carousel">
      <div className="box">
        <div className="slide-img">
          <img
            src="https://assets.mubicdn.net/images/notebook/post_images/19893/images-w1400.jpg?1449196747"
            alt=""
          />
        </div>
      </div>

      <button className="switchLeft sliderBtn" onClick={()=>{}}>
        L
      </button>
      <button className="switchRight sliderBtn" onClick={()=>{}}>
        R
      </button>
    </div>
  );
};

export default DetailsCarousel;
