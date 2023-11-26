"use client"
import React, { useState } from 'react'
import { CircularText } from './Icons'
import Link from 'next/link'
import ContactInfo from './ContactInfo'

const HireMe = () => {
  const [isHired, setIsHired] = useState(false)
  const handleIsHired=()=>{
    setIsHired(!isHired)
  }
  return (
          <div className='fixed w-[150px] bottom-0 z-10  overflow-hidden'>
              <div className='flex items-center justify-center '>
              <CircularText className={"fill-dark dark:fill-light animate-spin-slow"} />
              <Link href={"#"}
                  className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                  shadow-md
              bg-dark text-white rounded-full w-[70px] h-[70px] flex items-center justify-center
              hover:bg-white hover:text-dark duration-[0.5s]
              dark:bg-white 
              dark:text-dark
              hover:dark:bg-dark
              hover:dark:text-light
              '
          onClick={handleIsHired}
              >Hire ME </Link>
      </div>
      {<ContactInfo isHired={ isHired} />}
          </div>
  )
}

export default HireMe