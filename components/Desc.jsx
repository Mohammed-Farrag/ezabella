import Image from 'next/image'
import React from 'react'

function Desc() {
    return (
        <div className=" h-auto  py-20 bg-[url('/images/desc/bg.png')]">
            <div className="container">
                <p className="text-2xl text-second font-semibold text-end">
                    تعرف على عياداتنا المتخصصة في تقديم أفضل الخدمات الطبية
                </p>
                <div className="flex items-center justify-between flex-col sm:flex-row">

                    <img className='min-w-[300px]' src="/images/desc/services.png" />

                    <div className="info text-right flex flex-col items-end gap-2 w-full sm:w-[60%]">
                        <Image alt="" src="/images/desc/vec.svg" width={50} height={20} />
                        <p className='leading-8 font-normal mt-5 text-xl font-ibm' >
                            مرحبًا بك في عيادتنا الطبية! نحن فريق من سبع أطباء وطاقم من المتخصصين الملتزمين بتقديم رعاية صحية عالية الجودة لمرضانا. على مدى خمس سنوات قمنا بالإهتمام  بصحة وراحة مرضانا ونسعى جاهدين لتوفير الرعاية الطبية المتميزة والموثوقة. يقع مركزنا الطبي في موقع مركزي مريح، ونحن نوفر مجموعة شاملة من الخدمات الطبية لمساعدتك في الحفاظ على صحتك وعافيتك.
                            يتميز فريقنا بالخبرة والكفاءة في مجالات متعددة، بدءًا من الطب العام وحتى التخصصات الطبية المتقدمة. نحن نقدم استشارات طبية مبتكرة وعلاجات فعالة لمجموعة متنوعة من الحالات الصحية. سواء كنت بحاجة إلى فحص عام، أو معالجة لمشكلة صحية محددة، أو استشارة طبية، يمكنك الاعتماد علينا لتلبية احتياجاتك الصحية تواصل معنا في أي وقت.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Desc