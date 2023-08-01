"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import moutHome from "../../../public/images/MoutHome.webp";
import moutSearch from "../../../public/images/MoutSearch.webp";
import moutTrade from "../../../public/images/MoutTrade.webp";
import moutDetail from "../../../public/images/MoutDetail.webp";
import moutLogin from "../../../public/images/MoutLogin.webp";
import moutTrend from "../../../public/images/MoutTrend.webp";
import moutUpload from "../../../public/images/MoutUpload.webp";
import moutMypage from "../../../public/images/MoutMyPage.webp";
import moutCart from "../../../public/images/MoutCart.webp";
import moutFavorite from "../../../public/images/MoutFavorite.webp";
import moutAddress from "../../../public/images/MoutAddress.webp";
import moutPosts from "../../../public/images/MoutPosts.webp";
import moutLikes from "../../../public/images/MoutLikes.webp";
import Image from "next/image";
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import { useCallback, useRef } from "react";

const imageList = [
  { image: moutHome },
  { image: moutSearch },
  { image: moutTrade },
  { image: moutDetail },
  { image: moutLogin },
  { image: moutTrend },
  { image: moutUpload },
  { image: moutMypage },
  { image: moutCart },
  { image: moutFavorite },
  { image: moutAddress },
  { image: moutPosts },
  { image: moutLikes }
];

export default function MoviewCarousel() {
  const slickRef: any | null = useRef(null);

  const previous = useCallback(() => slickRef.current.slickPrev(), []);
  const next = useCallback(() => slickRef.current.slickNext(), []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    arrows: false
  };

  return (
    <div className="relative">
      <span
        onClick={previous}
        className="absolute top-1/2 left-0 z-50 cursor-pointer hover:text-red-600"
      >
        <BsFillArrowLeftCircleFill className="w-6 h-6" />
      </span>
      <Slider className="cursor-pointer" {...settings} ref={slickRef}>
        {imageList.map((list, index) => (
          <Image
            className="w-full h-full"
            key={index}
            src={list.image}
            alt="Project Image"
            width={2000}
            height={2000}
            priority
          />
        ))}
      </Slider>
      <span
        onClick={next}
        className="absolute top-1/2 right-0 z-50 cursor-pointer hover:text-red-600"
      >
        <BsFillArrowRightCircleFill className="w-6 h-6" />
      </span>
    </div>
  );
}
