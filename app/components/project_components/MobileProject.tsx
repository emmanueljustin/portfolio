import Image from 'next/image';
import clicked from '../../assets/projects/click-sample.jpg';
import peddlr from '../../assets/projects/peddlr.jpg';
import googleplay from '../../assets/google-play-logo.svg';
import AndroidMock from './AndroidMock';

export default function MobileProjects() {
  return (
    <>
      <div className="px-10 lg:px-20 mt-10 grid grid-cols-1 gap-20 lg:grid-cols-2 lg:gap-8">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-10">
          <AndroidMock img={peddlr} />
          <div className='text-center lg:text-left'>
            <a 
              className='block md:hidden'
              href='https://play.google.com/store/search?q=peddlr+app&c=apps&hl=en'
              target='_blank'
            >
              <Image className='mx-auto w-44' src={googleplay} alt='google play' />
            </a>  
            <h1 className='text-[30px] font-bold'>Peddlr Mobile App</h1>
            <div className="mt-5 flex flex-wrap justify-center lg:justify-start gap-3">
              <span className="text-xs text-white font-bold bg-[#027DFD] shadow-md shadow-[#027DFD]/50 rounded-md px-2 py-1">Flutter</span>
              <span className="text-xs text-white font-bold bg-[#D9534F] shadow-md shadow-[#D9534f]/50 rounded-md px-2 py-1">Confidential</span>
            </div>
            <p className='mt-6 text-[20px] font-mono'>
              Peddlr app is a mobile app that offers free POS, Eload, Credit/Cash Ledger and much more. Peddlr aims on
              helping Micro Small Medium Enterprises(MSME&apos;s) on managing and digitizing their businesses.
            </p>
            <a 
              className='hidden md:block'
              href='https://play.google.com/store/search?q=peddlr+app&c=apps&hl=en'
              target='_blank'
            >
              <Image className='mx-0 md:mx-auto lg:mx-0 w-44' src={googleplay} alt='google play' />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-10">
          <AndroidMock img={clicked} />
          <div className='text-center lg:text-left'>
            <a 
              className='my-10 mx-auto flex md:hidden justify-center w-1/2 items-center bg-green-500 shadow-lg px-3 py-2 rounded-sm text-white font-bold hover:shadow-green-500/50 active:bg-opacity-65'
              href='https://github.com/emmanueljustin/smart-app'
              target='_blank'
            >
              View
              <i className="fa-brands fa-github fa-lg ml-2" />
            </a>
            <h1 className='text-[30px] font-bold'>CL!CKED Mobile App</h1>
            <div className="mt-5 flex flex-wrap justify-center lg:justify-start gap-3">
              <span className="text-xs text-white font-bold bg-[#027DFD] shadow-md shadow-[#027DFD]/50 rounded-md px-2 py-1">Flutter</span>
              <span className="text-xs text-white font-bold bg-[#0AC7EF] shadow-md shadow-[#0AC7EF]/50 rounded-md px-2 py-1">Flutter Hive</span>
              <span className="text-xs text-white font-bold bg-[#007AFF] shadow-md shadow-[#007AFF]/50 rounded-md px-2 py-1">Bloc</span>
              <span className="text-xs text-white font-bold bg-[#6DB33F] shadow-md shadow-[#6DB33F]/50 rounded-md px-2 py-1">Spring Boot</span>
            </div>
            <p className='mt-6 text-[20px] font-mono'>
              Cl!ck mobile app serves as the mobile app version of my react web app project that can book and view travel destinations.
              It aims to provide services such as tourguide hiring, booking, and travel guide. This application was build using Clean Architecture
              approach.
            </p>
            <a 
              className='mt-10 hidden md:flex md:mx-auto lg:mx-0 justify-center w-full items-center bg-green-500 shadow-lg px-3 py-2 rounded-sm text-white font-bold hover:shadow-green-500/50 active:bg-opacity-65'
              href='https://github.com/emmanueljustin/smart-app'
              target='_blank'
            >
              View
              <i className="fa-brands fa-github fa-lg ml-2" />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}