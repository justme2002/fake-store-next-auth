import { Product } from '@/interfaces/Product'
import Image from 'next/image'
import React from 'react'

type CardProps = Product

const Card: React.FC<CardProps> = ({ title, image, price }) => {
  return (
    <div className='
      md:h-[500px]
      md:w-[420px]
      h-[270px]
      w-[170px]
      bg-slate-500
      rounded-md
      overflow-hidden
      relative
      hover:opacity-80
      transition
      duration-75
    '>
      <img
        className='
          absolute
          h-[500px]
          w-[420px]
          hover:scale-110
          transition
          duration-75
        ' 
        src={image}
        alt={image}
      />
      <div className='
        absolute
        bottom-0
        z-1'>
        <div className='
          px-2
          py-2
          w-[420px] 
          md:h-[150px]
          h-[100px]
          bg-slate-500
        '>
          <p className='
            font-medium
            text-md
            truncate
            text-lg
            cursor-pointer
          '>{title}</p>
          <p className='
            text-5xl
            flex
            items-center
            h-full
          '>{price}$</p>
        </div>
      </div>
    </div>
  )
}

export default Card