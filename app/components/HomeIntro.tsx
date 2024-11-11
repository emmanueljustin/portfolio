import Image from 'next/image';
import profilePic from '../assets/emmanuel.jpg'

export default function HomeIntro() {
  return (
    <>
      <div className="w-full md:h-screen bg-[#111111]">
        <div className='px-10 md:px-28 flex justify-center items-center'>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-20">
            <div className='flex md:hidden justify-center mt-20'>
              <Image 
                src={profilePic}
                className='object-cover rounded-full h-[250px] w-[250px]'
                alt=''
              />
            </div>
            <div className='flex flex-col justify-center select-none text-center lg:text-left'>
              <h1 className="text-lg sm:text-[30px] lg:text-[35px] text-white font-extrabold">Emmanuel Justin Atienza</h1>
              <h2 className="mt-3 text-base sm:text-lg lg:text-xl text-white font-bold">Software Engineer - FullStack(Mobile)</h2>
              <p className='mt-5 text-lg text-white text-opacity-65 font-mono'>
                I am a software developer with 3 years of work experience mainly focusing on Mobile
                development. I am also familiar in development of web appplication and back end REST API.
              </p>
              <div className='mt-10 mb-10 md:mb-none'>
                <a 
                  href='/emmanuel-dev-cv.pdf'
                  className='flex justify-center items-center w-full md:w-3/4 p-3 bg-green-500 rounded-sm text-white font-semibold font-mono shadow-lg hover:shadow-green-500/50 active:bg-opacity-65'
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
                alt=''
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}