import { Element } from 'react-scroll'
import React from 'react'
import Image from 'next/image'
import Gif from '../public/project1.gif'
import Logo from '/public/DFH.png'
import Logo2 from '/public/Sabertech.png'
import Logo3 from '/public/eastcoast.png'
import FineLine from '../public/fineline.gif'
import Ecfc from '../public/eastco.gif'


export default function Work() {
    return (
        <Element id='Projects' name='projects'>
            <div className='mb-10 mw-full  max-w-[1000px] mx-auto p-4 h-auto flex flex-col justify-center '>
                <div className='hover:scale-110 duration-500 '>
                    <p className='text-gray-300 rounded-lg justify-start text-4xl font-bold inline border-b-4 border-green-400 mb-10'>Projects</p>

                </div>
                <div className='  md:flex sm:flex-col md:flex-row justify-center items-center gap-10 mt-10 '>

                    <div className='shadow-[#7a7a7a] bg-[#0e2343] content-div rounded-lg p-3  group shadow-md hover:scale-110 duration-500' >

                        <div className=' items-center justify-center m-auto text-white'>
                            <Image src={Logo2} alt="DFH Logo" width={200} height={175} />
                        </div>

                        <div className='m-5 duration-500  w-80 h-60  relative'>

                            {/* GIF */}
                            <Image src={FineLine} priority alt="async chat" layout="fill" objectFit='cover' className=' rounded-lg cursor-pointer ' />
                            {/* Hover */}



                        </div>

                        <div className='p-1'>
                                <div className="text-[#15325f] py-1 px-3   rounded-full bg-white">
                                    <p className="text-2x text-center font-bold ">NextJS </p>
                                </div>
                            </div>
                            
                            <div className='p-1'>
                                <div className="text-[#15325f]  py-1 px-2 rounded-full bg-white">
                                    <p className="text-2x text-center font-bold ">TailwindCSS </p>
                                </div>
                            </div>

                            <div className='p-1'>
                                <div className="text-[#15325f] py-1 px-2 rounded-full bg-white">
                                    <p className="text-2x text-center font-bold ">GraphQL </p>
                                </div>
                            </div>

                            <div className='p-1'>
                                <div className="py-1 px-2 text-[#15325f]  rounded-3xl bg-white">
                                    <p className="text-2x text-center font-bold ">Lives are lived in grey areas and true value lies on the Fine Line. At Fine Line we welcome every opnion and perspective that holds true insight and value. Fine Line is place to come and debate the finer points in Tech, Fashion, and more.</p>
                                </div>
                            </div>
                            
                        <div className='flex opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white '>
                                <h2>Fine Line</h2> 
                                <h6 className='text-sm'>Keep the content coming!</h6> 
                            </span>
                          
                            <div className='pt-8 '>

                                <a href='https://next-blog-five-navy-21.vercel.app/category/webdev'>
                                    <button className='font-mono bg-[#15325f]  text-center rounded-lg px-4 py-3 m-2  text-gray-300  text-lg hover:scale-110 duration-500'>live</button>
                                </a>
                                <a href='https://github.com/stvlley/digital-boutique'>
                                    <button className='font-mono bg-[#15325f]  text-center rounded-lg px-4 py-3 m-2  text-gray-300  text-lg hover:scale-110 duration-500'>code</button>
                                </a>
                            </div>

                        </div>

                    </div>
                    <div className='shadow-[#7a7a7a] bg-[#0e2343] shadow-md content-div rounded-lg p-3  group  hover:scale-110 duration-500'>

                        <div>

                            {/* Logo */}

                            <div className=' items-center justify-center mx-10 text-white'>
                                <Image src={Logo} alt="DFH Logo" width={200} height={175} />
                            </div>

                            <div className='m-5 duration-500  w-80 h-60  relative'>

                                {/* GIF */}
                                <Image src={Gif} priority alt="Digital Fashion House" layout="fill" objectFit='cover' className=' rounded-lg cursor-pointer ' />
                                {/* Hover */}



                            </div >
                            <div className='p-1 text-[#15325f] '>
                                <div className="py-1 px-3   rounded-full bg-white">
                                    <p className="text-2x text-center font-bold">NextJS </p>
                                </div>
                            </div>
                            
                            <div className='p-1'>
                                <div className="py-1 px-2 text-[#15325f]  rounded-full bg-white">
                                    <p className="text-2x text-center font-bold ">TailwindCSS </p>
                                </div>
                            </div>

                            <div className='p-1'>
                                <div className="py-1 px-2 text-[#15325f]   rounded-full bg-white">
                                    <p className="text-2x text-center font-bold ">MongoDB </p>
                                </div>
                            </div>
                            <div className='p-1'>
                                <div className="py-1 px-2 text-[#15325f]  rounded-3xl bg-white">
                                    <p className="text-2x text-center font-bold ">Digital Fashion house is Upcycle-Focused Designer and vendor platform for independent brands and small designers. With a simple and intuitive UI, designers can focus on their projects and let hassle of running an online store up to us. </p>
                                </div>
                            </div>

                            <div className='flex opacity-0 group-hover:opacity-100'>
                                <span className='text-2xl font-bold text-white '>
                                    <div>Digital Fashion House</div>
                                    <h6 className='text-sm'>For Designers Who Want To Focus On Design</h6> 
                                </span>
                                
                                <div className='pt-8 '>

                                    <a href='https://github.com/stvlley/digital-boutique'>
                                        <button className='font-mono bg-[#15325f]  text-center rounded-lg px-4 py-3 m-2  text-gray-300  text-lg hover:scale-110 duration-500'>code</button>
                                    </a>
                                </div>

                            </div>
                        </div>



                    </div>
                    <div className='shadow-[#7a7a7a]  bg-[#0e2343] content-div rounded-lg p-3  group shadow-md hover:scale-110 duration-500'>


                        <div className=' items-center justify-center m-auto text-white'>
                            <Image src={Logo3} alt="DFH Logo" width={200} height={175} />
                        </div>

                        <div className='m-5 duration-500  w-80 h-60  relative'>

                            {/* GIF */}
                            <Image src={Ecfc} priority alt="east coast fishiing co" layout="fill" objectFit='cover' className=' rounded-lg cursor-pointer ' />
                            {/* Hover */}



                        </div>
                        <div className='p-1'>
                                <div className="text-[#15325f]  py-1 px-3 rounded-full bg-white">
                                    <p className="text-2x text-center font-bold ]">React </p>
                                </div>
                            </div>
                            
                            <div className='p-1'>
                                <div className="text-[#15325f]  py-1 px-2 rounded-full bg-white">
                                    <p className="text-2x text-center font-bold ">TailwindCSS </p>
                                </div>
                            </div>

                            <div className='p-1'>
                                <div className="text-[#15325f]  py-1 px-2  rounded-full dark:bg-white">
                                    <p className="text-2x text-center font-bold ">Rails </p>
                                </div>
                            </div>

                            <div className='p-1'>
                                <div className="py-1 px-2 text-[#15325f]   rounded-3xl bg-white">
                                    <p className="text-2x text-center font-bold ">Fishers love to fish. But more than that they love to brag about their catches. Now fisher-people can share their catches on local maps of Public fishings spots and see what's biting and where whilst having live weather updates in their area. </p>
                                </div>
                            </div> 

                        <div className='flex opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white '>
                                <div>East Coast Fishing Co.</div>
                                <h6 className='text-sm'>Look What We Caught</h6>
                            </span>
                            <div className='pt-8 '>

                                <a href='https://github.com/tylergubser/East-Coast-Fishing'>
                                    <button className='font-mono bg-[#15325f]  text-center rounded-lg px-4 py-3 m-2  text-gray-300  text-lg hover:scale-110 duration-500'>code</button>
                                </a>
                            </div>

                        </div>

                    </div>
                </div>


            </div>
        </Element>
    )
}
