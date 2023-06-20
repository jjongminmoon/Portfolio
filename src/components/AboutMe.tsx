"use client";

import AddressIcon from "./icons/AddressIcon";
import CalendarIcon from "./icons/CalendarIcon";
import EmailIcon from "./icons/EmailIcon";
import MeIcon from "./icons/MeIcon";
import PhoneIcon from "./icons/PhoneIcon";
import Title from "./ui/Title";
import GraduateIcon from "./icons/GraduateIcon";
import Educations from "./Educations";
import CircleImage from "./ui/CircleImage";
import profileImage from "../../public/images/me.webp";
import ExpandingIcon from "./icons/ExpandingIcon";
import ImageExpanding from "./ImageExpanding";
import { useState } from "react";
import { responsive } from "./ui/responsive";

const itemList = [
  { title: "이름", icon: <MeIcon />, content: "문종민" },
  { title: "생년월일", icon: <CalendarIcon />, content: "1994. 12. 16" },
  { title: "주소", icon: <AddressIcon />, content: "인천광역시 서구 심곡동" },
  { title: "연락처", icon: <PhoneIcon />, content: "010-3359-7042" },
  { title: "이메일", icon: <EmailIcon />, content: "mjm7042@kakao.com" },
  { title: "학력", icon: <GraduateIcon />, content: "동양미래대학교 (경영정보학부)" }
];

export default function AboutMe() {
  const [expand, setExpand] = useState(false);

  return (
    <section className={`px-60 pt-10 mb-10 ${responsive}`}>
      <Title>ABOUT ME</Title>
      <div className="flex flex-col items-center justify-center mb-5">
        <CircleImage
          className="rounded-full cursor-pointer shadow-md object-cover"
          image={profileImage}
          altMessage="Profile Image"
          width={200}
          height={200}
        />
        <div
          className="flex items-center gap-2 mt-3 px-4 py-1 bg-blue-400 rounded-full text-white cursor-pointer shadow-md"
          onClick={() => setExpand(true)}
        >
          <ExpandingIcon />
          확대
        </div>
      </div>
      <ul className="grid grid-cols-3 gap-5 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
        {itemList.map((item) => (
          <li className="flex flex-col items-center gap-5 w-full" key={item.title}>
            <div className="flex items-center justify-center gap-3 py-2 px-5 bg-neutral-100 rounded-full w-full shadow-md">
              <span>{item.icon}</span>
              <p>{item.title}</p>
            </div>
            <div className="flex gap-3 items-center">
              <p className="font-bold">{item.content}</p>
            </div>
          </li>
        ))}
      </ul>
      <Educations />
      {expand && <ImageExpanding onClick={() => setExpand(false)} />}
    </section>
  );
}
