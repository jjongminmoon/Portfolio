"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import moutCategory from "../../../public/images/moutCategory.webp";
import moutDetail from "../../../public/images/moutDetail.webp";
import moutSelectSize from "../../../public/images/moutSelectSize.webp";
import moutSearch from "../../../public/images/moutSearch.webp";
import moutReview from "../../../public/images/moutReview.webp";
import moutJoin from "../../../public/images/moutJoin.webp";
import moutLogin from "../../../public/images/moutLogin.webp";
import moutBasket from "../../../public/images/moutBasket.webp";
import moutCommunity from "../../../public/images/moutCommunity.webp";
import moutCommunityWrite from "../../../public/images/moutCommunityWrite.webp";
import Image from "next/image";
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import { useCallback, useRef } from "react";

const imageList = [
  { image: moutCategory },
  { image: moutDetail },
  { image: moutSelectSize },
  { image: moutSearch },
  { image: moutReview },
  { image: moutJoin },
  { image: moutLogin },
  { image: moutBasket },
  { image: moutCommunity },
  { image: moutCommunityWrite }
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
