import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Banner,
  Card,
  Pagination,
  PopularPosts,
  PopularWriters,
} from "../components";

import { CATEGORIES, popular } from "../utils/dummyData";
import { usePopularPosts, usePosts } from "../hooks/post-hook";
import { useEffect } from "react";
import CardSlider from "../components/CardSlider";
import Carosal from "../components/CardSlider";

const Home = () => {
  const { posts, numOfPages, setPage } = usePosts({ writerId: "" });
  const popular = usePopularPosts();
  const randomIndex = Math.floor(Math.random() * posts.length);

  const handlePageChange = (val) => {
    setPage(val);

    console.log(val);
  };
  if (posts?.length < 1)
    return (
      <div className="w-full h-full py-8 flex items-center justify-center">
        <span className="text-lg text-slate-500">No Post Available</span>
      </div>
    );

  return (
    <div className="py-4 2xl:py-6 mt-4">
      <Banner />

      <div className="px-0  lg:pl-10 2xl:px-10 ">
        {/* Categories */}
        {/* <div className="mt-0 md:mt-0">
          <p className="text-2xl font-semibold text-gray-600 dark:text-white">
            Popular Categories
          </p>
          <div className="w-full flex flex-wrap py-6 gap-6">
            {CATEGORIES.map((cat, i) => (
              <Link
                to={`/explore/category?cat=${cat?.label}`}
                className={`flex items-center justify-center gap-3 ${cat.color} text-white font-semibold text-base px-4 py-2 rounded cursor-pointer`}
                key={i}
              >
                {cat?.icon}
                <span>{cat.label}</span>
              </Link>
            ))}
          </div>
        </div> */}

        <div className="w-full flex flex-col md:flex-row mb-6 gap-10 2xl:gap-16">
          <div className="w-full md:w-full flex flex-col  md:gap-y-14">
            <div className="w-full m-auto pr-4  pl-2">
              <div className="mt-10">
                <Carosal posts={posts} />
              </div>
            </div>
          </div>
        </div>
        <div className="google-mapd w-full flex flex-col-reverse md:flex-row gap-2 gap-y-5 mt-6 items-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834887.9089711457!2d81.7945320052277!3d20.175403913776616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a226aece9af3bfd%3A0x133625caa9cea81f!2sOdisha!5e0!3m2!1sen!2sin!4v1711515475232!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-auto md:h-[360px] 2xl:h-[460px] rounded object-contain"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Home;
