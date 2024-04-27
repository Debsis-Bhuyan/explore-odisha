import React from "react";
import bgImage from "../assets/Fc Cover Page.png";
import { Link } from "react-router-dom";
const landing = {
  backgroundImage: `url(${bgImage})`,
  backgroundSize: "cover",
  backgroundRepeat: "noRepeat",
  minHeight: "50vh",
  backgroundPosition: "center",
  paddingTop: "4rem",
};

function Landing() {
  return (
    <div
      className="w-full  px-8  h-[500px]  2xl:h-[600px] sm:h-[400px]"
      style={landing}
    >
      <div className="justify-center items-center w-full  mx-auto">
        <h1 className="  text-4xl flex justify-center text-orange-600">
          India's Best Kept Secret{" "}
        </h1>
        <p className="px-4 py-4">
          Odisha, previously known as Orissa, is one of the best destinations in India to experience the beauty of nature. Besides its natural
          beauty,the state is known for its heritage sites, beaches, temples,
          natural parks, foods and culture.
        </p>
      </div>
      <div className=" pt-10 flex  justify-end mr-10 pb-10 ">
        <button className="bg-indigo-500  flex  text-white text-lg px-14  just py-1 rounded-xl">
          <Link to="/explore-odisha" className=" ">
            Explore
          </Link>
        </button>
      </div>

      
    </div>
  );
}

export default Landing;
