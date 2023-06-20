import Title from "./ui/Title";
import samsung from "../../public/images/samsung.webp";
import nonghyup from "../../public/images/nonghyup.webp";
import { responsive } from "@/app/page";
import CircleImage from "./ui/CircleImage";

const careerList = [
  {
    name: "삼성전자판매(주) - 영업/마케팅부",
    alt: "Samsung",
    logo: samsung,
    period: "2018.02 - 2020.02",
    introduce: "삼성전자 전자제품 도·소매업을 사업 목적으로 하는 기업",
    content1: "• 혼수 고객 전문 상담 및 판매 / 사후관리",
    content2: "• 제품 판매 촉진을 위한 지점 캠페인 및 서비스 기획",
    content3: "• 계절 가전 품목 담당자로 월 단위 판매 기획 및 직원 교육"
  },
  {
    name: "김포파주인삼농협 - 금융(예금계)",
    alt: "Nonghyup",
    logo: nonghyup,
    period: "2021.08 - 2022.10",
    introduce: "농업협동조합으로 금융·경제 사업을 운영하는 기업",
    content1: "• 금융 예금계 담당으로 지점 창구 텔러 업무 수행",
    content2: "• 출납 담당으로 지점 금고 및 전체 시재 관리/마감",
    content3: "• 카드, 정보통신금융사기, 압류/채권, 보험 등 전반적인 업무 담당"
  }
];

export default function Career() {
  const careerResponsive = "sm:flex sm:flex-col sm:items-center";
  return (
    <section className={`px-60 bg-gray-200 py-10 ${responsive} md:text-sm sm:text-xs`}>
      <Title>CAREER</Title>
      <div className="flex flex-col items-center gap-10">
        {careerList.map((list) => (
          <article
            key={list.name}
            className={`flex justify-center w-full gap-10 ${careerResponsive}`}
          >
            <CircleImage
              className="rounded-full"
              image={list.logo}
              altMessage={list.alt}
              width={200}
              height={200}
            />
            <div className="w-full flex flex-col gap-2 pl-10 border-l border-gray-400 sm:items-center sm:border-none sm:p-0">
              <h1 className="text-xl font-black">{list.name}</h1>
              <p className="text-gray-500">{list.period}</p>
              <h2 className="font-semibold"></h2>
              <p className="font-semibold">{list.introduce}</p>
              <p>{list.content1}</p>
              <p>{list.content2}</p>
              <p>{list.content3}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
