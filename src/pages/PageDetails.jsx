import Markdown from "markdown-to-jsx";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { PopularPosts, PopularWriters, PostComments } from "../components";
import useStore from "../store";
import { getSinglePost } from "../utils/apiCall";
import { usePopularPosts } from "../hooks/post-hook";

const PageDetails = () => {
  const { setIsLoading } = useStore();
  const popular = usePopularPosts();

  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      setIsLoading(true);
      const data = await getSinglePost(id);
      setPost(data?.data || {});
      setIsLoading(false);
    };
    if (id) {
      // fetch post
      fetchPost();
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  }, [id]);

  if (!post)
    return (
      <div className="w-full h-full py-8 flex items-center justify-center">
        <span className="text-xl text-slate-500">Loading...</span>
      </div>
    );

  return (
    <div className="w-full  px-0 md:px-4 py-6 2xl:px-10">
      <div className="w-full flex flex-col-reverse md:flex-row gap-2 gap-y-5 items-center">
        {/* <img
          src={post?.img}
          alt={post?.title}
          className="w-full h-auto md:h-[500px] 2xl:h-[600px] rounded object-contain"
        /> */}
        <img
          src={post?.img}
          alt={post?.title}
          className="w-full md:w-full h-64 md:h-[460px] 2xl:h-[580px] rounded "
        />
      </div>
      {/* <div className="flex pt-4 ">
        <span className="flex-1 text-rose-600 font-semibold mt-4  gap-8 ">
          {post?.cat}
        </span>

        <span className=" flex-1  text-2xl font-medium text-slate-700 dark:text-gray-400 pl-6">
          {post?.views?.length}
          <span className="text-base text-rose-600">Views</span>
        </span>
      </div> */}
      <div className="w-full flex flex-col md:flex-row gap-10 2xl:gap-x-28 mt-8">
        <h1 className="text-3xl md:text-5xl font-bold text-slate-800 dark:text-white">
          {post?.title}
        </h1>
      </div>

      <div className="w-full flex flex-col md:flex-row gap-8 2xl:gap-x-28 mt-8">
        {/* LEFT */}
        <div className="w-full md:w-2/3 flex flex-col text-black dark:text-gray-500 ">
          {post?.desc && (
            <Markdown
              options={{ wrapper: "article" }}
              className="leading-[1.5rem] text-base 2xl:text-[20px]"
            >
              {post?.desc}
            </Markdown>
          )}

          {/* COMMENTS SECTION */}
          <div className="w-full">{<PostComments postId={id} />}</div>
        </div>

        {/* RIGHT */}
        <div className="w-full md:w-1/4 flex flex-col gap-y-12">
          <PopularPosts posts={popular?.posts} category={post?.cat} />
        </div>
      </div>
      {
        post?.maplink ? ( <div className="google-mapd w-full flex flex-col-reverse md:flex-row gap-2 py-4 gap-y-5 items-center">
        {/* pass the image link here  */}

        <iframe
          src={post?.maplink}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-auto md:h-[360px] 2xl:h-[460px] rounded object-contain"
        ></iframe>
      </div>) :""
      }

     
    </div>
  );
};

export default PageDetails;
