import { Box } from '@mui/material';
import React from 'react'
import Slider from "react-slick";


const SliderComponent = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
      };
      const images = [
        {
          img: './images/bs.png'
        },
        {
          img: './images/css3.png'
        },
        {
          img: './images/got.png'
        },
        {
          img: './images/html5.png'
        },
        {
          img: './images/illustrator.png'
        },
        {
          img: './images/javasc.png'
        },
        {
          img: './images/mui.png'
        },
        {
          img: './images/photoshop.png'
        },
        {
          img: './images/premiere.png'
        },
        {
          img: './images/react.png'
        },
        {
          img: './images/ts.png'
        },
      ]
    return (
        <div>
            <Slider {...settings}>
              <div>
                {
                  images.map((e) => {
                    return(
                      <img src={e.img} alt='a' style={{width: '100px', height: '100px', objectFit: 'contain'}}/>
                    )
                  })
                }
                </div>
            </Slider>
        </div>
  )
}

export default SliderComponent;