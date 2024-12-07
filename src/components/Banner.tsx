import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const Banner = () => {
  return (
    <div className='flex justify-center items-center py-1 bg-orange-100 text-black font-semibold text-sm'>
        <div className='inline-flex gap-2 items-center'>
            <p className='pt-[2px]'>Admissions open, apply now</p>
            <FaArrowRight />
        </div>
    </div>
  )
}

export default Banner