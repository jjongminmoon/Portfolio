import Divider from "./icons/divider";

export default function Home() {
  return (
    <section className="flex flex-col gap-4 justify-center items-center h-[650px] px-60">
      <h1 className="text-5xl">{"MJ (문종민)"}</h1>
      <h2 className="text-xl">웹 프론트엔드 개발자</h2>
      <Divider />
      <p className="text-center text-lg">
        사용자가 좋은 서비스 경험을 통해
        <br />
        다시 찾고 싶은 서비스를 만들기 위해 공부하고 있는
        <br />
        프론트엔드 개발자입니다.
      </p>
      <button className="p-3 bg-blue-400 rounded-3xl text-sm text-white font-semibold mt-3">
        알아보기 시작
      </button>
    </section>
  );
}
