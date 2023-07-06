"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import moviewHome from "../../public/images/MoviewHome.webp";
import moviewSearch from "../../public/images/MoviewSearch.webp";
import moviewDetail from "../../public/images/MoviewDetail.webp";
import moviewRecommendation from "../../public/images/MoviewRecommendation.webp";
import moviewReview from "../../public/images/MoviewReview.webp";
import moviewActionbar from "../../public/images/MoviewActionbar.webp";
import moviewProfile from "../../public/images/MoviewProfile.webp";
import Image from "next/image";
import { useCallback, useRef } from "react";
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";

const imageList = [
  { image: moviewHome },
  { image: moviewSearch },
  { image: moviewDetail },
  { image: moviewRecommendation },
  { image: moviewReview },
  { image: moviewActionbar },
  { image: moviewProfile }
];

export default function MoutCarousel() {
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
        className="absolute top-1/2 left-0 z-50 cursor-pointer text-white hover:text-red-600"
      >
        <BsFillArrowLeftCircleFill className="w-6 h-6" />
      </span>
      <Slider className="cursor-pointer" {...settings} ref={slickRef}>
        {imageList.map((list, index) => (
          <Image key={index} src={list.image} alt="Project Image" priority />
        ))}
      </Slider>
      <span
        onClick={next}
        className="absolute top-1/2 right-0 z-50 cursor-pointer text-white hover:text-red-600"
      >
        <BsFillArrowRightCircleFill className="w-6 h-6" />
      </span>
    </div>
  );
}
