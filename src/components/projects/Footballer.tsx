"use client";

import Link from "next/link";
import FootballerCarousel from "./FootballerCarousel";
import SubTitle from "../ui/SubTitle";
import ToggleButton from "../ui/ToggleButton";
import Image from "next/image";
import footballerHome from "../../../public/images/FootballerHome.webp";
import ProjectIntroduction from "../ui/ProjectIntroduction";
import TroubleShootingItem from "../ui/TroubleShootingItem";
import { useState } from "react";

export default function Footballer() {
  const [toggled, setToggled] = useState(false);

  return (
    <article className="bg-white rounded-lg px-7 py-5 mb-10">
      <div className="flex justify-between items-center gap-3 mb-5 sm:flex-col">
        <div className="w-full text-center">
          <h1 className="text-4xl font-bold mb-4">풋볼러</h1>
          <h2 className="text-lg sm:text-xs">
            풋살 • 축구 매칭 및 커뮤니티 서비스
            <br /> (개인 프로젝트)
          </h2>
          <p className="text-gray-500 sm:text-xs">(2023.08.03 - 09.08)</p>
        </div>
        <Image className="w-3/5 h-full border" src={footballerHome} alt="Project Image" priority />
      </div>
      <ToggleButton toggled={toggled} onToggle={() => setToggled(!toggled)} />
      {toggled && (
        <div>
          <div className="w-full rounded-md mt-5 mb-10 border">
            <FootballerCarousel />
          </div>
          <SubTitle>개요</SubTitle>
          <div className="p-2">
            풋살•축구를 좋아하는 사람들이 팀끼리 매칭을 잡거나, 서로 간의 교류를 할 수 있는
            서비스입니다. 취미를 통해 좀 더 팀과 선수에 집중된 서비스를 만들고자 했습니다. 선수
            등록, 팀 등록, 선수 영입, 입단 신청, 선수 찾기 등을 통해 매칭 서비스를 이용할 수
            있습니다. 또한, 선수와 팀을 평가할 수 있고, 구장 정보 및 지도를 통해 위치까지 확인이
            가능합니다.
          </div>
          <SubTitle>
            배포 링크 :{" "}
            <Link
              className="text-blue-400 sm:text-sm"
              href="https://footballer-eta.vercel.app/"
              referrerPolicy="no-referrer"
              target="_blank"
            >
              https://footballer-eta.vercel.app/
            </Link>
          </SubTitle>
          <div className="my-2" />
          <SubTitle>
            깃허브 :{" "}
            <Link
              className="text-blue-400 sm:text-sm"
              href="https://github.com/jjongminmoon/Footballer"
              referrerPolicy="no-referrer"
              target="_blank"
            >
              https://github.com/jjongminmoon/Footballer
            </Link>
          </SubTitle>
          <div className="my-2" />
          <SubTitle>
            시연 영상 :{" "}
            <Link
              className="text-blue-400 sm:text-sm"
              href="https://youtu.be/dBlLO_cry2s"
              referrerPolicy="no-referrer"
              target="_blank"
            >
              🎞️링크🎞️
            </Link>
          </SubTitle>
          <div className="flex flex-col gap-2 my-2 sm:text-sm sm:flex-col sm:items-start">
            <SubTitle>기술 스택 : </SubTitle>
            <p>
              &nbsp;Typescript, React, Context API, Emotion, Firebase Auth, Firestore Database,
              Vercel
            </p>
          </div>
          <SubTitle>코드 및 기능 소개</SubTitle>
          <ProjectIntroduction>
            <p>
              ✅ Firestore Database로 구장 리스트 / 선수 / 팀 / 매치 / 컵대회 데이터베이스를 만들어
              실시간 데이터 변경 가능
            </p>
            <p>
              ✅ Context API, 커스텀 훅을 통해 서버에 저장되어 있는 상태를 데이터가 필요한 컴포넌트
              별로 간결하게 사용
            </p>
            <p>✅ React Suspense 활용을 통한 로딩 화면 구현</p>
            <p>
              ✅ debounce를 활용한 커스텀 훅을 통해 API 호출 최소화로 검색창 자동완성 관련 효율성 및
              성능 개선
            </p>
            <p>✅ Firebase Auth로 로그인 및 회원가입 구현</p>
          </ProjectIntroduction>
          <div className="my-2" />
          <SubTitle>
            데이터베이스 구조:{" "}
            <Link
              className="text-blue-400 sm:text-sm"
              href="https://proud-dove-860.notion.site/Footballer-e1f8c9478e3c487b9f63a56b89ad5420?pvs=4"
              referrerPolicy="no-referrer"
              target="_blank"
            >
              🔗링크🔗
            </Link>
          </SubTitle>
        </div>
      )}
    </article>
  );
}
