import Contact from "./components/Contact";
import HomeIntro from "./components/HomeIntro";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import WorkExperience from "./components/WorkExperience";

export default function Home() {
  return (
    <>
      <NavBar />
      <HomeIntro />
      <WorkExperience />
      <Testimonials />
      <Projects />
      <Contact />
    </>
  );
}
