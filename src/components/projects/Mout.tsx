"use client";

import Link from "next/link";
import MoutCarousel from "./MoutCarousel";
import SubTitle from "../ui/SubTitle";
import ToggleButton from "../ui/ToggleButton";
import Image from "next/image";
import moutCategory from "../../../public/images/moutCategory.webp";
import ProjectIntroduction from "../ui/ProjectIntroduction";
import TroubleShootingItem from "../ui/TroubleShootingItem";
import { useState } from "react";

export default function Mout() {
  const [toggled, setToggled] = useState(false);

  return (
    <article className="bg-white rounded-lg px-7 py-5 mb-10">
      <div className="flex justify-between items-center gap-3 mb-5 sm:flex-col">
        <div className="w-full text-center">
          <h1 className="text-4xl font-bold mb-4">Mout__</h1>
          <h2 className="text-lg sm:text-xs">
            쇼핑몰 및 스타일 공유 커뮤니티
            <br /> (개인 프로젝트)
          </h2>
          <p className="text-gray-500 sm:text-xs">(2023.03.13 - 04.02)</p>
        </div>
        <Image className="w-3/5 h-full border" src={moutCategory} alt="Project Image" />
      </div>
      <ToggleButton toggled={toggled} onToggle={() => setToggled(!toggled)} />
      {toggled && (
        <div>
          <div className="w-full rounded-md mt-5 mb-10 border">
            <MoutCarousel />
          </div>
          <SubTitle>개요</SubTitle>
          <div className="p-2">
            프론트엔드 부트캠프가 끝난 후 그 전까지 배웠던 내용들을 통해 쇼핑몰 및 커뮤니티
            프로젝트를 진행했습니다.
            <br />
            상품 데이터 보여주기, 회원가입, 로그인, 제품/사이즈 선택 후 장바구니에 담기, 장바구니,
            제품 검색/자동완성, 제품 카테고리, 상세 페이지 등 프론트엔드 개발자로서 구현 가능한
            대부분의 기능들이 들어가 있는 웹서비스가 쇼핑몰이었기 때문에 지금까지 배운 것을 활용해
            완성도 있는 웹서비스를 구현해보고 싶었습니다.
            <br />
            또한, 추가적으로 데이터베이스를 만들어 이를 활용해 스타일 공유 커뮤니티 페이지를
            구현하여 게시글을 작성하고 볼 수 있는 등 좀 더 재미있는 요소를 추가해보았습니다.
          </div>
          <SubTitle>
            배포 링크 :{" "}
            <Link
              className="text-blue-400 sm:text-sm"
              href="https://mjstore.vercel.app/"
              referrerPolicy="no-referrer"
            >
              https://mjstore.vercel.app/
            </Link>
          </SubTitle>
          <div className="flex flex-col gap-2 my-2 sm:text-sm sm:flex-col sm:items-start">
            <SubTitle>기술 스택 : </SubTitle>
            <p>
              &nbsp;Typescript, React, React-Query, Emotion, Firebase Auth, Firestore Database,
              Vercel
            </p>
          </div>
          <SubTitle>코드 및 기능 소개</SubTitle>
          <ProjectIntroduction>
            <p>✅ Glitch를 활용해 배포한 제품 API를 사용해 제품 리스트 구현</p>
            <p>
              ✅ React-Query를 사용해 서버에 저장되어 있는 상태를 데이터가 필요한 컴포넌트 별로
              간결하게 사용
            </p>
            <p>✅ debounce를 활용한 커스텀 훅을 통해 검색창 자동완성 관련 효율성 및 성능 개선</p>
            <p>✅ Firebase Auth로 회원가입 / 로그인 / 회원정보 수정 구현</p>
            <p>
              ✅ Firestore Database로 유저별 장바구니 / 상품 리뷰 / 스타일 공유 커뮤니티
              데이터베이스 구현
            </p>
            <p>
              ✅ UI는 반응형 웹으로로 스타일링해 데스크톱, 모바일 환경 모두 큰 불편함없이 사용
              가능하도록 구현
            </p>
          </ProjectIntroduction>
          <SubTitle>트러블 슈팅</SubTitle>
          <TroubleShootingItem href="/moutTroubleshooting1">
            Firestore Database 업데이트 메서드
          </TroubleShootingItem>
        </div>
      )}
    </article>
  );
}
