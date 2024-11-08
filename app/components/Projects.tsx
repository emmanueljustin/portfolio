import WebProjects from "./project_components/WebProject";

export default function Projects() {
  return (
    <>
      <div className="px-5 sm:px-10 lg:px-20 py-20 w-full overflow-hidden">
        <div className="flex flex-col justify-center items-center">
          <div className='w-1/2 text-center'>
            <h1 className="text-[35px] text-gray-900 font-extrabold">Projects</h1>
            <p className="mt-5 text-lg text-gray-900 text-opacity-65 font-mono">
              Here are the list of projects that I created and participated in development
            </p>
          </div>

          <WebProjects />
          
        </div>
      </div>
    </>
  )
}