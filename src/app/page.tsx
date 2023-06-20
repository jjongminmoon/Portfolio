import AboutMe from "@/components/AboutMe";
import Career from "@/components/Career";
import Home from "@/components/Home";
import Projects from "@/components/Projects";
import Repository from "@/components/Repository";
import Skills from "@/components/Skills";

export default function Main() {
  return (
    <main>
      <Home />
      <div id="a">
        <AboutMe />
      </div>
      <div id="b">
        <Career />
      </div>
      <div id="c">
        <Skills />
      </div>
      <div id="d">
        <Repository />
      </div>
      <div id="e">
        <Projects />
      </div>
    </main>
  );
}
