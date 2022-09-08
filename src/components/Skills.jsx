import React from 'react'
import css from "../assets/css.png";
import git from "../assets/github.png"
import html from "../assets/html.png";
import javascript from "../assets/javascript.png";
import mongo from "../assets/mongo.png";
import node from "../assets/node.png";
import react from "../assets/react.png";
import tail from "../assets/tailwind.png";

function Skills() {
  return (

    <div name="skills" className=' bg-[#3d3b3b] text-gray-300'>
   
<div className='max-w-[1000px] mx-auto px-4 flex flex-col justify-center w-full h-full'>
   
    <div>
        <p className='text-4xl font-bold inline border-b-4  border-yellow-500'>Skills</p>
    
    </div>
    
    <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 '>

   <div className='shadow-md shadow-[#d3fd3d50] hover:scale-110 duration-500  bg-[#9e848439]'>
        <img className='w-20 mx-auto' src={css} alt="Css ICON" />
       <p className='my-1'>CSS</p>
    </div>

  <div className='shadow-md shadow-[#d3fd3d50] hover:scale-110 duration-500  bg-[#9e848439]'>
        <img className='w-20 mx-auto' src={html} alt="HTML ICON" />
       <p className='my-1'>HTML:5</p>
    </div>
     <div className='shadow-md shadow-[#d3fd3d50] hover:scale-110 duration-500   bg-[#9e848439]'>
        <img className='w-20 mx-auto' src={javascript} alt="HTML ICON" />
       <p className='my-1'>JavaScript</p>
    </div>
     <div className='shadow-md shadow-[#d3fd3d50] hover:scale-110 duration-500   bg-[#9e848439]'>
        <img className='w-20 mx-auto' src={node} alt="NodeJs ICON" />
       <p className='my-1'>NodeJs</p>
    </div>
      <div className='shadow-md shadow-[#d3fd3d50] hover:scale-110 duration-500   bg-[#9e848439]'>
        <img className='w-20 mx-auto' src={react} alt="react ICON" />
       <p className='my-1'>React</p>
    </div>  
     <div className='shadow-md shadow-[#d3fd3d50] hover:scale-110 duration-500   bg-[#9e848439]'>
        <img className='w-20 mx-auto' src={tail} alt="Tail ICON" />
       <p className='my-1'>TailWind</p>
    </div>

    <div className='shadow-md shadow-[#d3fd3d50] hover:scale-110 duration-500   bg-[#9e848439]' >
        <img className='w-20 mx-auto' src={git} alt="Git ICON" />
       <p className='my-1'>Git</p>
    </div>

    <div className='shadow-md shadow-[#d3fd3d50] hover:scale-110 duration-500   bg-[#9e848439]'>
        <img className='w-20 mx-auto' src={mongo} alt="Mongo ICON" />
       <p className='my-1'>MongoDb</p>
    </div>
 

</div>
</div>
    
  </div>
  )
}

export default Skills