import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from './Navbar'
import Hero from './Hero'

const Home: NextPage = () => {
  return (
    <div >
      <Head>
        <title>Stephen Talley</title>
        <link rel="icon" href="/st2.svg" />
      </Head>
      <Navbar />
      <Hero />


      

      <div className="bg-[#0a192f] flex min-h-screen flex-col items-center justify-center py-2">
       <footer className=" text-white flex  border-r items-center justify-center border-t">
          Powered by{' '}
          <Image src="/st2.svg" alt="Vercel Logo" width={72} height={50} />
      </footer>
    </div>
    </div>
  )
}

export default Home
