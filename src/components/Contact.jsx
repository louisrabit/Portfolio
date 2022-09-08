import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#3d3b3b] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/e4daccf7-ecf8-4e7a-906e-cdd191bb4402" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-yellow-500 text-gray-300'>Contact</p>
            
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-yellow-500 hover:border-yellow-500 px-4 py-3 my-8 mx-auto flex items-center'>Contact</button>
        </form>
    </div>
  )
}

export default Contact