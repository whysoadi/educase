import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='flex justify-center'>
      <div className='h-[81.2rem] w-[37.5rem] bg-[#F7F8F9]'>
        <div className='ml-[20px]'>
        <div className='text-[#1D2226] text-[2.8rem] mr-[12.4rem] mt-[54.9rem] font-medium '>Welcome to PopX</div>
        <div className='leading-[2.6rem] mr-[12.3rem] text-[1.8rem] text-[#1D2226] opacity-60 '>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </div>
        <Link to='/signup' className='mt-[2.9rem] w-[33.9rem] h-[4.6rem] bg-[#6C25FF] rounded-[6px] flex items-center justify-center font-medium text-[#FFFFFF]'>
            <p >Create Account</p>
        </Link>
        <Link to='/login' className='mt-[1rem] w-[33.9rem] h-[4.6rem] bg-[#6C25FF4B] rounded-[6px] flex items-center font-medium justify-center '>
            <p >Already Registered? Login</p>
        </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
