import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10 bottom-0 left-0 w-full">
      <div className="my-container mx-auto flex flex-wrap">
        <div className="md:w-2/3 w-full  mb-4 flex justify-between">
        <div className="w-full lg:w-1/3  mb-4">
          <h2 className="text-xl  mb-4">Contact Info</h2>
          <p>1234 Main St.</p>
          <p>Suite 101</p>
          <p>Anytown, Italy 12345</p>
          <p>(123) 456-7890</p>
          <div className="flex pt-4">
            <a href="#" className="pr-4">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="pr-4">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="pr-4">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
        <div className="w-full lg:w-1/3 px-4 mb-4">
          <h2 className="text-xl  mb-4">Useful Links</h2>
          <ul>
            <li className="pb-2">
              <Link className="hover:text-red-500" to='/'>Home</Link>
            </li>

            <li className="pb-2">
            <Link className="hover:text-red-500" to='/blog'>Blog</Link>
              
            </li>
            <li className="pb-2">
              <Link className="hover:text-red-500" to="">Contact Us</Link>
            </li>
          </ul>
        </div>
        </div>
        <div className="w-full lg:w-1/3 px-4 mb-4">
          <h2 className="text-xl font-medium mb-4">Subscribe</h2>
          <div>
            <div className="flex items-center mb-4">
              <input
                type="email"
                className="rounded-l-lg py-2 px-4 bg-white text-gray-800 "
                placeholder="Email Address"
              />
              <button className="bg-red-500 rounded-r-lg py-2 px-4 hover:bg-red-600 font-medium text-white">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center ">
        @Copyright <Link to='https://github.com/Abid191' className="text-red-400">Abid191</Link>
      </p>
    </footer>
  );
};

export default Footer;
