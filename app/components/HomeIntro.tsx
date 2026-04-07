import Image from 'next/image';
import profilePic from '../assets/emmanuel.webp'

export default function HomeIntro() {
  return (
    <>
      <div className="w-full md:h-screen bg-[#111111]">
        <div className='px-10 lg:px-28 flex justify-center items-center'>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-20">
            <div className='flex md:hidden justify-center mt-20'>
              <Image 
                src={profilePic}
                className='object-cover rounded-full h-[250px] w-[250px]'
                alt='Emmanuel lg'
              />
            </div>
            <div className='relative flex flex-col justify-center select-none text-center lg:text-left'>
              <h1 className="text-[21px] sm:text-[27px] lg:text-[29px] xl:text-[40px] text-white font-extrabold">Emmanuel Justin Atienza</h1>
              <h2 className="mt-1 sm:mt-3 text-base md:text-lg lg:text-xl text-white font-bold">Software Engineer - FullStack(Mobile)</h2>
              <p className='mt-5 text-base lg:text-lg text-white text-opacity-65 font-mono'>
                I’m a software engineer with 4 years of experience, starting out in mobile development
                and growing into a full-stack role where I work across both frontend and backend.
                I enjoy building seamless user experiences backed by solid, scalable systems, and I
                focus on writing clean, maintainable code that delivers real impact.
              </p>
              <div className='mt-10 mb-10 md:mb-none'>
                <a 
                  href='/emmanuel-dev-cv.pdf'
                  className='flex justify-center items-center w-full xl:w-3/4 p-3 bg-green-500 rounded-sm text-white font-semibold font-mono shadow-lg hover:shadow-green-500/50 active:bg-opacity-65'
                  target="_blank"
                >
                  Download my CV<i className="fa-solid fa-download ml-2" />
                </a>
              </div>
            </div>
            <div className='hidden md:flex justify-center items-center h-screen'>
              <Image 
                src={profilePic}
                className='object-cover rounded-full h-[400px] w-[400px]'
                alt='Emmanuel sm'
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}