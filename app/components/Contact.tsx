import EmailForm from "./client_components/EmailForm";

export default function Contact() {
  return (
    <>
      <div className="px-5 sm:px-20 pt-20 w-full bg-[#333333]">
        <div className="flex flex-col justify-center items-center">
          <h2 id="Contact Me" className="text-[35px] text-white font-extrabold">Get In Touch</h2>
          <p className='mt-5 text-lg text-center text-white text-opacity-65 font-mono'>
            Reach out to me so that we can communicate
          </p>
          <div className="mt-20 w-full px-0 sm:px-20 lg:px-52 grid grid-cols-1 lg:grid-cols-2 gap-5 font-mono">
            <div className="flex flex-col items-start justify-start space-y-5 bg-white rounded-md text-gray-900 p-7 lg:p-0 lg:text-white lg:bg-transparent">
              <h3 className="text-[30px] font-bold">Contact Details</h3>
              <a href="https://ph.linkedin.com/in/ej-atienza" className=" underline" target="_blank">
                <i className="fa-brands fa-linkedin fa-xl mr-3" />ej-atienza
              </a>
              <a href="https://github.com/emmanueljustin" className=" underline" target="_blank">
                <i className="fa-brands fa-github fa-xl mr-3" />emmanueljustin
              </a>
              <p><i className="fa-solid fa-location-dot fa-xl mr-3" />Taguig City, NCR</p>
              <p><i className="fa-solid fa-phone fa-xl mr-3" />(+63) 976 465 8681</p>
              <p><i className="fa-solid fa-envelope fa-xl mr-3" />ejatienza01@gmail.com</p>
            </div>

            <EmailForm />

          </div>
          <div className="mt-20">
            <h3 className="text-white font-semibold">&copy; 2025 Atienza. All Rights Reserved.</h3>
          </div>
        </div>
      </div>
    </>
  )
}