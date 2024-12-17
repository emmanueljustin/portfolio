'use client'
import { useEffect, useRef, useState } from "react";
import emailjs from '@emailjs/browser';

export default function EmailForm() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [show, setShow] = useState(false);
  const [error, setError]  = useState<string | null>(null);
  const form = useRef<HTMLFormElement>(null);

  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(form.current!);
    const name = formData.get("Name");
    const email = formData.get("Email");
    const message = formData.get("Message");

    if (!name || !email || !message) {
      setError('Err: please fill in all of the required fields');
      return;
    }

    if (form.current) {
      setLoading(true);
      setError(null);
      emailjs
        .sendForm(serviceId!, templateId!, form.current, {
          publicKey: publicKey,
        })
        .then(
          () => {
            console.log('SUCCESS!');
            form.current!.reset();
            setMessage('success');
            setLoading(false);
          },
          (error) => {
            console.log('FAILED: ', error);
            setMessage('error');
            setLoading(false);
          },
        );
    } else {
      console.log('Form reference is null');
    }
  };

  useEffect(() => {
    if (message !== '') {
      setShow(true);
      const timer = setTimeout(() => {
        setShow(false);
        setMessage(''); 
      }, 6000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [message]); 

  return (
    <>
      <form ref={form} onSubmit={sendEmail}>
        { error && (
          <div className="w-full p-4 bg-gray-100 bg-opacity-70 rounded-md shadow-lg select-none">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <i className="fa-solid fa-circle-exclamation fa-xl text-red-600 mr-3" />
              <h3 className="text-md">
                {error}
              </h3>
            </div>
            <div className="hover:cursor-pointer text-gray-700 active:text-opacity-65" onClick={() => setError(null)}>
              <i className="fa-solid fa-circle-xmark fa-lg" />
            </div>
          </div>
        </div>
        )}
        { show && (
        <div className="w-full p-4 bg-gray-100 bg-opacity-70 rounded-md shadow-lg select-none">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <i
                className={message == 'success' ? `fa-solid fa-circle-check fa-xl text-green-700 mr-3` : `fa-solid fa-circle-exclamation fa-xl text-red-600 mr-3`}
              />
              <h3 className="text-lg">
                {message == 'success' ? `Message was successfully sent` : `Oops something went wrong. Try again later`}
              </h3>
            </div>
            <div className="hover:cursor-pointer text-gray-700 active:text-opacity-65" onClick={() => setShow(false)}>
              <i className="fa-solid fa-circle-xmark fa-lg" />
            </div>
          </div>
        </div>
        )}
        <div className="flex flex-col items-start justify-start">
          <div className="w-full space-y-5">
            <div>
              <p className="text-white">Full Name</p>
              <input 
                type="text"
                className="w-full rounded-md px-3 py-2"
                name="Name"
                placeholder="e.g. Juan Dela Cruz"
              />
            </div>
            <div>
              <p className="text-white">E-mail</p>
              <input 
                type="email"
                className="w-full rounded-md px-3 py-2"
                name="Email"
                placeholder="e.g. john@yopmail.com"
              />
            </div>
            <div>
              <p className="text-white">Message</p>
              <textarea 
                className="w-full rounded-md h-40 px-3 py-2 resize-none"
                name="Message"
                placeholder="Enter your message"
              />
            </div>
            <div className="">
              <input
                type={!loading ? `submit` : 'button'}
                className={`w-full flex justify-center items-center p-3 rounded-sm text-white font-semibold font-mono shadow-lg ${ !loading ? `bg-sky-400 hover:shadow-sky-400/50 active:bg-opacity-65` : `bg-gray-400 shadow-gray-400/50`}  hover:cursor-pointer`}
                value={loading ? `Sending` : `Send`}
              />
              {/* <i className="fa-solid fa-paper-plane ml-2" /> */}
            </div>

          </div>
        </div>
      </form>
    </>
  )
}