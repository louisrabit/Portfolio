import React from 'react'
import {HiArrowNarrowRight} from "react-icons/hi" //import icon


function Home() {
  return (
    <div name="home" className='w-full h-screen bg-[#3d3b3b] text-gray-300'>

<div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
<p className=' text-[#ff7373]'>Hi , my Name is</p>
<h1 className='text-4xl sm:text-7xl font-bold text-yellow-200'>Luis Coelho</h1>
<h2 className='text-4xl sm:text-5xl font-bold text-[#345e7a]'>Im Junior Full-Stack Web Developer , </h2> 
<p>Im Junior Full-Stack Web Developer 
  I finish  9 weeks , Intensive Bootcamp in IronHack 
</p>

{/*  <div >
  <button  className='text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-yellow-500  hover:border-yellow-500 '>View My Work
   <HiArrowNarrowRight className='ml-3'   /></button>
</div> */}

</div>
    </div>
  )
}

export default Home