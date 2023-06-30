import React from 'react'
import ReactOwlCarousel from "react-owl-carousel";
import Slider from "react-slick";

function MobieEngaging({ foldData }) {
  console.log(foldData, "mobileView")
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    margin: 50,
    arrows: false
  };
  return (
    <div>
      <Slider
       {...settings}
      >
       <div>
        <h3>1</h3>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
        
      </Slider></div>
  )
}

export default MobieEngaging