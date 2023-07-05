import React from "react";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Banner = () => {
  return (
    <div className="carousel w-full h-[80vh] my-10">
      <div id="slide1" className="carousel-item relative w-full">
        
        <LazyLoadImage
          alt=""
          className="w-full bg-cover"
          src="https://storage-prtl-co.imgix.net/endor/articles/1121/images/1541434700_shutterstock_687092743.jpg?w=1440&h=575&fit=crop&auto=format,compress&q=40" // use normal <img> attributes as props
        />
        <div className="absolute inset-0 bg-black opacity-60 "></div>
        <div className="absolute inset-0 flex items-center justify-center text-white">
          <div className="text-center md:mx-0 mx-1">
            <h1 className="text-6xl font-bold mb-4">
              Welcome to <span className="text-red-500">Italian Chef Hub</span>
            </h1>
            <p className="text-lg mb-8">
              Learn about our services and how we can help you.
            </p>
            <button className="button-primary !py-3 !px-10 !rounded-lg">
              Get Started
            </button>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

      <div id="slide2" className="carousel-item relative w-full">
        <LazyLoadImage
          alt=""
          className="w-full bg-cover"
          src="https://media.istockphoto.com/id/1316145932/photo/table-top-view-of-spicy-food.jpg?s=170667a&w=0&k=20&c=fx-caeGfzahlZarBeZ_3Jl43xO85t2cs3dmIS4b4FL0=" // use normal <img> attributes as props
        />
        <div className="absolute inset-0 bg-black opacity-50 "></div>
        <div className="absolute inset-0 flex items-center justify-center text-white">
          <div className="text-center md:mx-0 mx-1">
            <h1 className="text-6xl font-bold mb-4">
              Get Your <span className="text-red-500">Food</span>
            </h1>
            <p className="text-lg mb-8">
              Learn about our services and how we can help you.
            </p>
            <button className="button-primary !py-3 !px-10 !rounded-lg">
              Get Started
            </button>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
         <LazyLoadImage
          alt=""
          className="w-full bg-cover"
          src="https://www.thedailymeal.com/img/gallery/the-ultimate-american-fast-food-restaurants-ranked/l-intro-1670029550.jpg" // use normal <img> attributes as props
        />
        <div className="absolute inset-0 bg-black opacity-50 "></div>
        <div className="absolute inset-0 flex items-center justify-center text-white">
          <div className="text-center md:mx-0 mx-1">
            <h1 className="text-6xl font-bold mb-4">
              Choose & <span className="text-red-500">Enjoy</span>
            </h1>
            <p className="text-lg mb-8">
              Learn about our services and how we can help you.
            </p>
            <button className="button-primary !py-3 !px-10 !rounded-lg">
              Get Started
            </button>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
         <LazyLoadImage
          alt=""
          className="w-full bg-cover"
          src="https://blog.dineout-cdn.co.in/blog/wp-content/uploads/2019/10/Blog-10-1030x538.jpg" // use normal <img> attributes as props
        />
        <div className="absolute inset-0 bg-black opacity-50 "></div>
        <div className="absolute inset-0 flex items-center justify-center text-white">
          <div className="text-center md:mx-0 mx-1">
            <h1 className="text-6xl font-bold mb-4">
              Delicious <span className="text-red-500">Food</span>
            </h1>
            <p className="text-lg mb-8">
              Learn about our services and how we can help you.
            </p>
            <button className="button-primary !py-3 !px-10 !rounded-lg">
              Get Started
            </button>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
