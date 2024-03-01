import Link from 'next/link'
import React from 'react'
import { FaPlay } from "react-icons/fa";

function Reviews() {
    return (
        <div className='bg-[url("/images/reviews/bg.png")] bg-bottom bg-no-repeat'>
            <div className="container flex flex-row-reverse items-end">
                <img className='w-1/2 -ms-8'  src="/images/reviews/girl.png" alt="" />
                <div className="flex flex-col gap-3 items-center  sm:items-end self-center">
                    <p className="sm:text-3xl text-xl text-default font-bold ">
                        تعرف علي تجارب العملاء
                    </p>
                    <p className='text-base sm:text-xl text-center sm:text-end'>
                        قم بمشاهدة فيديوهات عن تجارب العملاء
                    </p>
                    <Link  href="/videos">
                        <div className="flex flex-row-reverse  sm:w-[150px] gap-1 justify-between bg-default rounded-md items-center p-1 sm:py-2 sm:px-3">
                            <FaPlay className='text-[#fff]' />
                            <span className='text-[#fff] font-bold '>شاهد من هنا</span>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Reviews