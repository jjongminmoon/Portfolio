import Title from "./ui/Title";
import Mout from "./projects/Mout";
import { responsive } from "@/app/page";

export default function Projects() {
  return (
    <section className={`px-60 py-10 bg-teal-400 ${responsive}`}>
      <Title>PROJECTS</Title>
      <Mout />
    </section>
  );
}
