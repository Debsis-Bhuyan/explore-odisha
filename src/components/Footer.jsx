import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLink,
  FaTwitterSquare,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row gap-2 w-full px-8 py-8 items-center justify-between text-[14px] text-gray-700 dark:text-gray-500">
      <p>©ExploreOdisha</p>
      <div className="flex gap-2 text-[20px] md:hidden lg:flex">
        <Link to="https://www.youtube.com/@OdishaTourismOfficial" className="text-red-600">
          <FaYoutube />
        </Link>
        <Link to="https://www.facebook.com/OdishaTourismOfficial" className="text-blue-600">
          <FaFacebook />
        </Link>
        <Link to="https://www.instagram.com/odishatourismofficial/" className="text-rose-600">
          <FaInstagram />
        </Link>
        <Link to="https://odishatourism.gov.in/" className="text-blue-500">
          <FaLink />
        </Link>
        <Link to="https://twitter.com/odisha_tourism" className="text-blue-500">
          <FaTwitterSquare />
        </Link>
      </div>
      <dir className="flex gap-5">
        <Link to="/explore-odisha">Explore</Link>
        <Link to="/contact-us">Contact</Link>
        <Link to="/">Terms of Service</Link>
        <Link to="/">Privacy Policy</Link>
      </dir>
    </div>
  );
};

export default Footer;
