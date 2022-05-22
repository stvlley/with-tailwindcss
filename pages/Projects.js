import React from 'react'
import Image from 'next/image'

export default function Projects() {
  return (
    <div name='projects' className='m-auto w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full '>
          
          <div>
              <p className='rounded-lg text-4xl font-bold inline border-b-4 border-green-400 mb-10'>Projects</p>
              <p className='pt-6'>Some of my latest projects</p>
          </div>

          <div className='w-full  grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8'>
             
              <div className='content-div rounded-lg p-3 bg-[#0e2343] group shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
              <Image src="/filler.png" alt="HTML Logo" width={300} height={300} />
                  <p className='my-4'>NextJS / MongoDB </p>

                  <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                       Digital Fashion House   
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>

                    </div>
              </div>
              <div className='content-div rounded-lg p-3 bg-[#0e2343] group shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
              <Image src="/filler.png" alt="HTML Logo" width={300} height={300} />
                  <p className='my-4'>HTML</p>

                  <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                       Console.S()uad   
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>

                    </div>
              </div>
              <div className='content-div rounded-lg p-3 bg-[#0e2343]  group shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
              <Image src="/filler.png" alt="HTML Logo" width={300} height={300} />
                  <p className='my-4'>HTML</p>

                  <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                       East Coast Fishing Co.    
                        </span>
                        <p>Team project</p>
                        <div className='pt-8 text-center'>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>

                    </div>
              </div>
           
            
              
          </div>
  
      </div>
    </div>
  )
}
