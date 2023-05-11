import React from 'react'

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className='
        xl:px-24
        lg:px-20
        md:px-16
        sm:px-10
        px-5 py-2
        pb-10
      '
    >{children}</div>
  )
}

export default Container