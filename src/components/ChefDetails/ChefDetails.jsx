/* eslint-disable no-unused-vars */
import React from "react";
import { FcLike } from "react-icons/fc";
import { useLoaderData } from "react-router-dom";
import ChefDetailsCard from "./ChefDetailsCard";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const ChefDetails = () => {
  const chefData = useLoaderData();
  const {
    name,
    picture,
    description,
    likes,
    recipesNo,
    experience,
    recipesDetails,
  } = chefData;
  return (
    <div className="my-container my-10">
      <h3 className="text-3xl font-Kaushan text-center text-red-500 mb-10">
        About Chef
      </h3>
      <div className="md:flex md:gap-10 ">
        <div className="md:w-3/12 w-full">
          <LazyLoadImage className="w-screen" effect="blur" alt=""  src={picture} />
          <h3 className="text-3xl mb-3 mt-5 text-center text-gray-600 font-medium">
            {name}
          </h3>
          <p className="text-base text-gray-500 text-center font-medium">
            The Chef
          </p>
        </div>

        <div className="md:w-9/12 ">
          <div>
            <div>
              <h5 className="text-xl my-3 text-gray-800 font-medium">
                Description
              </h5>
              <p className="text-base text-gray-600 text-justify">
                {description}
              </p>
            </div>
            <div className="mt-10">
              <h5 className="text-xl my-3 text-gray-800 font-medium">
                Basic Info
              </h5>
              <p className="text-base text-gray-600 font-medium">
                <span className="text-gray-700">Experience:</span> {experience}{" "}
                Years
              </p>
              <div className="flex items-center justify-start gap-20">
                <p className="text-base text-gray-600 font-medium">
                  <span className="text-gray-700">No of Recipes:</span>{" "}
                  {recipesNo}
                </p>
                <div className="flex items-center">
                  <FcLike className="text-xl mr-2" />{" "}
                  <span className="text-base text-gray-600 font-medium">
                    {" "}
                    {likes}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recipes details card  */}

      <div>
        <h5 className="text-2xl mb-3 mt-16 text-gray-800 font-medium">
          Recipe Details
        </h5>

        <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
          {recipesDetails?.map((singleRecipe, id) => (
            <ChefDetailsCard key={id} singleRecipe={singleRecipe} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChefDetails;
