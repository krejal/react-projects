import React from 'react'

function Cards() {
  return (
    <div className='w-full h-screen bg-white flex gap-3  items-center px-10 '>
        <div className="cardcontainer w-1/2 h-[50vh]">
        <div className="card relative w-full h-full bg-[#004D43] flex justify-center items-center rounded-xl">
            <img src="	https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
            <button className='absolute left-10 bottom-10 px-5 py-1 border-2 rounded-full border-[#CDEA68] text-[#CDEA68]'>&copy;2019-2022</button>
        </div>

        </div>
        <div className="cardcontainer w-1/2 h-[50vh] flex gap-3">
        <div className="card relative w-1/2 h-full bg-[#120303eb] flex justify-center items-center rounded-xl">
        <img className=' '  src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
        <button className='absolute left-10 bottom-10 px-5 py-1 border-2 rounded-full text-sm'>RATING 5.0 ON CLUTCH</button></div>
        <div className="card relative w-1/2 h-full  bg-[#120303eb] flex justify-center items-center rounded-xl">
        <img src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
        <button className='absolute left-10 bottom-10 px-5 py-1 border-2 rounded-full text-white text-sm'>BUSINESS BOOTCAMP ALUMINI</button></div>

        </div>
    </div>
  )
}

export default Cards