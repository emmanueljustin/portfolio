export default function Contact() {
  return (
    <>
      <div className="p-20 w-full h-screen bg-[#333333]">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-[35px] text-white font-extrabold">Get In Touch</h1>
          <p className='mt-5 text-lg text-white text-opacity-65 font-mono'>
            Reach out to me so that we can communicate
          </p>
          <div className="mt-20 w-full px-52 grid grid-cols-2 gap-5 font-mono">
            <div className="flex flex-col items-start justify-start space-y-5">
              <h1 className="text-[30px] text-white font-bold">Contact Details</h1>
              <a href="https://ph.linkedin.com/in/ej-atienza" className="text-white underline" target="_blank">
                <i className="fa-brands fa-linkedin fa-xl mr-3" />ej-atienza
              </a>
              <p className="text-white"><i className="fa-solid fa-location-dot fa-xl mr-3" />Taguig City, NCR</p>
              <p className="text-white"><i className="fa-solid fa-phone fa-xl mr-3" />+63 976 465 8681 (Globe/Gomo)</p>
              <p className="text-white"><i className="fa-solid fa-envelope fa-xl mr-3" />ejatienza01@gmail.com</p>
            </div>
            <div className="flex flex-col items-start justify-start">
              <div className="w-full space-y-5">
                <div>
                  <p className="text-white">Name</p>
                  <input 
                    type="text"
                    className="w-full rounded-md px-3 py-2"
                    name="Name"
                    placeholder="Name"
                  />
                </div>
                <div>
                  <p className="text-white">E-mail</p>
                  <input 
                    type="email"
                    className="w-full rounded-md px-3 py-2"
                    name="Email"
                    placeholder="E-mail"
                  />
                </div>
                <div>
                  <p className="text-white">Message</p>
                  <textarea 
                    className="w-full rounded-md h-40 px-3 py-2 resize-none"
                    placeholder="Enter your message"
                  />
                </div>
                <div>
                  <button className="w-full p-3 bg-sky-400 rounded-sm text-white font-semibold font-mono shadow-lg shadow-sky-400/50 active:bg-opacity-65">
                    Submit<i className="fa-solid fa-paper-plane ml-2" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}