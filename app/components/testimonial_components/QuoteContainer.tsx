interface Props {
  testimonial: string;
  name: string;
  position: string;
}

export default function QuoteContainer(props: Props) {
  return (
    <>
      <div
        className="flex items-stretch rounded-md p-px bg-gradient-to-r from-blue-400 via-sky-200 to-transparent hover:shadow-sky-400/50 hover:shadow-[rgba(15,0,0,0.5)_-5px_0px_20px_2px]"
      >
        <div className="relative flex flex-col bg-[#111111] rounded-md p-10 `rounded-[calc(1.5rem-1px)]`">
          <svg className="absolute inset-0 left-10 -top-5 w-11 h-11 text-gray-300 mb-4 z-10" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
          </svg>
          <p className="text-md sm:text-lg text-gray-300 font-mono">
            &quot;{props.testimonial}&quot;
          </p>
          <div className="mt-auto">
            <h1 className="mt-5 text-[17px] sm:text-[19px] text-gray-300 font-bold">&ndash; {props.name}</h1>
            <h2 className="text-[13px] sm:text-[17px] text-gray-300 font-bold">{props.position}</h2>
          </div>
        </div>
      </div>
    </>
  )
}