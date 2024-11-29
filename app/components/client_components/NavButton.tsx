'use client'

interface Props {
  children: React.ReactNode | string;
}

export default function NavButton(props: Props) {
  return (
    <h2
      className="px-3 py-4 hover:cursor-pointer rounded-md hover:bg-white hover:bg-opacity-55"
      onClick={() => {document.getElementById(`${props.children}`)?.scrollIntoView({behavior: 'smooth'})}}
    >
      {props.children}
    </h2>
  )
}