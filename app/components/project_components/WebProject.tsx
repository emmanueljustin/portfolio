import Image from 'next/image';
import project1 from "../../assets/projects/click-web-app.png";
import project2 from "../../assets/projects/hipe-payslip-signer.png";

export default function WebProjects() {
  return (
    <>
      <div className="px-0 sm:px-10 lg:px-20 mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
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
          <h1 className="mt-8 text-[26px] font-bold">Cl!cked Web App</h1>
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
              <i className="fa-solid fa-code ml-2" />
            </a>
          </div>
        </div>

        <div className="flex flex-col justify-stretch bg-white rounded-md shadow-md p-5 group">
          <div className="overflow-hidden rounded-md">
            <Image
              src={project2}
              className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
              alt="project1"
            />
          </div>
            <div className="mt-5 flex flex-wrap gap-3">
            <span className="text-xs text-[#34495E] font-bold bg-[#41B883] shadow-md shadow-[#41B883]/50 rounded-md px-2 py-1">Vue js</span>
            <span className="text-xs text-white font-bold bg-[#235A97] shadow-md shadow-[#235A97]/50 rounded-md px-2 py-1">TypeScript</span>
            <span className="text-xs text-white font-bold bg-[#38BDF8] shadow-md shadow-[#38BDF8]/50 rounded-md px-2 py-1">Tailwind CSS</span>
          </div>
          <h1 className="mt-8 text-[26px] font-bold">Hipe Payslip Signer</h1>
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
              <i className="fa-solid fa-code ml-2" />
            </a>
          </div>
        </div>

      </div>
    </>
  )
}