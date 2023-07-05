/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Rating } from "@smastrom/react-rating";
import { FaRegHeart } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import "@smastrom/react-rating/style.css";


const ChefDetailsCard = ({ singleRecipe }) => {
  const { name, ingredients, method, rating } = singleRecipe;

  const [disabled, setDisabled] = useState(false);

  const handleFavoriteBtn = () => {
    toast("Added to the Favorite List! ❤️");
    setDisabled(true);
  };

  return (
    <div className="border border-gray-300 p-3 rounded-md grid content-between py-5">
      <div>
        <h5 className="text-xl text-gray-500 font-medium ">
          <span className="text-gray-700">Name: </span>
          {name}
        </h5>
        <p className="text-lg text-gray-700 font-medium mt-3">
          Ingredients are:
        </p>
        <div className="ml-4 text-gray-600">
          {ingredients?.map((ingredient, id) => (
            <li key={id}>{ingredient}</li>
          ))}
        </div>
      </div>

      <div>
        <h5 className="text-base text-gray-600 text-justify mt-4">
          <span className="text-gray-700 font-medium ">Cooking Method: </span>
          {method.slice(0, 200)}...{" "}
          <span className="text-red-500 cursor-pointer">Read More</span>
        </h5>
        <div className="flex items-center my-3">
          <Rating style={{ maxWidth: 120 }} value={rating} readOnly />
          <p className="text-lg ml-2 to-gray-500 ">{rating} out of 5</p>
        </div>
        <div className="flex">
          <button
            disabled={disabled}
            onClick={handleFavoriteBtn}
            className=" btn btn-sm btn-error bottom-0 flex items-center capitalize text-white rounded-sm bg-red-500 font-medium px-5 hover:bg-red-600"
          >
            {" "}
            Add to <FaRegHeart className="ml-2" />
          </button>
        </div>
        <Toaster position="top-center" reverseOrder={false} />
      </div>
    </div>
  );
};

export default ChefDetailsCard;
