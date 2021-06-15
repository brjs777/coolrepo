import React from 'react'

import Slider from "react-slick";   //react-slick / example /  responsive.
import './trending.css'

const Trending = () => {
    var settings = {            // from react-slick../responsive/code...
        dots: false,
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        autoplaySpeed: 5000,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return (
        
        <>
            <div className="container-fluid shadow-lg mt-4 mb-3 py-3">
             
                <Slider {...settings}>
            <div>
                <img src="./images/symbol.jpg" className="img-fluid custom-slide" alt=""/>
            <h3>1</h3>
          </div>
          <div>
          <img src="./images/madara.jpg" className="img-fluid custom-slide" alt=""/>
            <h3>2</h3>
          </div>
          <div>
          <img src="./images/m5.jpg" className="img-fluid custom-slide" alt=""/>
            <h3>3</h3>
          </div>
          <div>
          <img src="./images/m4.jpg" className="img-fluid custom-slide" alt=""/>
            <h3>4</h3>
          </div>
          <div>
          <img src="./images/m3.jpg" className="img-fluid custom-slide" alt=""/>
            <h3>5</h3>
          </div>
          <div>
          <img src="./images/m2.jpg" className="img-fluid custom-slide" alt=""/>
            <h3>6</h3>
          </div>
          <div>
          <img src="./images/m1.jpg" className="img-fluid custom-slide" alt=""/>
            <h3>7</h3>
          </div>
          <div>
          <img src="./images/a3.jpg" className="img-fluid custom-slide" alt=""/>
            <h3>8</h3>
          </div>
        </Slider>

                </div>
           
        </>
    )
}

export default Trending
