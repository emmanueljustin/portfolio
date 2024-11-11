export default function Testimonials(){
  return(
    <>
      <div className="px-5 sm:px-20 py-20 w-full bg-[#111111]">
        <div className="flex flex-col justify-center items-center">
          <div className="text-center">
            <h1 id="Testimonials" className="text-[35px] text-white font-extrabold">Testimonials</h1>
            <p className='mt-5 text-lg text-center text-white text-opacity-65 font-mono'>
              Here are a few testimonials from people I&apos;ve worked with
            </p>
          </div>
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 select-none">

            <div className="flex flex-col justify-stretch w-full bg-gray-300 px-10 py-5 rounded-md">
              <p className="text-md sm:text-lg text-gray-900 font-mono">
                &quot;Emmanuel is diligent and determined person who has the courage to take on challenges and also makes
                sure that his tasks are done on time. Enjoys Learning and doesn&apos;t want to get left behind, always on
                the go! And having pleasant personality and very communicative.&quot;
              </p>
              <div className="mt-auto">
                <h1 className="mt-5 text-[17px] sm:text-[19px] text-gray-900 font-bold">Nelson Bathan</h1>
                <h2 className="text-[13px] sm:text-[17px] text-gray-900 font-bold">Senior Lead Software Engineer, Peddlr</h2>
              </div>
            </div>

            <div className="flex flex-col justify-stretch w-full bg-gray-300 px-10 py-5 rounded-md">
              <p className="text-md sm:text-lg text-gray-900 font-mono">
                &quot;Working with Emman on our Flutter project was a great experience. He was always willing to share his knowledge
                and helped me navigate complex challenges with ease. His supportive and collaborative approach made a huge difference, and I&apos;m grateful for all i learned from him.&quot;
              </p>
              <div className="mt-auto">
                <h1 className="mt-5 text-[17px] sm:text-[19px] text-gray-900 font-bold">Dhave Barsalote</h1>
                <h2 className="text-[13px] sm:text-[17px] text-gray-900 font-bold">Former Senior Software Engineer, Peddlr</h2>
              </div>
            </div>

            <div className="flex flex-col justify-stretch w-full bg-gray-300 px-10 py-5 rounded-md">
              <p className="text-md sm:text-lg text-gray-900 font-mono">
                &quot;My time working with Emmanuel was truly incredible. Out collaboration in achieving the goals for the task was impressive, and he was always very responsive to my concerns. He has a great ability to adapt to technical challenges. thanks to his flexibility. I look forward to the opportunity to work with him again in the future!&quot;
              </p>
              <div className="mt-auto">
                <h1 className="mt-5 text-[17px] sm:text-[19px] text-gray-900 font-bold">Eubie Jay Clemente</h1>
                <h2 className="text-[13px] sm:text-[17px] text-gray-900 font-bold">Former Full Stack Developer, Peddlr</h2>
              </div>
            </div>

            <div className="flex flex-col justify-stretch w-full bg-gray-300 px-10 py-5 rounded-md lg:col-start-2 lg:col-span-1 lg:row-start-2 lg:row-span-2">
              <p className="text-md sm:text-lg text-gray-900 font-mono">
                &quot;I&apos;ve had the pleasure of working with Emman and I&apos;m continually impressed by his dedication and enthusiasm. He&apos;s
                always energetic and ready to tackle new challenges, bringing a lively spirit to any project. He&apos;s genuinely open to a feedback,
                welcoming suggestions with a growth mindset, and is constantly eager to learn and enhance his skills. Emman is a true asset to any
                team, combining hardwork with a willingness to improve&mdash;a fantastic collborator and a fast learner.&quot;
              </p>
              <div className="mt-auto">
                <h1 className="mt-5 text-[17px] sm:text-[19px] text-gray-900 font-bold">Valle John Teruel</h1>
                <h2 className="text-[13px] sm:text-[17px] text-gray-900 font-bold">Lead Software Engineer, Peddlr</h2>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}