import Contactform from '@/components/Contactform'
import Desc from '@/components/Desc'
import Hero from '@/components/Hero'
import Reviews from '@/components/Reviews'
import Services from '@/components/Services'
import React from 'react'

function HomePage() {
  return (
    <div>
      <Hero />

      <Desc />

      <div className=" h-auto overflow-hidden relative py-12 text-center bg-[url('/images/services/bg.png')] bg-center bg-no-repeat">
        <div className="text-3xl text-default font-bold">الخدمات</div>
        <p className='text-default font-semibold text-lg mb-5'>تعرف علي عياداتنا المتخصصة في تقديم أفضل الخدمات الطبية</p>
        <Services />

      </div>
      <Reviews />

      <div className=" bg-zinc-950">
        <div className="container py-20">

          <Contactform />

          <div className="w-full mt-4 rounded-lg  bg-white">
            <input />
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2010.715138151852!2d31.346061097230855!3d30.068889862061177!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fc0a041f663%3A0x79c182e533ebf456!2sDelta%20Stars!5e0!3m2!1sar!2seg!4v1709060114402!5m2!1sar!2seg"
              width="100%" height="450" allowFullScreen="" loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>

        </div>
      </div>
    </div>
  )
}

export default HomePage