import { Element } from 'react-scroll'
import React, { useState, useEffect } from 'react';
import Image from 'next/image'

import Gif from '../public/project1.gif'
import Logo from '/public/DFH.png'
import axios from "axios";


export default function Blogs() {

    const [blogs, setBlogs] = useState([])


    useEffect(() => {
        fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@stephentalleyjr')
            .then(resp => resp.json())
            .then(data => {
                setBlogs(data.items)
            })

    }, [])

  function makeCard() {
      const image = blogs.map((blog) => {
          return <Image src={blog.image} height={100} width={100} alt="blog pic" />
      })
  }



    return (
        <Element id='work' name='work'>
            <div name='blogs' className=' mt-10 w-full h-screen bg-[#0a192f] text-gray-300'>
                <div className='w-full  max-w-[1000px] mx-auto p-4 h-auto flex flex-col justify-center '>
                    <div className='hover:scale-110 duration-500 '>
                        
                        <p className='text-gray-300 rounded-lg justify-start text-4xl font-bold inline border-b-4 border-green-400 mb-10'>Published</p>

                    </div>
                    <div className='  md:flex sm:flex-col md:flex-row justify-center items-center gap-10 mt-10 '>

                        <div className='shadow-[#7a7a7a] bg-[#0e2343] shadow-md content-div rounded-lg p-3  group  hover:scale-110 duration-500'>
                   
                 
                            <div>


                                <div className=' items-center justify-center m-auto text-white'>
                                </div>

                                <div className='m-5 duration-500  w-80 h-60  relative'>


                                </div>
                                <div className='flex opacity-0 group-hover:opacity-100'>
                                    <span className='text-2xl font-bold text-white '>
                                        Digital Fashion House
                                    </span>
                                    <div className='pt-8 '>

                                        <a href='https://github.com/stvlley/digital-boutique'>
                                            <button className='bg-[#0a192f] text-center rounded-lg px-4 py-3 m-2  text-gray-300  text-lg'>code</button>
                                        </a>
                                    </div>

                                </div>
                            </div>



                        </div>
                        <div className='shadow-[#7a7a7a] bg-[#0e2343] content-div rounded-lg p-3  group shadow-md hover:scale-110 duration-500' >

                            <div className=' items-center justify-center m-auto text-white'>
                            </div>

                            <div className='m-5 duration-500  w-80 h-60  relative'>

                                {/* GIF */}
                                {/* Hover */}



                            </div>
                            <div className='flex opacity-0 group-hover:opacity-100'>
                                <span className='text-2xl font-bold text-white '>
                                    Digital Fashion House
                                </span>
                                <div className='pt-8 '>

                                    <a href='https://github.com/stvlley/digital-boutique'>
                                        <button className='bg-[#0a192f] text-center rounded-lg px-4 py-3 m-2  text-gray-300  text-lg'>code</button>
                                    </a>
                                </div>

                            </div>

                        </div>
                        <div className='shadow-[#7a7a7a] bg-[#0e2343] content-div rounded-lg p-3  group shadow-md hover:scale-110 duration-500'>

                     
                            <div className=' items-center justify-center m-auto text-white'>
                           
                            </div>

                            <div className='m-5 duration-500  w-80 h-60  relative'>

                      
                      

                            </div>
                          

                        </div>
                    </div>


                </div>
            </div>
        </Element>
    )
}
