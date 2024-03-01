import SuperHero from '@/shared/SuperHero'
import React from 'react'

function page() {
  return (
    <div className="bg-[url('/images/about/info-bg.png')]">
      <SuperHero text="عن الدكتور" imgsrc="/images/about/bg.png" />
      <div className="container py-10">

        <div className="flex gap-5 flex-wrap-reverse justify-between items-center mb-10">

          <div className="left grow">
            <img src="/images/logo-2.png" className='sm:ms-auto mx-auto ' alt="" />
          </div>

          <div className="middle  grow px-4 text-default border-[#276DB8] md:border-r-2 flex flex-col items-end text-end gap-4">
            <div className="text3xl font-bold text-4xl mb-3">
              <span className='text-[#276DB8]'>د.</span>
              محمد السيد
            </div>
            <div className="flex flex-col font-extrabold">
              <span className=' text-xl text-[#276DB8]'>التخصص</span>
              <p className=' text-xl text-default font-semibold'>خبير زراعة الشعر - خبرة أكثر من خمس سنوات</p>
            </div>
            <div className="flex flex-col font-extrabold">
              <span className=' text-xl text-[#276DB8]'>سنوات الخبرة</span>
              <p className=' text-xl text-default font-semibold'> في مجال زراعة الشعر وأكثر من 2800 عملية ناجحة </p>
            </div>
            <div className="flex flex-col font-extrabold">
              <span className=' text-xl text-[#276DB8]'>العنوان</span>
              <p className=' text-xl text-default font-semibold'> أبراج دلتا ستارز - برج رقم 4 عيادة رقم 502 </p>
            </div>
          </div>

          <div className="right w-full grow lg:w-auto">
            <img className='w-[80%] max-w-[300px] mx-auto' src="/images/about/doc.png" alt="" />
          </div>


        </div>
        <div className="flex justify-center w-[80%] mx-auto ">
          مرحبًا بك في عيادتنا الطبية! نحن فريق من سبع أطباء وطاقم من المتخصصين الملتزمين بتقديم رعاية صحية عالية الجودة لمرضانا. على مدى خمس سنوات قمنا بالإهتمام  بصحة وراحة مرضانا ونسعى جاهدين لتوفير الرعاية الطبية المتميزة والموثوقة. يقع مركزنا الطبي في موقع مركزي مريح، ونحن نوفر مجموعة شاملة من الخدمات الطبية لمساعدتك في الحفاظ على صحتك وعافيتك.
          يتميز فريقنا بالخبرة والكفاءة في مجالات متعددة، بدءًا من الطب العام وحتى التخصصات الطبية المتقدمة. نحن نقدم استشارات طبية مبتكرة وعلاجات فعالة لمجموعة متنوعة من الحالات الصحية. سواء كنت بحاجة إلى فحص عام، أو معالجة لمشكلة صحية محددة، أو استشارة طبية، يمكنك الاعتماد علينا لتلبية احتياجاتك الصحية تواصل معنا في أي وقت.
        </div>
      </div>
    </div>
  )
}




export default page