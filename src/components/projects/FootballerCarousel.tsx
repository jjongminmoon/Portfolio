"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import footballerHome from "../../../public/images/FootballerHome.webp";
import footballerRegisterPlayer from "../../../public/images/FootballerRegisterPlayer.webp";
import footballerRegisterTeam from "../../../public/images/FootballerRegisterTeam.webp";
import footballerSearch from "../../../public/images/FootballerSearch.webp";
import footballerDetail from "../../../public/images/FootballerDetail.webp";
import footballerInput from "../../../public/images/FootballerInput.webp";
import footballerField from "../../../public/images/FootballerField.webp";
import footballerCup from "../../../public/images/FootballerCup.webp";
import footballerMypage from "../../../public/images/FootballerMypage.webp";
import footballerMypage2 from "../../../public/images/FootballerMypage2.webp";
import Image from "next/image";
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import { useCallback, useRef } from "react";

const imageList = [
  { image: footballerHome },
  { image: footballerRegisterPlayer },
  { image: footballerRegisterTeam },
  { image: footballerSearch },
  { image: footballerDetail },
  { image: footballerInput },
  { image: footballerField },
  { image: footballerCup },
  { image: footballerMypage },
  { image: footballerMypage2 }
];

export default function FootballerCarousel() {
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
