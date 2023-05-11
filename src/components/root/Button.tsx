import React, { ReactElement } from 'react'
import { IconType } from 'react-icons'
import { FcGoogle } from 'react-icons/fc'

interface ButtonProps {
  label: string
  color: string
  onClick: () => void
  icons?: ReactElement
  rounded?: string
}

const Button = ({ 
  label,
  color,
  onClick,
  icons,
  rounded
}: ButtonProps) => {
  return (
    <button onClick={() => onClick()} className={`${color} ${rounded} bg-slate-700 px-6 py-4 transition hover:opacity-80`}>
      <div className='flex gap-3'>
        {icons}
        <p className='font-medium hidden md:block'>{label}</p>
      </div>
    </button>
  )
}

export default Button