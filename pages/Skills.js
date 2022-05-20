import React from 'react'
import Image from 'next/image'

export default function Skills() {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
              <p className='rounded-lg text-4xl font-bold inline border-b-4 border-green-400 mb-10'>Skills</p>
          </div>
      

          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
              <div className='rounded-lg pt-3 shadow-md bg-[#0e2343] shadow-[#040c16] hover:scale-110 duration-500'>
              <Image src="/HTML.svg" alt="HTML Logo" width={72} height={50} />
                  <p className='my-4'>HTML</p>
              </div>
              <div className='rounded-lg pt-3 shadow-md bg-[#0e2343] shadow-[#040c16] hover:scale-110 duration-500'>
              <Image src="/CSS.svg" alt="CSS Logo" width={72} height={50} />
                  <p className='my-4'>CSS</p>
              </div>
              <div className='rounded-lg pt-3 shadow-md bg-[#0e2343] shadow-[#040c16] hover:scale-110 duration-500'>
              <Image src="/JavaScript.svg" alt="Javascript Logo" width={72} height={50} />
                  <p className='my-4'>JAVASCRIPT</p>
              </div>
              <div className='rounded-lg pt-3 shadow-md bg-[#0e2343] shadow-[#040c16] hover:scale-110 duration-500'>
              <Image src="/React-Dark.svg" alt="Javascript Logo" width={72} height={50} />
                  <p className='my-4'>REACT</p>
              </div>
              <div className='rounded-lg pt-3 shadow-md bg-[#0e2343] shadow-[#040c16] hover:scale-110 duration-500'>
              <Image src="/Rails.svg" alt="Rails Logo" width={72} height={50} />
                  <p className='my-4'>RAILS</p>
              </div>
              <div className='rounded-lg pt-3 shadow-md bg-[#0e2343] shadow-[#040c16] hover:scale-110 duration-500'>
              <Image src="/TailwindCSS-Dark.svg" alt="Tailwindcss Logo" width={72} height={50} />
                  <p className='my-4'>TAILWIND</p>
              </div>
              <div className='rounded-lg pt-3 shadow-md bg-[#0e2343] shadow-[#040c16] hover:scale-110 duration-500'>
              <Image src="/prisma.svg" alt="MongoDB Logo" width={72} height={50} />
                  <p className='my-4'>PRISMA</p>
              </div>
              <div className='rounded-lg pt-3 shadow-md bg-[#0e2343] shadow-[#040c16] hover:scale-110 duration-500'>
              <Image src="/NextJS-Dark.svg" alt="Javascript Logo" width={72} height={50} />
                  <p className='my-4'>NEXT</p>
              </div>
              
          </div>
  
      </div>
    </div>
  );
};


