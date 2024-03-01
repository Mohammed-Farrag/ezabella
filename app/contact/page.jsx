"use client"
import Contactform from '@/components/Contactform'
import Hero from '@/components/Hero'
import React, { useEffect } from 'react'
import getData from '@/firbase/getData';



function page() {


  useEffect(() => {
    // getData('reviews');
    let data = getData('reviews');

    data.then(d => {
      let res = d.result;

      res.forEach((e) => console.log(e.data()))
    })
  }, [])



  return (
    <div>
      <Hero />

      <div className="bg-black py-5 text-end">
        <div className="flex flex-col mb-4 justify-end items-end container ">
          <p className='text-white font-bold text-2xl'>  تواصل معنا </p>
          <p className='text-white font-normal text-lg'>   شكرًا لاهتمامك! يمكنك التواصل معنا عبر معلومات الاتصال التالية </p>
        </div>

        <div className="container">
          <Contactform />
          <div className="w-full mt-4 rounded-lg  bg-white">
            <input />
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2010.715138151852!2d31.346061097230855!3d30.068889862061177!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fc0a041f663%3A0x79c182e533ebf456!2sDelta%20Stars!5e0!3m2!1sar!2seg!4v1709060114402!5m2!1sar!2seg"
              width="600" height="450" allowFullScreen="" loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>


    </div>
  )
}

export default page

