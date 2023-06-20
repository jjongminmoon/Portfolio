import EducationIcon from "./icons/EducationIcon";
import zerobase from "../../public/images/zerobase.webp";
import CircleImage from "./ui/CircleImage";

export default function Educations() {
  return (
    <>
      <div className="flex flex-col items-center gap-5 w-full mt-5">
        <div className="flex items-center justify-center gap-3 py-2 px-5 bg-neutral-100 rounded-full w-full shadow-md">
          <EducationIcon />
          <p>교육</p>
        </div>
        <div className="flex gap-5 items-center sm:pl-6">
          <CircleImage
            className="rounded-full"
            image={zerobase}
            altMessage="Zerobase Logo"
            width={50}
            height={50}
          />
          <p className="font-bold">제로베이스 프론트엔드 스쿨(2022.10 ~ 2023.03)</p>
        </div>
      </div>
    </>
  );
}
