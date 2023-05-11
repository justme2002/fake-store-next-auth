import React, { useCallback, useState } from 'react'
import Button from '../root/Button'
import { signIn, signOut, useSession } from 'next-auth/react'
import { FcGoogle } from 'react-icons/fc'

const Navbar = () => {

  const session = useSession()

  const [ isShow, setIsShow ] = useState(false)

  const handleShow = useCallback(() => {
    setIsShow(prev => !prev)
  }, [])

  return (
    <>
      <div className='
        bg-slate-800
        flex
        justify-between
        fixed
        w-full
        top-0
        z-50
        right-0
        xl:px-24
        lg:px-20
        md:px-16
        sm:px-10
        px-5 py-2
        shadow-md
        shadow-gray-500
      '>
        <h1 className='text-3xl font-thin text-white'>Fake<span className='font-bold'>Store</span></h1>
        {session.status == "authenticated" ? <div className='
          relative
        '>
          <div className='
            overflow-hidden
            rounded-full
          '>
            <Button 
              label={session.data.user?.name as string}
              color='text-white'
              onClick={() => handleShow()}
            />
            <Button 
              label={"Sign out"}
              color='text-white'
              onClick={() => signOut()}
            />
          </div>
          {isShow && <div className='
            rounded-md
            w-full
            mt-3
            absolute
            bg-slate-500
            flex
            flex-col
            transition
          '>
            <Button
              label='cart'
              color=""
              onClick={() => {}}
            />
          </div>}
        </div> : <Button 
        label='Sign in with google'
        color='text-white'
        rounded='rounded-full'
        icons={<FcGoogle className='mt-1'/>}
        onClick={() => signIn("google")}
      />}
      </div>
    </>
  )
}

export default Navbar