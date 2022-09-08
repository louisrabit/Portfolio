import React,{useState} from 'react'
import Logo from "../assets/logo1.png"
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook} from "react-icons/fa"
import {HiOutlineMail} from "react-icons/hi"
import {BsFillPersonLinesFill} from "react-icons/bs"
import {Link} from "react-scroll";


function Navbar() {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav) // set value of nav to opposite of is current value (if is false setIt to true if is true setIt to false)
  return (
    <div className='fixed w-full h-[88px] flex justify-between items-center px-4 bg-[#3d3b3b] text-gray-300'>
<div>
    <img src={Logo} alt="Image Logo" style={{width: "88px"}}/>
</div>

    {/*  Menu */}
  
  <ul className='hidden md:flex'> {/* anything abouve meddium show here */}   
        <li> <Link  to="home"  smooth={true}  duration={500} >
          Home
        </Link></li> 
         <li> <Link  to="about" smooth={true}  duration={500} >
          About
        </Link></li>
        <li> <Link  to="skills"  smooth={true}  duration={500} >
          Skills
        </Link></li>
         <li> <Link  to="work"  smooth={true}  duration={500} >
          Work
        </Link></li>
        <li> <Link  to="contact" smooth={true}  duration={500} >
          Contact
        </Link></li>
 </ul>

       {/*  Hamburguer */}
       <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars/> : <FaTimes/>}
       </div>




       {/* Mobile Menu */}
      
     <ul className={!nav ? 'hidden' : "absolute top-0 left-0 w-full h-screen  bg-[#000000] flex flex-col justify-center items-center"} >
        <li className='py-6 text-4xl'><Link onClick={handleClick} to="home"  smooth={true}  duration={500} >
          Home
        </Link></li> 
        <li className='py-6 text-4xl'><Link onClick={handleClick} to="about" smooth={true}  duration={500} >
          About
        </Link></li>
        <li className='py-6 text-4xl'><Link  onClick={handleClick} to="skills"  smooth={true}  duration={500} >
          Skills
        </Link></li>
        <li className='py-6 text-4xl'><Link onClick={handleClick} to="work"  smooth={true}  duration={500} >
          Work
        </Link></li>
        
        <li className='py-6 text-4xl'> <Link onClick={handleClick} to="contact" smooth={true}  duration={500} >
          Contact
        </Link></li>
 </ul>
       
       {/* Icons */}
       <div className='hidden lg:flex fixed flex-col top-[35%] left-0   '>
   <ul>
   
    <li className='w-[150px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-700'>
      <a className='flex justify-between items-center w-full text-gray-300' 
      href="https://www.linkedin.com/in/luiscoelho94/" >
       LinkedIn <FaLinkedin size={25}/> 
      </a>
    </li>
    <li className='w-[150px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-700'>
      <a className='flex justify-between items-center w-full text-gray-300' 
      href="https://github.com/louisrabit">
        Github<FaGithub size={25}/>
      </a>
    </li>
    <li className='w-[150px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-red-700'>
      <a className='flex justify-between items-center w-full text-gray-300' 
      /* href="/" */ >
        
       Email: <HiOutlineMail size={25} />
      </a>
    </li> 
   
    <li className='w-[150px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-yellow-700'>
      <a className='flex justify-between items-center w-full text-gray-300' 
      href="">
       Resume <BsFillPersonLinesFill size={25}/>
      </a>
    </li>
   </ul>
</div>
</div>
  )
}

export default Navbar