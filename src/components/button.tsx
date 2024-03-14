import { ReactNode } from 'react'

interface ButtonProps {
  backgroundColor: '#00AEFF' | 'transparent'
  content: string
  width: number
  icon?: ReactNode
}

export function Button({ backgroundColor, content, width, icon }: ButtonProps) {
  return (
    <>
      {icon ? (
        <button
          className={`flex items-center gap-2 rounded-sm px-4 py-2 h-[52px] w-[${width}px] ${backgroundColor === 'transparent' ? 'bg-transparent border border-white hover:bg-white hover:text-black transition-all' : 'bg-[#00AEFF] hover:bg-[#38bdf8] transition-all duration-300'}`}
        >
          {icon}
          {content}
        </button>
      ) : (
        <button
          className={`rounded-sm px-4 py-2 h-[52px] w-[${width}px] ${backgroundColor === 'transparent' ? 'bg-transparent border border-white hover:bg-white hover:text-black transition-all' : 'bg-[#00AEFF] hover:bg-[#38bdf8] transition-all duration-300'}`}
        >
          {content}
        </button>
      )}
    </>
  )
}
