import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const AboutUs = () => {
  return (
    <div>
      <div className="mt-36 my-container md:flex items-center ">
        <div className="mb-10 md:w-6/12 px-2">
          <h3 className="text-2xl font-Kaushan  text-red-500 mb-3">About Us</h3>
          <h3 className="text-4xl  font-bold text-gray-600 mb-4">
            Our Journey History
          </h3>
          <p className=" text-lg  text-gray-600 text-justify">
            Founded in 2010, our company started as a small food truck in
            downtown LA. Over the years, we have grown into a successful
            restaurant chain with locations across the country. We have won
            numerous awards for our innovative cuisine and commitment to
            sustainable sourcing. Today, we continue to push culinary boundaries
            and bring new flavors to our loyal customers. Join us on our journey
            of culinary exploration!
          </p>
          <button className="button-secondary !py-3 !px-10 text-xl mt-5 ">
            Read More
          </button>
        </div>
        <div className="relative my-36 md:my-0">
          <div className="md:ml-36">
            <LazyLoadImage
              effect="blur"
              alt=""
              height="450px"
              src="https://templatemanja.com/tashan/demo/assets/images/about_img2.jpg"
              width="360px"
            />
          </div>
          <div className="absolute md:-top-20 -top-24 md:-right-20 right-0">
            <LazyLoadImage
              effect="blur"
              alt=""
              height="220px"
              src="https://templatemanja.com/tashan/demo/assets/images/about_img3.jpg"
              width="196px"
            />
          </div>
          <div className="absolute md:bottom-10 md:left-10 -bottom-32 ">
            <LazyLoadImage
              effect="blur"
              alt=""
              height="200px"
              src="	https://templatemanja.com/tashan/demo/assets/images/about_img4.jpg"
              width="196px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
