import { ReactNode } from 'react'

interface ButtonProps {
  backgroundColor: '#00AEFF' | 'transparent'
  content: string
  height: number
  width: number
  icon?: ReactNode
}

export function Button({
  backgroundColor,
  content,
  width,
  height,
  icon,
}: ButtonProps) {
  return (
    <>
      {icon ? (
        <button
          className={`flex items-center gap-2 bg-[${backgroundColor}] h-[${height}px] w-[${width}]px`}
        >
          {icon}
          {content}
        </button>
      ) : (
        <button
          className={`bg-[${backgroundColor}] h-[${height}px] w-[${width}]px`}
        >
          {content}
        </button>
      )}
    </>
  )
}
