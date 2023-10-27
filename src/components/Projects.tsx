import Title from "./ui/Title";
import Mout from "./projects/Mout";
import Footballer from "./projects/Footballer";

export default function Projects() {
  return (
    <section className="px-60 py-10 bg-teal-400">
      <Title>PROJECTS</Title>
      <Mout />
      <Footballer />
    </section>
  );
}
