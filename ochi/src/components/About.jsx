import React from 'react'

function About() {
  return (
    <div className='w-full p-20 bg-[#CDEA68] rounded-tr-3xl rounded-tl-3xl text-black'>
        <h1 className='font-neue-montreal text-[4vw] leading-[4vw]'>Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.</h1>
       <div className='flex gap-10 w-full border-[#9eb452] border-t-[2px] mt-16 pt-8'>
           <div className='w-1/2'>
           <h1 className='text-7xl tracking-tighter'>Our approach:</h1>
            <button className='flex gap-10 items-center px-8 py-4 rounded-full text-white bg-black mt-8'>READ MORE
                <div className='w-3 h-3 rounded-full bg-white'></div>
            </button>
            </div>
            <div className='w-1/2 h-[62vh]  rounded-3xl' style={{ backgroundImage: "url('https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg')"}}></div>
       </div>
    </div>
  )
}

export default About