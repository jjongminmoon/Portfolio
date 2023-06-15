import Image from "next/image";
import mainImage from "../../public/images/developer.webp";
import Divider from "./icons/DividerIcon";
import Arrow from "./icons/ArrowIcon";

export default function Home() {
  return (
    <section className="flex flex-col gap-4 justify-center items-center h-[650px] px-60 font-bold">
      <Image
        className="absolute top-0 left-0 w-full h-full opacity-70 -z-50"
        src={mainImage}
        alt="Main Image"
      />

      <h1 className="text-5xl">{"MJ (문종민)"}</h1>
      <h2 className="text-xl">웹 프론트엔드 개발자</h2>
      <Divider />
      <p className="text-lg text-center">
        사용자가 좋은 서비스 경험을 통해
        <br />
        다시 찾고 싶은 서비스를 만들기 위해 공부하고 있는
        <br />
        프론트엔드 개발자입니다.
      </p>
      <button className="flex items-center gap-2 px-6 py-3 bg-blue-400 rounded-3xl text-white text-sm font-semibold mt-3 hover:shadow-md">
        알아보기
        <Arrow />
      </button>
    </section>
  );
}
