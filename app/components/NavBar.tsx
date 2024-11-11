import NavButton from "./client_components/NavButton";

export default function NavBar() {
  return (
    <>
      <div className="hidden md:block relative w-full">
        <div className="absolute inset-0 top-3 flex justify-center items-center py-10 z-10">
          <div className='py-1 flex justify-center items-center space-x-20 bg-gray-800 w-[90%] rounded-lg text-white font-semibold font-mono'>
            <NavButton>Experience</NavButton>
            <NavButton>Testimonials</NavButton>
            <NavButton>Projects</NavButton>
            <NavButton>Contact Me</NavButton>
          </div>
        </div>
      </div>
    </>
  )
}