import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'

const Home = () => {
    const [isHovered, setIsHovered] = useState(false);
  return (
    <div className='bg-white p-5 space-y-4 rounded-md'>
        <h1 className='text-3xl font-semibold'>Quiz <span className='text-violet-700'>App</span></h1>
        <hr className='bg-gray-400 h-[2px]' />
        <div className='flex space-x-4'>
          <Link to={'/login'}><button className="bg-violet-900 hover:bg-violet-700 text-white text-lg px-6 py-2 rounded cursor-pointer" onMouseEnter={() => setIsHovered(true)}onMouseLeave={() => setIsHovered(false)}>{isHovered ? 'Login' : 'Admin'}</button></Link>
          <Link to={'/quiz'}><button className='bg-violet-900 hover:bg-violet-700 text-white text-lg px-6 py-2 rounded cursor-pointer'>Start your Quiz</button></Link>
        </div>
    </div>
  )
}

export default Home

