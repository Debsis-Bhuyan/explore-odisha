// <Link to={`/${post?.slug}/${post?._id}`} className="w-full  ">
//   <img
//     src={post?.img}
//     alt="Banner"
//     className="w-full md:w-full h-64 md:h-[460px] 2xl:h-[580px] rounded"
//   />
//   {/* <Link to={`/${post?.slug}/${post?._id}`}> */}
//     <h1 className="font-semibold text-2xl py-2 text-black dark:text-white">
//       {post?.title.slice(0, 60) + "..."}
//     </h1>
//   {/* </Link> */}

//   <div className="flex-1 overflow-hidden text-gray-600 dark:text-slate-500 text-sm text-justify">
//     <Markdown options={{ wrapper: "article" }}>
//       {post?.desc?.slice(0, 160) + "..."}
//     </Markdown>

//   </div>
// </Link>
import React, { useState } from "react";
// import BannerCard from "./BannerCard";
const slideStyles = {
  width: "100%",
  height: "100%",
  borderRadius: "10px",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const rightArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  right: "32px",
  fontSize: "45px",
  color: "#fff",
  zIndex: 1,
  cursor: "pointer",
};

const leftArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  left: "32px",
  fontSize: "45px",
  color: "#fff",
  zIndex: 1,
  cursor: "pointer",
};

const sliderStyles = {
  position: "relative",
  height: "100%",
};

const dotsContainerStyles = {
  display: "flex",
  justifyContent: "center",
};

const dotStyle = {
  margin: "0 3px",
  cursor: "pointer",
  fontSize: "20px",
};
const slides = [
  {
    image: "https://apps.odishatourism.gov.in/images/banner2.jpg",
    imageName: "Chilika Lake",
    perform: "zoomIn",
    name: "Chilika Lake",
    description: "",
    link: "https://apps.odishatourism.gov.in/visit/satkosia-nature-camp",
  },
  {
    image: "https://apps.odishatourism.gov.in/images/banner3.jpg",
    imageName: `Udayagiri &amp; Khandagiri`,
  },
  {
    image: "https://apps.odishatourism.gov.in/images/banner1.jpg",
    imageName: "Barehipani",
  },
];

function Banner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  const slideStylesWidthBackground = {
    ...slideStyles,
    backgroundImage: `url(${slides[currentIndex].image})`,
  };

  return (
    <div className="w-full mb-6 mx-2 ">
      <div className="relative  justify-center items-center flex-col w-full h-[500px] 2xl:h-[600px] sm:h-[400px]   px-0 lg:px-6">
        <div style={sliderStyles}>
          <div>
            <div onClick={goToPrevious} style={leftArrowStyles}>
              ❰
            </div>
            <div onClick={goToNext} style={rightArrowStyles}>
              ❱
            </div>
          </div>
          <div style={slideStylesWidthBackground}></div>
          <div style={dotsContainerStyles}>
            {slides.map((slide, slideIndex) => (
              <div
                style={dotStyle}
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                
              >
                ●
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
