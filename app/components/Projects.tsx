'use client'
import { useState } from "react";
import MobileProjects from "./project_components/MobileProject";
import WebProjects from "./project_components/WebProject";

export default function Projects() {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div className="py-20 px-5 w-full overflow-hidden">
        <div className="flex flex-col justify-center items-center">
          <div className='mb-10 w-full md:w-1/2 text-center'>
            <h2 id="Projects" className="text-[35px] text-gray-900 font-extrabold">Projects/Work</h2>
            <p className="mt-5 text-lg text-gray-900 text-opacity-65 font-mono">
              Here are the list of projects that I created and participated in development
            </p>
          </div>

          {/* <div className="relative border rounded-full flex justify-center items-center overflow-hidden font-bold hover:cursor-pointer">

            <div onClick={() => setToggle(false)} className={`${!toggle ? `bg-sky-400` : `bg-transparent`} px-5 py-3 rounded-full transition-all ease-in-out duration-500`}>
              <h3>Mobile</h3>
            </div>
            <div onClick={() => setToggle(true)} className={`${toggle ? `bg-sky-400` : `bg-transparent`} px-5 py-3 rounded-full transition-all ease-in-out duration-500`}>
              <h3>Web/Script</h3>
            </div>
          </div> */}
          <label className="relative inline-flex cursor-pointer items-center">
            <input type="checkbox" checked={toggle} onChange={() => setToggle(!toggle)} className="peer sr-only" />
            <div
              className="peer flex h-8 gap-5 items-center rounded-full bg-sky-400 px-3 after:absolute after:left-1 after:h-6 after:w-[63px] after:rounded-full after:bg-white/40 after:transition-all after:content-[''] peer-checked:bg-skye-400 peer-checked:after:translate-x-full peer-focus:outline-none text-sm text-white"
            >
              <span>Mobile</span>
              <span>Website</span>
            </div>
          </label>

          { !toggle && (<MobileProjects />) }
          { toggle && (<WebProjects />) }
          
        </div>
      </div>
    </>
  )
}