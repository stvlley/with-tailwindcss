import { useRouter } from 'next/router';
import React, { useRef } from 'react';
import { BiRightArrow } from 'react-icons/bi';
import Typical from 'react-typical'
import { scroller } from "react-scroll";


const Home = () => {

  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)  
  const myRef = useRef('/projects')
  const router = useRouter();

  const scrollToSection = () => {
    scroller.scrollTo("projects", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };


  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/* Container */}
      <div className='goup max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <h2 className='text-4xl hover:scale-110 duration-500  sm:text-4xl font-bold text-[#8892b0]'>Hey I'm</h2>
        <h1 className='goup hover:scale-110 duration-500 text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          Stephen Talley.
        </h1>       
        <div className='hover:scale-110 duration-500'>
        <Typical
        className=' text-2xl sm:text-5xl font-bold text-[#8892b0]'
        loop={Infinity}
        wrapper="b"
        steps={[
            `I'm a Fullstack Developer 💻`,
            1000,
            `I'm a Software Engineer ⚙️`,
            1000,
            `I'm a Content Creator 📹`,
            1000,
            `I'm a UI/UX Designer 🖍`,
            1000,

        ]}></Typical>
            
          <button onClick={scrollToSection} 
          className=' rounded-lg text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-green-400 hover:border-green-400'>
           View Projects
            <span className='group-hover:rotate-90 duration-300'>
              <BiRightArrow />
            </span>
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default Home;