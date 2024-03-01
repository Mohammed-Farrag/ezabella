import React from 'react'
import { FaRegFileLines } from "react-icons/fa6";
import { FaUserGroup } from "react-icons/fa6";
import { BsPlayCircleFill } from "react-icons/bs";

function Sidebar() {
    return (
        <div className='flex flex-col gap-4 justify-center items-center w-[300px] h-full bg-default text-white font-bold'>
            <img src="/images/admin/logo-white.png" className='w-[60%] mx-auto -mt-10' alt="" />
            <a
                className='w-full flex gap-1 items-center justify-end pe-12 py-2 bg-gradient-to-l from-[#276DB8]'
                href='/admin/articles'>
                المقالات
                <FaRegFileLines />
            </a>

            <a
                className='w-full flex gap-1 items-center justify-end pe-12 py-2 bg-gradient-to-l from-[#276DB8]'
                href='/admin/videos'>
                الفيديوهات
                <BsPlayCircleFill />
            </a>

            <a
                className='w-full flex gap-1 items-center justify-end pe-12 py-2 bg-gradient-to-l from-[#276DB8]'
                href='/admin/orders'>
                طلبات العملاء
                <FaUserGroup />
            </a>

        </div>
    )
}

export default Sidebar