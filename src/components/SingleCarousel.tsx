"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import moutCategory from "../../public/images/MoutCategory.webp";
import moutDetail from "../../public/images/MoutDetail.webp";
import moutSelectSize from "../../public/images/MoutSelectSize.webp";
import moutSearch from "../../public/images/MoutSearch.webp";
import moutReview from "../../public/images/MoutReview.webp";
import moutJoin from "../../public/images/MoutJoin.webp";
import moutLogin from "../../public/images/MoutLogin.webp";
import moutBasket from "../../public/images/MoutBasket.webp";
import moutCommunity from "../../public/images/MoutCommunity.webp";
import moutCommunityWrite from "../../public/images/MoutCommunityWrite.webp";
import Image from "next/image";

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

export default function SingleCarousel() {
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
    <Slider className="cursor-pointer" {...settings}>
      {imageList.map((list, index) => (
        <Image key={index} src={list.image} alt="Project Image" priority />
      ))}
    </Slider>
  );
}
