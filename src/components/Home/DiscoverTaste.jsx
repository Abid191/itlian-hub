import React from "react";
import LazyLoad from "react-lazy-load";

const DiscoverTaste = () => {
  return (
    <div className="my-36   ">
      <LazyLoad>
        <div className="bg-[url('https://templatemanja.com/tashan/demo/assets/images/cta_bg.jpg')] bg-center bg-cover flex items-center ">
          <div className="mb-10 md:w-1/2 my-container md:ml-20 md:my-20 my-10">
            <h3 className="text-2xl font-Kaushan  text-red-500 mb-6">
              Discover Your Testy
            </h3>
            <h3 className="text-4xl text-white font-bold  mb-4">
              The Family That Bacomes Together
            </h3>
            <p className=" text-lg text-white  text-justify">
              Experience a flavor journey like no other and uncover your unique
              taste preferences. Our expert chefs will guide you through a
              variety of dishes and ingredients to help you discover new and
              exciting flavors. Join us and unlock the full potential of your
              palate.
            </p>
            <button className="button-secondary !py-3 !px-10 text-xl mt-5 ">
              Explore Now
            </button>
          </div>
        </div>
      </LazyLoad>
    </div>
  );
};

export default DiscoverTaste;
