import Image from 'next/image';
import project1 from "../../assets/projects/click-web-app.png";
import project2 from "../../assets/projects/hipe-payslip-signer.png";
import laravel from "../../assets/projects/laravel2.png";
import springboot from "../../assets/projects/springboot-api.png";
import bashscript from "../../assets/projects/bash-script.png";

export default function WebProjects() {
  return (
    <>
      <div className="px-2 sm:px-10 lg:px-20 mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col justify-stretch bg-white rounded-md shadow-md p-5 group">
          <div className="overflow-hidden rounded-md">
            <Image
              src={project1}
              className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
              alt="project1"
            />
          </div>
          <div className="mt-5 flex flex-wrap gap-3">
            <span className="text-xs text-[#61dbfb] font-bold border border-[#61dbfb] shadow-md shadow-[#61dbfb]/50 rounded-md px-2 py-1">React js</span>
            <span className="text-xs text-white font-bold bg-[#764ABC] shadow-md shadow-[#764ABC]/50 rounded-md px-2 py-1">Redux</span>
            <span className="text-xs text-white font-bold bg-[#235A97] shadow-md shadow-[#235A97]/50 rounded-md px-2 py-1">TypeScript</span>
            <span className="text-xs text-white font-bold bg-[#38BDF8] shadow-md shadow-[#38BDF8]/50 rounded-md px-2 py-1">Tailwind CSS</span>
            <span className="text-xs text-[#FED100] font-bold bg-gradient-to-br from-[#47caff] to-[#bd34fe] shadow-md shadow-[#235A97]/50 rounded-md px-2 py-1">Vite</span>
            <span className="text-xs text-white font-bold bg-[#6DB33F] shadow-md shadow-[#6DB33F]/50 rounded-md px-2 py-1">Spring Boot</span>
          </div>
          <h2 className="mt-8 text-[26px] font-bold">Cl!cked Web App</h2>
          <p className="mb-5 text-md sm:text-lg text-gray-900 text-opacity-65 font-mono">
            A travel and tour website that showcases tourist spots and famous travel destinations.
          </p>
          <div className="mt-auto w-full md:w-1/3">
            <a 
              href="https://github.com/emmanueljustin/react-clicked"
              className="w-full flex justify-center items-center bg-green-500 shadow-lg px-3 py-2 rounded-sm text-white font-bold hover:shadow-green-500/50 active:bg-opacity-65"
              target="_blank"
            >
              View
              <i className="fa-brands fa-github fa-lg ml-2" />
            </a>
          </div>
        </div>

        <div className="flex flex-col justify-stretch bg-white rounded-md shadow-md p-5 group">
          <div className="overflow-hidden rounded-md">
            <Image
              src={project2}
              className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
              alt="project2"
            />
          </div>
          <div className="mt-5 flex flex-wrap gap-3">
            <span className="text-xs text-[#34495E] font-bold bg-[#41B883] shadow-md shadow-[#41B883]/50 rounded-md px-2 py-1">Vue js</span>
            <span className="text-xs text-white font-bold bg-[#235A97] shadow-md shadow-[#235A97]/50 rounded-md px-2 py-1">TypeScript</span>
            <span className="text-xs text-white font-bold bg-[#38BDF8] shadow-md shadow-[#38BDF8]/50 rounded-md px-2 py-1">Tailwind CSS</span>
          </div>
          <h2 className="mt-8 text-[26px] font-bold">Hipe Payslip Signer</h2>
          <p className="mb-5 text-md sm:text-lg text-gray-900 text-opacity-65 font-mono">
            A payslip signer made by me and my co-worker 
            <a
              href="https://github.com/sunkenquest"
              className="font-bold text-blue-700 mx-2"
              target='_black'
              >
              Mikco Jasareno
            </a>
            to ease up our signing process and for us to not rely on third party pdf signing applications.
          </p>
          <div className="mt-auto w-full md:w-1/3">
            <a 
              href="https://github.com/sunkenquest/payslip-e-sig"
              className="w-full flex justify-center items-center bg-green-500 shadow-lg px-3 py-2 rounded-sm text-white font-bold hover:shadow-green-500/50 active:bg-opacity-65"
              target="_blank"
            >
              View
              <i className="fa-brands fa-github fa-lg ml-2" />
            </a>
          </div>
        </div>

        <div className="flex flex-col justify-stretch bg-white rounded-md shadow-md p-5 group">
          <div className="overflow-hidden rounded-md">
            <Image
              src={laravel}
              className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
              alt="project3"
            />
          </div>
          <div className="mt-5 flex flex-wrap gap-3">
            <span className="text-xs text-[#EB4432] font-bold border border-[#EB4432] shadow-md shadow-[#EB4432]/50 rounded-md px-2 py-1">Laravel</span>
            <span className="text-xs text-white font-bold bg-[#4F5B93] shadow-md shadow-[#4F5B93]/50 rounded-md px-2 py-1">PHP</span>
            <span className="flex text-xs font-bold bg-[#f2f2f2] shadow-md rounded-md px-2 py-1">
              <p className="text-[#00758F]">My</p>
              <p className="text-[#F29111]">SQL</p>
            </span>
            <span className="text-xs text-white font-bold bg-[#1D63ED] shadow-md shadow-[#1D63ED]/50 rounded-md px-2 py-1">Docker</span>
          </div>
          <h2 className="mt-8 text-[26px] font-bold">Laravel Api</h2>
          <p className="mb-5 text-md sm:text-lg text-gray-900 text-opacity-65 font-mono">
            A Laravel api that is uses MVC structure and passport authentication for user aurthorization and also integrated with Gemini Api.
          </p>
          <div className="mt-auto w-full md:w-1/3">
            <a 
              href="https://github.com/emmanueljustin/laravel-api-2"
              className="w-full flex justify-center items-center bg-green-500 shadow-lg px-3 py-2 rounded-sm text-white font-bold hover:shadow-green-500/50 active:bg-opacity-65"
              target="_blank"
            >
              View
              <i className="fa-brands fa-github fa-lg ml-2" />
            </a>
          </div>
        </div>

        <div className="flex flex-col justify-stretch bg-white rounded-md shadow-md p-5 group">
          <div className="overflow-hidden rounded-md">
            <Image
              src={springboot}
              className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
              alt="project4"
            />
          </div>
          <div className="mt-5 flex flex-wrap gap-3">
            <span className="text-xs text-white font-bold bg-[#6DB33F] shadow-md shadow-[#6DB33F]/50 rounded-md px-2 py-1">Spring Boot</span>
            <span className="text-xs text-white font-bold bg-[#5382A1] shadow-md shadow-[#5382A1]/50 rounded-md px-2 py-1">Java</span>
            <span className="flex text-xs font-bold bg-[#f2f2f2] shadow-md rounded-md px-2 py-1">
              <p className="text-[#00758F]">My</p>
              <p className="text-[#F29111]">SQL</p>
            </span>
          </div>
          <h2 className="mt-8 text-[26px] font-bold">Cl!cked V2 Api</h2>
          <p className="mb-5 text-md sm:text-lg text-gray-900 text-opacity-65 font-mono">
            Developed to cater the Cl!ck React Web app for its authentication and and dynamic contents it is also used in the Cl!cked Mobile
            Application it is also using MVC Structure.
          </p>
          <div className="mt-auto w-full md:w-1/3">
            <a 
              href="https://github.com/emmanueljustin/clickedv2-api"
              className="w-full flex justify-center items-center bg-green-500 shadow-lg px-3 py-2 rounded-sm text-white font-bold hover:shadow-green-500/50 active:bg-opacity-65"
              target="_blank"
            >
              View
              <i className="fa-brands fa-github fa-lg ml-2" />
            </a>
          </div>
        </div>

        <div className="flex flex-col justify-stretch bg-white rounded-md shadow-md p-5 group">
          <div className="overflow-hidden rounded-md">
            <Image
              src={bashscript}
              className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
              alt="project5"
            />
          </div>
          <div className="mt-5 flex flex-wrap gap-3">
            <span className="text-xs text-[#33FF33] font-mono font-bold bg-gray-700 shadow-gray-700/50 shadow-md rounded-md px-2 py-1">&gt; Shell Script</span>
            <span className="text-xs text-white font-bold bg-[#027DFD] shadow-md shadow-[#027DFD]/50 rounded-md px-2 py-1">Flutter</span>
          </div>
          <h2 className="mt-8 text-[26px] font-bold">Shell Script for Flutter Architecture</h2>
          <p className="mb-5 text-md sm:text-lg text-gray-900 text-opacity-65 font-mono">
            I created a bash script for the purpose of automating the the lengthy process of creating a Clean Architecture and MVC Architecture
            file structure in Flutter development. It eases up the development time and the developer can focus more on creating logic intead of
            manually building the files needed.
          </p>
          <div className="mt-auto w-full md:w-1/3">
            <a 
              href="https://github.com/emmanueljustin/bash-scripts"
              className="w-full flex justify-center items-center bg-green-500 shadow-lg px-3 py-2 rounded-sm text-white font-bold hover:shadow-green-500/50 active:bg-opacity-65"
              target="_blank"
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