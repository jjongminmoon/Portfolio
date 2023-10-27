"use client";

import Link from "next/link";
import MoutCarousel from "./MoutCarousel";
import SubTitle from "../ui/SubTitle";
import ToggleButton from "../ui/ToggleButton";
import Image from "next/image";
import moutMain from "../../../public/images/MoutMain.webp";
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
          <p className="text-gray-500 sm:text-xs">(2023.09.27 - 10.24)</p>
        </div>
        <Image className="w-3/5 h-full border" src={moutMain} alt="Project Image" priority />
      </div>
      <ToggleButton toggled={toggled} onToggle={() => setToggled(!toggled)} />
      {toggled && (
        <div>
          <div className="w-full rounded-md mt-5 mb-10 border">
            <MoutCarousel />
          </div>
          <SubTitle>개요</SubTitle>
          <div className="p-2">
            옷을 좋아하는 사람들이 많이 이용하는 무신사의 솔드아웃 서비스와 크림을 벤치마킹하여 상품
            데이터 보여주기, 회원가입, 로그인, 제품/사이즈 선택 후 장바구니에 담기, 장바구니, 제품
            검색/자동완성, 제품 카테고리/정렬, 상세 페이지, 좋아요 등 쇼핑몰 및 스타일 공유 커뮤니티
            서비스를 구현하고 리팩토링을 통하여 완성도를 높였습니다.
            <br />
            또한, 추가적으로 데이터베이스를 만들어 이를 활용해 스타일 공유 커뮤니티 페이지를
            구현하여 게시글을 작성하고 다른 사람의 게시물을 좋아요할 수 있는 등의 요소를
            추가했습니다.
          </div>
          <SubTitle>
            배포 링크 :{" "}
            <Link
              className="text-blue-400 sm:text-sm"
              href="https://mjstore.vercel.app/"
              referrerPolicy="no-referrer"
              target="_blank"
            >
              ✅ 리팩토링 전 (Mjstore)
            </Link>
            <span className="mx-2">/</span>
            <Link
              className="text-blue-400 sm:text-sm"
              href="https://mout-vercel.vercel.app/"
              referrerPolicy="no-referrer"
              target="_blank"
            >
              ✅ 리팩토링 후 (Mout__)
            </Link>
          </SubTitle>
          <div className="my-2" />
          <SubTitle>
            깃허브 :{" "}
            <Link
              className="text-blue-400 sm:text-sm"
              href="https://github.com/jjongminmoon/mjstore"
              referrerPolicy="no-referrer"
              target="_blank"
            >
              ✅ 리팩토링 전 (Mjstore)
            </Link>
            <span className="mx-2">/</span>
            <Link
              className="text-blue-400 sm:text-sm"
              href="https://github.com/jjongminmoon/Mout__ver.2"
              referrerPolicy="no-referrer"
              target="_blank"
            >
              ✅ 리팩토링 후 (Mout__)
            </Link>
          </SubTitle>
          <div className="my-2" />
          <SubTitle>
            시연 영상 :{" "}
            <Link
              className="text-blue-400 sm:text-sm"
              href="https://youtu.be/U_JqM2Cc4Mo"
              referrerPolicy="no-referrer"
              target="_blank"
            >
              🎞️링크🎞️
            </Link>
          </SubTitle>
          <div className="flex flex-col gap-2 my-2 sm:text-sm sm:flex-col sm:items-start">
            <SubTitle>기술 스택 : </SubTitle>
            <p>
              &nbsp;Typescript, React, React-Query, Context API, Axios, Emotion, Firebase Auth,
              Firestore Database, Vercel, Kakao Map API
            </p>
          </div>
          <SubTitle>코드 및 기능 소개</SubTitle>
          <div className="my-2" />
          <SubTitle>
            데이터베이스 구조:{" "}
            <Link
              className="text-blue-400 sm:text-sm"
              href="https://proud-dove-860.notion.site/Mout__-1da9ecc558e64980bded42329cb86268?pvs=4"
              referrerPolicy="no-referrer"
              target="_blank"
            >
              🔗링크🔗
            </Link>
          </SubTitle>
          <div className="my-2" />
          <ProjectIntroduction>
            <p>✅ Context API를 통한 로그인 정보, 전체 유저 정보를 전역적으로 사용</p>
            <p>✅ useQuery를 훅을 통한 비동기적 data fetching을 컴포넌트 별로 간결하게 사용</p>
            <p>
              ✅ debounce를 활용한 커스텀 훅을 통해 API 호출 최소화로 검색창 자동완성 관련 효율성 및
              성능 개선
            </p>
            <p>✅ Firebase Auth로 로그인 및 회원가입 구현</p>
            <p>
              ✅ Firestore Database로 유저의 회원가입 시 유저별 프로필 이미지/ 닉네임 / 주소 /
              장바구니 / 좋아요 / 스타일 공유 커뮤니티 관련 데이터베이스 구현
            </p>
            <p>✅ 리팩토링 전 반응형 웹 스타일링으로 PC / 모바일 모두 사용</p>
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
