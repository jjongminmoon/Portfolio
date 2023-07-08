import AboutMe from "@/components/AboutMe";
import Career from "@/components/Career";
import Home from "@/components/Home";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Repository from "@/components/Repository";
import Skills from "@/components/Skills";

export default function Main() {
  return (
    <>
      <header className="sticky top-0 z-10">
        <Navbar />
      </header>
      <main>
        <div id="a">
          <Home />
        </div>
        <div id="b">
          <AboutMe />
        </div>
        <div id="c">
          <Career />
        </div>
        <div id="d">
          <Skills />
        </div>
        <div id="e">
          <Repository />
        </div>
        <div id="f">
          <Projects />
        </div>
      </main>
    </>
  );
}
