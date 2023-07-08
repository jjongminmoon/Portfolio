"use client";

import Link from "next/link";
import SubTitle from "../ui/SubTitle";
import ToggleButton from "../ui/ToggleButton";
import Image from "next/image";
import moviewHome from "../../../public/images/moviewHome.webp";
import ProjectIntroduction from "../ui/ProjectIntroduction";
import MoviewCarousel from "./MoviewCarousel";
import { useState } from "react";

export default function Mout() {
  const [toggled, setToggled] = useState(false);

  return (
    <article className="bg-white rounded-lg px-7 py-5 mb-10">
      <div className="flex justify-between items-center gap-3 mb-5 sm:flex-col">
        <div className="w-full text-center">
          <h1 className="text-4xl font-bold mb-4">Moview</h1>
          <h2 className="text-lg sm:text-xs">
            영화 정보 검색 및 리뷰 커뮤니티
            <br />
            (개인 프로젝트)
          </h2>
          <p className="text-gray-500 sm:text-xs">(2023.06.22 - 07.04)</p>
        </div>
        <Image className="w-3/5 h-full border" src={moviewHome} alt="Project Image" />
      </div>
      <ToggleButton toggled={toggled} onToggle={() => setToggled(!toggled)} />
      {toggled && (
        <div className="ease-in-out duration-1000">
          <div className="w-full rounded-md mt-5 mb-10 border">
            <MoviewCarousel />
          </div>
          <SubTitle>개요</SubTitle>
          <div className="p-2">
            Next.js와 Sanity를 공부한 뒤 배운 것을 토대로 프로젝트를 진행해보고자 했고, 이전에 영화
            커뮤니티를 과제로 제출했지만 부족했던 점이 많아 만족스럽지 못했던 것을 보완하고 새로
            공부한 것들을 적용해 컴포넌트 재사용성, 성능 등을 개선한 영화 정보검색 및 커뮤니티 웹
            서비스입니다.
            <br />
            회원가입, 로그인, 영화 정보 검색, 영화 추천, 리뷰 작성, 유저 검색 등의 기능이 있습니다.
            또한, 유저 프로필, 리뷰 댓글, 좋아요 기능을 통해 리뷰의 신뢰도를 확인할 수 있도록
            했습니다.
          </div>
          <SubTitle>
            배포 링크 :{" "}
            <Link
              className="text-blue-400 sm:text-sm"
              href="https://moview-d83d.vercel.app/"
              referrerPolicy="no-referrer"
            >
              https://moview-d83d.vercel.app/
            </Link>
          </SubTitle>
          <div className="flex flex-col gap-2 my-2 sm:text-sm sm:flex-col sm:items-start">
            <SubTitle>기술 스택 : </SubTitle>
            <p>&nbsp;Next.js, Typescript, SWR, Tailwind CSS, Sanity, Vercel</p>
          </div>
          <SubTitle>코드 및 기능 소개</SubTitle>
          <ProjectIntroduction>
            <p>✅ Sever-Side-Rendering을 통한 SEO 최적화 / 빠른 초기 로딩 속도</p>
            <p>
              ✅ SWR과 Context를 활용해 데이터를 가져오는 로직을 단순화하고, hook마다 쉽게 재사용이
              가능
            </p>
            <p>✅ debounce를 활용한 커스텀 훅을 통해 검색창 자동완성 관련 효율성 및 성능 개선</p>
            <p>✅ Google OAuth로 회원가입 / 로그인 구현</p>
            <p>✅ Sanity를 통해 유저 / 리뷰(댓글/좋아요) 데이터베이스 생성</p>
            <p>✅ Sanity GROQ를 사용한 함수를 통해 데이터를 쉽게 조회하고 가져와 사용</p>
          </ProjectIntroduction>
        </div>
      )}
    </article>
  );
}
