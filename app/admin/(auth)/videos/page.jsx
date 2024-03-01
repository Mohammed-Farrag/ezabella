'use client'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';


function page() {

  let router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      let user = JSON.parse(localStorage.getItem('user'))
      if (!user) router.replace('/admin')
    }
  }, [])
  return (
    <div className='flex flex-col items-end text-right w-full pt-10'>
      <div className="text-2xl text-default font-bold mb-4">الفيديوهات</div>

      <form className='w-full flex flex-col  gap-2'>
        <div className="flex w-full  gap-3 md:flex-row-reverse flex-col  justify-between">

          <div className="flex flex-col grow gap-1">
            <label htmlFor="" className='font-bold'>   العنوان </label>
            <input type="text" placeholder='العنوان' className='w-full text-right px-3 rounded-md focus-within:border-default ' />
          </div>


        </div>


        <div className="flex w-full  gap-3 md:flex-row-reverse flex-col justify-between">

          <div className="flex  flex-col grow gap-1">
            <label htmlFor="" className='font-bold'>
              الرابط
            </label>
            <input type="text" placeholder='اضف الرابط هنا' className='w-full text-right px-3 rounded-md focus-within:border-default ' />
          </div>

        </div>

        <div className="flex  flex-col grow gap-1">
          <button className='bg-default text-white text-center  font-bold rounded-lg w-full py-2'>حفظ / نشر / رفع</button>
        </div>
      </form>
    </div>
  )
}

export default page