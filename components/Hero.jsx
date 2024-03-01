"use client"
import React from 'react'
import Navbar from './Navbar'
import Link from 'next/link'
import { MdOutlineChevronLeft } from "react-icons/md";
import MobileNavbar from './MobileNavbar';

function Hero() {

    return (
        <div className='flex relative  bg-[#000] overflow-hidden  h-[100vh]'>

            {/* <img 
                className='absolute w-auto left-0 top-10 md:top-0 h-auto '
                alt='doctor image'
                src="/images/doc.png"
            />
            <img
                className='hidden w-auto sm:block absolute right-0 top-0 h-auto'
                alt='background image'
                src="/images/hero-bg.png"
            />
            <img
                className='w-full sm:hidden absolute right-0 top-0 '
                alt='background image'
                src="/images/hero-mob.png"
            /> */}


            <video  autoPlay loop muted className='w-full md:scale-[1.3]' width="100%" controls={false}> 
                <source width="100%" src='/hero.mp4' type='video/mp4'  />
            </video>
            <div className="fixed top-10 left-[50%] -translate-x-[50%] z-20 w-[80%] max-w-[750px]"> <Navbar /></div>
            <div className="fixed top-10 left-[50%] -translate-x-[50%] z-20 w-[80%]"> <MobileNavbar /></div>


            <div className="flex z-30 absolute bottom-10 sm:bottom-40  sm:right-40 right-10 flex-col gap-4 [&>*]:text-[#fff] text-right">
                <span className='text-5xl font-bold'>
                    <i className='text-default'> د.</i>
                    محمد السيد
                </span>
                <p className='text-2xl'>
                    خبير زراعة الشعر - خبرة أكثر من خمس سنوات <br />
                    في مجال زراعة الشعر وأكثر من 2800 عملية ناجحة
                </p>
                <div className="flex flex-col items-end md:items-center md:flex-row-reverse font-semibold gap-8  md:gap-4">
                    <Link href='/contact' >
                        <div className='bg-default px-3 py-2 items-center rounded-full flex gap-4 text-center'>
                            <MdOutlineChevronLeft className='text-2xl rounded-full border border-[#fff] bg-[#EBC348]' />
                            <span >تواصل معنا</span>
                        </div>
                    </Link>
                    <Link href='/states' >
                        <div className="flex gap-2">
                            <MdOutlineChevronLeft className='text-2xl rounded-full text-[#fff] bg-[#EBC348]' />
                            <span className='text-second'> الحالات</span>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Hero