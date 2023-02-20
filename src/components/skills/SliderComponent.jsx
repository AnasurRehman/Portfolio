import { Box } from "@mui/material";
import React from "react";
import "./Skills.css";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const SliderComponent = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  const images = [
    {
      img: "./images/bs.png",
    },
    {
      img: "./images/css3.png",
    },
    {
      img: "./images/got.png",
    },
    // {
    //   img: "./images/html5.png",
    // },
    // {
    //   img: "./images/illustrator.png",
    // },
    // {
    //   img: "./images/javasc.png",
    // },
    // {
    //   img: "./images/mui.png",
    // },
    // {
    //   img: "./images/photoshop.png",
    // },
    // {
    //   img: "./images/premiere.png",
    // },
    // {
    //   img: "./images/react.png",
    // },
    // {
    //   img: "./images/ts.png",
    // },
  ];
  return (
    // <div class="slide-container">
    //   <span class="slider-span" id="slider-span1"></span>
    //   <span class="slider-span" id="slider-span2"></span>
    //   <span class="slider-span" id="slider-span3"></span>
    <div>
      {images.map((img, key) => {
        return (
          <div class="slide-container">
            <span class="slider-span" id="slider-span"></span>
            <span class="slider-span" id="slider-span2"></span>
            <span class="slider-span" id="slider-span3"></span>

            <div class="image-slider">
              <div class="slides-div" id="slide-1">
                <img src={img} alt="" class="img" id="img1" />
                <a href="#slider-span1" class="button" id="button-1"></a>
              </div>
            </div>
          </div>
        );
      })}
      {/* //   <div class="image-slider">
    //     <div class="slides-div" id="slide-1">
    //       <img src="images/headset.jpg" alt="" class="img" id="img1" />
    //       <a href="#slider-span1" class="button" id="button-1"></a>
    //     </div>
    //     <div class="slides-div" id="slide-2">
    //       <img src="images/headset.jpg" alt="" class="img" id="img2" />
    //       <a href="#slider-span2" class="button" id="button-2"></a>
    //     </div>
    //     <div class="slides-div" id="slide-3">
    //       <img src="images/headset.jpg" alt="" class="img" id="img3" />
    //       <a href="#slider-span3" class="button" id="button-3"></a>
    //     </div>
    //   </div>
    // </div> */}
    </div>
  );
};

export default SliderComponent;
