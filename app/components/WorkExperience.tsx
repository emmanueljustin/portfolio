import Image from 'next/image';
import placeHolder1 from '../assets/placeholder1.jpg';
import placeHolder2 from '../assets/placeholder2.jpg';

export default function WorkExperience() {
  return (
    <>
      <div className='py-20 px-5 sm:px-20 w-full'>
        <div className='flex flex-col justify-center items-center'>
          <div className='w-full px-20 md:px-0 md:w-1/2 text-center'>
            <h1 className='text-[35px] text-gray-900 font-extrabold'>Work Experience</h1>
            <p className='mt-5 text-lg text-gray-900 text-opacity-65 font-mono'>
              Here is the list and responsibilities of the company that i worked with in my 3 years of working in the IT Industry.
            </p>
          </div>
        </div>
        <ul className="block mt-20 mx-auto w-full md:w-3/4 lg:hidden">
          <li className="relative flex gap-6 pb-5">
            <div className="before:absolute before:left-[9.9px] before:h-full before:w-1 before:bg-gray-800">
              <i className="fa-solid fa-circle fa-xl text-gray-800" />
            </div>
            <div className='flex flex-col justify-center items-start'>
              <a href="https://en.hipe.asia/" className="text-[30px] font-bold hover:text-[#2190AE]" target="_blank">HiPE Japan Inc.</a>
              <h2 className="text-[20px] text-gray-900 font-mono">Software Engineer (Sep 2024 - Present)</h2>
              <p className="mt-5 text-lg text-gray-900 text-opacity-65 font-mono">
                My day to day task revolves around learning new technologies mainly focusing on web development and backend development.
                In this company I learned on how to develop web application using ReactJS, VueJs, and Blazor as for the backend I created numerous
                REST API such as Laravel, Dotnet, and Java Spring boot.
              </p>
            </div>
          </li>
          <li className="relative flex gap-6 pb-5">
            <div className="before:absolute before:left-[9.9px] before:h-full before:w-1 before:bg-gray-800">
              <i className="fa-solid fa-circle fa-xl text-gray-800" />
            </div>
            <div className='flex flex-col justify-center items-start'>
              <a href="https://www.peddlr.io/" className="text-[30px] font-bold hover:text-[#EA2F92]" target="_blank">Peddlr Philippines Inc.</a>
              <h2 className="text-[20px] text-gray-900 font-mono">Software Engineer - Flutter (Feb 2022 - Aug 2024)</h2>
              <p className="mt-5 text-lg text-gray-900 text-opacity-65 font-mono">
                My days in Peddlr, I am tasked with developing new features, improving existing ones, and fixing bugs for both
                production and development using Flutter for mobile development. I also collaborated with both Backend developers,
                QA engineers, and UI/UX designers to address the issues related to the mobile application needs for development or fixes.
              </p>
            </div>
          </li>
          <li className="relative flex gap-6 pb-5">
            <div className="before:absolute before:left-[9.9px] before:h-full before:w-1 before:bg-gray-800">
              <i className="fa-solid fa-circle fa-xl text-gray-800" />
            </div>
            <div className='flex flex-col justify-center items-start'>
              <a href="https://www.linkedin.com/company/leentechsystems/" className="text-[30px] font-bold hover:text-green-900" target="_blank">LEENTech Network Solutions Inc.</a>
              <h2 className="text-[20px] text-gray-900 font-mono">Mobile Developer Intern (Aug 2021)</h2>
              <p className="mt-5 text-lg text-gray-900 text-opacity-65 font-mono">
                My internship in LEENTech I was tasked in creating a employee attendance tracker mobile application using Flutter & Firebase
                in just one month I have finished the attendance tracker with the fingerprint clock in feature and realtime data update I
                also successfully integrated authentication using Firebase.
              </p>
            </div>
          </li>
        </ul>

        <div className='hidden px-28 mt-20 lg:grid grid-cols-2 gap-10'>
          <div className='flex flex-col justify-center items-start'>
            <a href="https://en.hipe.asia/" className="text-[30px] font-bold hover:text-[#2190AE]" target="_blank">HiPE Japan Inc.</a>
            <h2 className="text-[20px] text-gray-900 font-mono">Software Engineer (Sep 2024 - Present)</h2>
            <p className="mt-5 text-lg text-gray-900 text-opacity-65 font-mono">
              My day to day task revolves around learning new technologies mainly focusing on web development and backend development.
              In this company I learned on how to develop web application using ReactJS, VueJs, and Blazor as for the backend I created numerous
              REST API such as Laravel, Dotnet, and Java Spring boot.
            </p>
          </div>
          <div className='flex justify-center items-center'>
          <Image 
              src={placeHolder1}
              className='object-cover rounded-md h-[350px] w-full'
              alt=''
            />
          </div>

          <div className='flex justify-center items-center'>
          <Image 
              src={placeHolder2}
              className='object-cover rounded-md h-[350px] w-full'
              alt=''
            />
          </div>
          <div className='flex flex-col justify-center items-start'>
            <a href="https://www.peddlr.io/" className="text-[30px] font-bold hover:text-[#EA2F92]" target="_blank">Peddlr Philippines Inc.</a>
            <h2 className="text-[20px] text-gray-900 font-mono">Software Engineer - Flutter (Feb 2022 - Aug 2024)</h2>
            <p className="mt-5 text-lg text-gray-900 text-opacity-65 font-mono">
              My days in Peddlr, I am tasked with developing new features, improving existing ones, and fixing bugs for both
              production and development using Flutter for mobile development. I also collaborated with both Backend developers,
              QA engineers, and UI/UX designers to address the issues related to the mobile application needs for development or fixes.
            </p>
          </div>

          <div className='flex flex-col justify-center items-start'>
            <a href="https://www.linkedin.com/company/leentechsystems/" className="text-[30px] font-bold hover:text-green-900" target="_blank">LEENTech Network Solutions Inc.</a>
            <h2 className="text-[20px] text-gray-900 font-mono">Mobile Developer Intern (Aug 2021)</h2>
            <p className="mt-5 text-lg text-gray-900 text-opacity-65 font-mono">
              My internship in LEENTech I was tasked in creating a employee attendance tracker mobile application using Flutter & Firebase
              in just one month I have finished the attendance tracker with the fingerprint clock in feature and realtime data update I
              also successfully integrated authentication using Firebase.
            </p>
          </div>
          <div className='flex justify-center items-center'>
          <Image 
              src={placeHolder1}
              className='object-cover rounded-md h-[350px] w-full'
              alt=''
            />
          </div>
        </div>
      </div>
    </>
  )
}