import Title from "./ui/Title";
import frontend from "../../public/images/frontendSkills.webp";
import backend from "../../public/images/backendSkills.webp";
import deployment from "../../public/images/deploymentSkills.webp";
import Image from "next/image";

const imageList = [
  { title: "Frontend", alt: "Frontend Skills", image: frontend },
  { title: "Backend", alt: "Backend Skills", image: backend },
  { title: "Deployment", alt: "Deployment Skills", image: deployment }
];

export default function Skills() {
  return (
    <section className="px-60 bg-blue-400 py-10">
      <Title>SKILLS</Title>
      <div className="flex justify-center gap-20">
        {imageList.map((list) => (
          <div
            className="w-full h-full bg-white p-2 rounded-2xl shadow-2xl hover:translate-y-2 cursor-pointer"
            key={list.alt}
          >
            <p className="text-yellow-400 text-2xl font-semibold text-center mb-5 pb-2 border-b-2">
              {list.title}
            </p>
            <Image src={list.image} alt={list.alt} />
          </div>
        ))}
      </div>
    </section>
  );
}
