import MobileNavbar from '@/components/MobileNavbar'
import Navbar from '@/components/Navbar'
import React from 'react'

function SuperHero({ text, imgsrc }) {
    return (
        <div className=' relative overflow-hidden '>

            <img 
                className=' w-auto relative left-0 top-10 md:top-0 h-auto '
                alt='doctor image'
                src={imgsrc}
            />
            {/* <img 
                className='absolute  w-full left-0 top-0 bottom-0 right-0  h-auto '
                alt='doctor image'
                src="/images/about/over.png"
            /> */}

            <div className="over absolute w-full h-full bg-[#000] bg-opacity-25 z-20 left-0 right-0 bottom-0 top-0"
            style={{'--tw-bg-opacity':'.8'}}
            ></div>
        

            <div className="fixed top-10 left-[50%] -translate-x-[50%] z-20 w-[80%] max-w-[750px]"> <Navbar /></div>
            <div className="fixed top-10 left-[50%] -translate-x-[50%] z-20 w-[80%]"> <MobileNavbar /></div>


            <div className="w-[80%] flex z-30 absolute bottom-10 sm:bottom-20  sm:right-40 right-10 flex-col gap-4 [&>*]:text-[#fff] text-right">
                
                <div className="flex flex-col font-bold text-xl sm:text-3xl items-end md:items-center md:flex-row-reverse gap-8  md:gap-4">
                   {text}
                </div>
            </div>
        </div>
    )
}

export default SuperHero