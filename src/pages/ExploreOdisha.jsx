import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, Pagination, PopularPosts } from "../components";

import { CATEGORIES} from "../utils/dummyData";
import { usePopularPosts, usePosts } from "../hooks/post-hook";

function ExploreOdisha() {
  
  const {posts,numOfPages,setPage}= usePosts({writerId:""})
  const popular = usePopularPosts()
  const randomIndex = Math.floor(Math.random() * posts.length);

  const handlePageChange = (val) => {
    setPage(val);

    console.log(val);
  };
  return (
    <div className="py-4 2xl:py-2">
      <div className="px-0 lg:pl-8 2xl:px-14 ">
        {/* Categories */}
        <div className="mt-3 md:mt-0">
          <p className="text-2xl font-semibold text-gray-600 dark:text-white">
            Select Category
          </p>
          <div className="w-full flex flex-wrap py-6 gap-4">
            {CATEGORIES.map((cat) => (
              
              <Link
                to={`/explore/category?cat=${cat?.label}`}
                className={`flex items-center justify-center gap-3 ${cat.color} text-white font-semibold text-base px-4 py-2 rounded cursor-pointer`}
                key={cat.label}
              >
                {cat?.icon}
                <span>{cat.label}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Blog Post */}
        <div className="w-full flex flex-col md:flex-row gap-6 2xl:gap-14">
          {/* LEFT */}
          <div className="w-full md:w-4/5 flex flex-col gap-y-10 md:gap-y-6">
            {posts?.map((post, index) => (
              <Card key={post?._id} post={post} index={index} />
            ))}

            <div className="w-full flex items-cemter justify-center">
              <Pagination
                totalPages={parseInt(numOfPages)}
                onPageChange={handlePageChange}
              />
            </div>
          </div>

          {/* RIGHT */}
          <div className="w-full md:w-1/4 flex flex-col gap-y-12">
            {/* POPULAR POSTS */}
            <PopularPosts
              posts={popular?.posts}
              category={popular?.posts?.cat}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExploreOdisha;
