import EmailForm from "./client_components/EmailForm";

export default function Contact() {
  return (
    <>
      <div className="px-5 sm:px-20 py-20 w-full bg-[#333333]">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-[35px] text-white font-extrabold">Get In Touch</h1>
          <p className='mt-5 text-lg text-center text-white text-opacity-65 font-mono'>
            Reach out to me so that we can communicate
          </p>
          <div className="mt-20 w-full px-0 sm:px-20 lg:px-52 grid grid-cols-1 lg:grid-cols-2 gap-5 font-mono">
            <div className="flex flex-col items-start justify-start space-y-5 bg-white rounded-md text-gray-900 p-7 lg:p-0 lg:text-white lg:bg-transparent">
              <h1 className="text-[30px] font-bold">Contact Details</h1>
              <a href="https://ph.linkedin.com/in/ej-atienza" className=" underline" target="_blank">
                <i className="fa-brands fa-linkedin fa-xl mr-3" />ej-atienza
              </a>
              <p><i className="fa-solid fa-location-dot fa-xl mr-3" />Taguig City, NCR</p>
              <p><i className="fa-solid fa-phone fa-xl mr-3" />+63 976 465 8681 (Globe/Gomo)</p>
              <p><i className="fa-solid fa-envelope fa-xl mr-3" />ejatienza01@gmail.com</p>
            </div>

            <EmailForm />

          </div>
        </div>
      </div>
    </>
  )
}