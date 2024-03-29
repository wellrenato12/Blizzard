import { ReactNode } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { Modal } from './Header/modal'

interface ButtonProps {
  backgroundColor: '#00AEFF' | 'transparent'
  content: string
  width: number
  icon?: ReactNode | string
  modal?: boolean
}

export function Button({
  backgroundColor,
  content,
  width,
  icon,
  modal,
}: ButtonProps) {
  if (modal) {
    return (
      <Dialog.Root>
        <Dialog.Trigger asChild>
          {icon ? (
            <button
              className={`flex items-center justify-center gap-2 rounded-sm px-4 py-2 h-[52px] w-[${width}px] ${backgroundColor === 'transparent' ? 'bg-transparent border border-white hover:bg-white hover:text-black transition-all' : 'bg-[#00AEFF] hover:bg-[#38bdf8] transition-all duration-300'}`}
            >
              {typeof icon === 'string' ? (
                <img src={icon} alt="Icon" className="w-4 h-4" />
              ) : (
                icon
              )}
              {content}
            </button>
          ) : (
            <button
              className={`rounded-sm px-4 py-2 h-[52px] w-[${width}px] ${backgroundColor === 'transparent' ? 'bg-transparent border border-white hover:bg-white hover:text-black transition-all' : 'bg-[#00AEFF] hover:bg-[#38bdf8] transition-all duration-300'}`}
            >
              {content}
            </button>
          )}
        </Dialog.Trigger>
        <Modal />
      </Dialog.Root>
    )
  }
  return icon ? (
    <button
      className={`flex items-center justify-center gap-2 rounded-sm px-4 py-2 h-[52px] w-[${width}px] ${backgroundColor === 'transparent' ? 'bg-transparent border border-white hover:bg-white hover:text-black transition-all' : 'bg-[#00AEFF] hover:bg-[#38bdf8] transition-all duration-300'}`}
    >
      {typeof icon === 'string' ? (
        <img src={icon} alt="Icon" className="w-4 h-4" />
      ) : (
        icon
      )}
      {content}
    </button>
  ) : (
    <button
      className={`mx-auto sm:mx-0 rounded-sm px-4 py-2 h-[52px] w-[${width}px] ${backgroundColor === 'transparent' ? 'bg-transparent border border-white hover:bg-white hover:text-black transition-all' : 'bg-[#00AEFF] hover:bg-[#38bdf8] transition-all duration-300'}`}
    >
      {content}
    </button>
  )
}
