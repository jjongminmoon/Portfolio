import Link from "next/link";
import Title from "./ui/Title";
import { SiTistory, SiGithub } from "react-icons/si";

const repoList = [
  {
    name: "GITHUB",
    logo: <SiGithub />,
    path: "https://github.com/jjongminmoon",
    title: "소스 코드 저장소",
    content1: "• 개인 프로젝트 소스 코드 •",
    content2: "• 강의 실습/프로젝트 및 코딩 연습을 위한 소스 코드 •",
    content3: "• 코딩테스트 기록 소스 코드 •"
  },
  {
    name: "TISTORY",
    logo: <SiTistory className="text-red-500 w-7 h-7" />,
    path: "https://m-oonjm.tistory.com/",
    title: "개인 공부 및 기록 / 공유 블로그",
    content1: "• 공부한 내용이 자주 쓰이거나 이해가 어려운 것 기록 •",
    content2: "• 프로젝트 진행 후 회고 기록 •",
    content3: "• 코딩테스트 문제 중 풀지 못한 것 기록 •"
  }
];

export default function Repository() {
  return (
    <section className="px-60 py-10 bg-gray-800">
      <Title text_color="text-white">REPOSITORY</Title>
      <ul className="grid grid-cols-2 justify-between gap-32">
        {repoList.map((list) => (
          <li
            className="flex flex-col gap-5 justify-center items-center h-full w-full p-5 bg-white rounded-2xl"
            key={list.name}
          >
            <h1 className="flex items-center gap-3 text-4xl font-black">
              {list.logo}
              {list.name}
            </h1>
            <Link
              className="text-blue-400"
              href={list.path}
              target="_blank"
              referrerPolicy="no-referrer"
            >
              🔗{list.path}🔗
            </Link>
            <h2 className="text-xl font-bold">{list.title}</h2>
            <div className="flex flex-col gap-1 text-center">
              <p>{list.content1}</p>
              <p>{list.content2}</p>
              <p>{list.content3}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
