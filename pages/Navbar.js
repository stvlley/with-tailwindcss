import React, { useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import Image from 'next/image'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { Link } from 'react-scroll'
import Logo from '/public/logo.png'

// Navbar
export default function Navbar() {

  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav)

  return (
    <div className='font-extralight text-gray-300 fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f]'>
      {/* Logo */}
      <div>
      <p className='hover:scale-110 duration-500 text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
        <Image src={Logo} alt="Stephen Talley Logo" width={100} height={75} />
      </p>  
      </div>

      {/* Menu */}
      <ul className=' hidden md:flex '>
        <li className='hover:animate-bounce '>
          <Link to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='hover:animate-bounce '>
          <Link to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='hover:animate-bounce '>
          <Link to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='hover:animate-bounce '>
          <Link to='projects' smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li className='hover:animate-bounce '>
          <Link to='published' smooth={true} duration={500}>
            Published
          </Link>
        </li>
        <li className='hover:animate-bounce '>
          <Link to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* Mobile Menu */}
      <ul  className={!nav ? 'hidden' : ' absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center font-extralight'}>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='projects' smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='published' smooth={true} duration={500}>
            Published
          </Link>
        </li>
        <li className='py-6 text-4xl'><Link onClick={handleClick} to='contact' smooth={true} duration={500}>
          Contact
        </Link></li>
        <li className='rounded-full font-semibold bg-green-500 py-6 text-4xl'>
        <a
            target="_blank"
            rel="noopener noreferrer"
              className='flex justify-between items-center w-full text-gray-300'
              href='https://drive.google.com/file/d/1dqgJ1e0UvCjaWArJFzxDVN38qDSvMZwx/view?usp=sharing'
            >RESUME</a>
        </li>
      </ul>
      {/* Social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='p-4 rounded-lg w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a
            target="_blank"
            rel="noopener noreferrer"
              className=' flex justify-between items-center w-full text-gray-300'
              href='https://www.linkedin.com/in/stephen-talley-the-developer/'
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='p-4 rounded-lg w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a
            target="_blank"
            rel="noopener noreferrer"
              className='flex justify-between items-center w-full text-gray-300'
              href='https://github.com/stvlley'
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='p-4 rounded-lg w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              
            >
            <Link to='contact' smooth={true} duration={500}>
          Email
        </Link>
            <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='p-4 rounded-lg w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a
            target="_blank"
            rel="noopener noreferrer"
              className='flex justify-between items-center w-full text-gray-300'
              href='https://drive.google.com/file/d/1dqgJ1e0UvCjaWArJFzxDVN38qDSvMZwx/view?usp=sharing'
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>

    </div>
  )
}
