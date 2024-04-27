import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

function Carosal({ posts }) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {posts.map((post) => (
        <div
          key={post._id}
          className=" bg-orange-400 h-[400px] text-black rounded-xl"
        >
           <Link
          to={`/${post?.slug}/${post._id}`}
          className="w-full h-auto md:h-64 md:w-2/4 "
        >
          <div className="h-26 bg-indigo-500 flex justify-center items-center rounded-t-xl">
            <img
              src={post.img}
              alt=""
              className="h-44 w-44 rounded-full"
              height={"200px"}
            />
          </div>

          <div className="flex flex-col items-center justify-center gap-4 p-4">
            <p className="text-xl font-semibold">{post.title}</p>
            <button className="bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl">
              Read More
            </button>
          </div>
          </Link>
        </div>
      ))}
    </Slider>
  );
}

export default Carosal;
