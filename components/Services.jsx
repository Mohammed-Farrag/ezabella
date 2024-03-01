import Link from 'next/link'
import React from 'react'

function Services() {
    const services = [
        { img: '/images/services/hair-planting.png', link: '/hair-planting', title: 'زراعة شعر', desc: 'تعد عملية زراعة الشعر من أكثر عمليات التجميل شيوعاً في الآونة الأخيرة، فهي من العمليات التي لا ينتج عنها أو يصاحبها أعراض جانبية خطيرة، أو حتى نتائج سلبية قد تهدد الصحة، بل تعد آمنة تمامً إذا ما تم إجراؤها وفقا للاشتراطات الطبية والصحية السليمة، وأيضاً إذا تم إجراؤها في مراكز موثوقة ومعتمدة.' },
        { img: '/images/services/boutox.png', link: '/services/boutox', title: 'حقن البوتوكس', desc: 'البوتوكس هو الاسم التجاري للمادة المعروفة بالتوكسين بوتيلينيوم، وهو مادة عصبية سامة يتم استخلاصها من نوع من أنواع البكتيريا المعروفة باسم المطثية الوشيقية (بالانجليزية: Clostridium Botulinum) وهذه البكتيريا تسبب التسمم الغذائي.' },
        { img: '/images/services/liser.png', link: '/services/liser', title: 'فراكشنال ليزر', desc: 'يعتبر فراكشنال ليزر من تقنيات تجديد البشرة الآمنة للغاية والمبتكرة في مجال التجميل، والتي يمكنها التخلص بكل فاعلية من العيوب التي تعاني منها البشرة وتغيرات الجلد التي لها علاقة بالسن، ولكن استخدامات هذه التقنية غير منصبة فقط على على تجاعيد تقدم العمر، إنما يمكنها علاج العديد من العيوب الأخرى ومنها علامات حبوب الشباب ولون البشرة الغير موحد، وغيرها الكثير، لهذا سوف نوضح لكم اليوم العديد من المعلومات المفيدة والمهمة عن الفراكشنال ليزر.' },
        { img: '/images/services/gyn.png', link: '/services/gyn', title: 'علاج التثدى', desc: 'التثدي هو تضخم الغدد في الثدي الذكري، وهو عادة غير سرطاني (حميد). يصاب بعض الرجال بتضخم أنسجة الثدي في مرحلة ما من حياتهم، ولكن التثدي أكثر شيوعًا بين المراهقين والرجال الأكبر سنًا، ولكن يمكن أن يحدث في أي عمر. ومع ذلك ، فإن التثدي يختلف عن التثدي الزائف، وهو وجود رواسب الدهون في منطقة الثدي لدى الرجال الذين يعانون من زيادة الوزن.' },
        { img: '/images/services/chemical.png', link: '/services/chemical', title: 'التقشير الكيميائى', desc: 'يعد التقشير الكيميائي (بالإنجليزية: Chemexfoliation or Chemical Peel) أحد الإجراءات التجميلية التي تساعد على التحسين من مظهر البشرة الخارجي، والذي يتم خلاله استخدام محلول كيميائي يعمل على تقشير طبقات الجلد، الأمر الذي يجعل البشرة أكثر نعومة وخالية من العيوب. ' },
        { img: '/images/services/fillar.png', link: '/services/fillar', title: 'حقن فيللر', desc: 'حقن الفيلر هي إجراء تجميلي غير جراحي من الممكن اللجوء إليه لتحسين مظهر البشرة والجلد، ولا سيما في منطقة الوجه، وقد يتم استخدامها كبديل عن بعض الإجراءات التجميلية الجراحية، مثل: فيلر الأنف. ' },
        { img: '/images/services/nano-fat.png', link: '/services/nano-fat', title: 'نانو فات', desc: 'تحدث ظاهرة الشيخوخة بسبب فقدان الدهون في كل من الوسائد الدهنية على وجهك. بعد سن العشرين تخسر 3-5 مل من الدهون كل عام ثم يترهل الوجه مما يجعلك تبدو أكبر سناً. عادة ما يتم الشعور بالترهل بشكل بارز في البداية تحت العينين، حيث تجعلنا الهالات السوداء نبدو متعبين وكبار السن.' },
        { img: '/images/services/jowl.png', link: '/services/jowl', title: 'شفط اللغد', desc: 'يُمثل اللغد أو ما يُعرف في الانجليزية بـ Double chin  شفط اللغد أو الذقن المزدوج مشكلة عند الكثيرين حيث يُعاني منه الرجال والسيدات على حدٍ سواء، فهو يعطي للوجه مظهر غير جذاب وفي أحيان كثيرة يُعطي مظهر أكبر سناً، ولذلك يسعى الكثيرون  للتخلص منه بشتى الطرق، وهناك العديد من الطرق التي تساعدك في التخلص من اللغد، منها عملية ' },
    ]


    return (
        <>
            <div className="service py-5 sm:px-32 px-10 container">
                {services.map((s, index) => {
                    let isOdd = (index + 2) % 2 == 0

                    return (

                        <Link href={s.link} key={index} className='relative block group first:rounded-t-3xl last:rounded-b-3xl  overflow-hidden  ' >
                            <div className=" absolute bottom-5 w-full left-0 right-0 px-5 group-hover:md:bg-gray-600 transition-all ease-linear group-hover:!bg-opacity-30 py-5 text-white text-lg z-40 flex flex-col gap-1">

                                <span className={`font-bold block text-white text-2xl group-hover:md:!-mb-0 -mb-10 transition-all ease-linear ${isOdd ? 'text-right' : 'text-left'} z-30 `}> {s.title}</span>
                                <p className='hidden  md:flex flex-row-reverse text-right opacity-0 group-hover:md:opacity-100' style={{direction: 'rtl'}}>
                                    {s.desc.slice(0, 200)}...
                                </p>
                            </div>
                            <img src={`/images/services/${isOdd ? 'left' : 'right'}.png`} className='max-h-[280px] h-[90px] sm:h-auto absolute left-0 w-full  right-0 bottom-0 top-0 z-20' alt="" />
                            <img src={s.img} className='max-h-[280px] h-[90px] sm:h-auto w-full object-cover mx-auto' />
                        </Link>
                    )
                })}
            </div>
        </>


    )
}

export default Services