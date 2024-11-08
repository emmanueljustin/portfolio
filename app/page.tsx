import Contact from "./components/Contact";
import HomeIntro from "./components/HomeIntro";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import WorkExperience from "./components/WorkExperience";

export default function Home() {
  return (
    <>
      <div className="relative w-full">
        <div className="absolute inset-0 top-3 flex justify-center items-center py-10 z-10">
          <div className='py-2 flex justify-center items-center space-x-20 bg-gray-800 w-[90%] rounded-lg text-white font-bold'>
            <h1 className="px-3 py-5 hover:cursor-pointer rounded-md hover:bg-white hover:bg-opacity-55">Experience</h1>
            <h1 className="px-3 py-5 hover:cursor-pointer rounded-md hover:bg-white hover:bg-opacity-55">Testimonials</h1>
            <h1 className="px-3 py-5 hover:cursor-pointer rounded-md hover:bg-white hover:bg-opacity-55">Projects</h1>
            <h1 className="px-3 py-5 hover:cursor-pointer rounded-md hover:bg-white hover:bg-opacity-55">Contact Me</h1>
          </div>
        </div>
      </div>
      <HomeIntro />
      <WorkExperience />
      <Testimonials />
      <Projects />
      <Contact />
    </>
  );
}
