import QuoteContainer from "./testimonial_components/QuoteContainer"

export default function Testimonials() {
  return(
    <>
      <div className="px-5 sm:px-20 py-20 w-full bg-[#111111]">
        <div className="flex flex-col justify-center items-center">
          <div className="text-center">
            <h2 id="Testimonials" className="text-[35px] text-white font-extrabold">Testimonials</h2>
          </div>

          <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-10">
            <QuoteContainer
              testimonial="Emmanuel is diligent and determined person who has the courage to take on challenges and also makes
                  sure that his tasks are done on time. Enjoys Learning and doesn&apos;t want to get left behind, always on
                  the go! And having pleasant personality and very communicative."
              name="Nelson Bathan"
              position="Senior Lead Software Engineer, Peddlr"
            />

            <QuoteContainer 
              testimonial="Working with Emman on our Flutter project was a great experience. He was always willing to share his knowledge
                  and helped me navigate complex challenges with ease. His supportive and collaborative approach made a huge difference,
                  and I&apos;m grateful for all I learned from him."
              name="Dhave Barsalote"
              position="Former Senior Software Engineer, Peddlr"
            />

            <QuoteContainer 
              testimonial="My time working with Emmanuel was truly incredible. Our collaboration in achieving the goals for the task was impressive,
                  and he was always very responsive to my concerns. He has a great ability to adapt to technical challenges. Thanks to his
                  flexibility. I look forward to the opportunity to work with him again in the future!"
              name="Eubie Jay Clemente"
              position="Former Full Stack Developer, Peddlr"
            />

            <QuoteContainer 
              testimonial="I&apos;ve had the pleasure of working with Emman and I&apos;m continually impressed by his dedication and enthusiasm. He&apos;s
                  always energetic and ready to tackle new challenges, bringing a lively spirit to any project. He&apos;s genuinely open to a feedback,
                  welcoming suggestions with a growth mindset, and is constantly eager to learn and enhance his skills. Emman is a true asset to any
                  team, combining hardwork with a willingness to improve&mdash;a fantastic collaborator and a fast learner."
              name="Valle John Teruel"
              position="Lead Software Engineer, Peddlr"
            />

          </div>
        </div>
      </div>
    </>
  );
}