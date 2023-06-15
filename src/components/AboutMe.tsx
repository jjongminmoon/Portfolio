import AddressIcon from "./icons/AddressIcon";
import CalendarIcon from "./icons/CalendarIcon";
import EducationIcon from "./icons/EducationIcon";
import EmailIcon from "./icons/EmailIcon";
import MeIcon from "./icons/MeIcon";
import PhoneIcon from "./icons/PhoneIcon";
import Title from "./ui/Title";

const itemList = [
  { title: "이름", icon: <MeIcon />, content: "문종민" },
  { title: "생년월일", icon: <CalendarIcon />, content: "1994. 12. 16" },
  { title: "주소", icon: <AddressIcon />, content: "인천광역시 서구 심곡동" },
  { title: "연락처", icon: <PhoneIcon />, content: "010-3359-7042" },
  { title: "이메일", icon: <EmailIcon />, content: "mjm7042@kakao.com" },
  { title: "학력", icon: <EducationIcon />, content: "동양미래대학교 (경영정보학부)" }
];

export default function AboutMe() {
  return (
    <section className="px-60 pt-10 mb-10">
      <Title>ABOUT ME</Title>
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
    </section>
  );
}
