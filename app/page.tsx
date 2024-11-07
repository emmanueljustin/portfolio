import Contact from "./components/Contact";
import HomeIntro from "./components/HomeIntro";
import Testimonials from "./components/Testimonials";
import WorkExperience from "./components/WorkExperience";

export default function Home() {
  return (
    <>
      <HomeIntro />
      <WorkExperience />
      <Testimonials />
      <Contact />
    </>
  );
}
