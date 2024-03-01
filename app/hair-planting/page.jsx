import SuperHero from "@/shared/SuperHero";
import React from "react";

function page() {
  return (
    <div className="">
      <SuperHero imgsrc="/images/hair-planting/bg.png" text="عن زراعة الشعر" />

      <div className="container felx flex-col py-4">
        <div className="flex items-center justify-end">
          {/* <img className='hidden sm:flex' src="/images/hair-planting/flower.png" alt="" /> */}

          <div className="flex flex-col gap-2 items-end justify-end">
            <div className="text-2xl text-default font-bold">
              زراعة الشعر في مصر
            </div>
            <div className="text-lg text-end">
              .زراعة الشعر بمصر هي إجراء جراحي يتضمن أخذ بصيلات شعر من منطقة
              واحدة في فروة الرأس وزراعته في منطقة أخرى
              <br />
              .يمكن استخدام هذا الإجراء لعلاج الصلع أو تساقط الشعر، وكذلك
              لاستعادة الشعر الذي فقده بسبب الإصابة أو الجراحة
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 items-end justify-end">
          <div className="text-2xl text-default font-bold">
            أساسيات زراعة الشعر{" "}
          </div>
          <div className="text-lg text-end">
            .أساسيات زراعة الشعر تتضمن أخذ بعض بصيلات الشعر من جزء معين من جسم
            الإنسان وزراعته في منطقة ثانية
            <br />
            .المنطقة الأكثر شيوعًا لأخذ بصيلات الشعر منها هي الجزء الخلفي من
            الرأس، حيث يكون الشعر أكثر كثافة، يتم بعد ذلك زرع بصيلات الشعر في
            منطقة الصلع في الرأس
          </div>
        </div>

        <div className="flex flex-col gap-2 items-end justify-end py-4">
          <div className="text-2xl text-default font-bold">
            {" "}
            فوائد زراعة الشعر{" "}
          </div>
          <div className="text-lg text-end">
            .يمكن أن تساعد زراعة الشعر على تحسين مظهر الشعر الأصلع أو الخفيف،
            ويمكن أن يساعد أيضًا في زيادة الثقة بالنفس
            <br />
            :يمكن أن تقدم زراعة الشعر عددًا من الفوائد، بما في ذلك ما يلي
            <ul className="mt-3">
              <li className="flex flex-row-reverse items-center gap-2">
                <span className="flex w-1 h-1 bg-[#000]"></span> .تساعد في
                استعادة الشعر المفقود بسبب الإصابة أو الجراحة
              </li>
              <li className="flex flex-row-reverse items-center gap-2">
                <span className="flex w-1 h-1 bg-[#000]"></span> .المساعدة في
                علاج الصلع أو تساقط الشعر
              </li>
              <li className="flex flex-row-reverse items-center gap-2">
                <span className="flex w-1 h-1 bg-[#000]"></span> .العمل على
                تحسين مظهر فروة الرأس
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-2 items-end justify-end pb-5">
          <div className="text-3xl text-default font-bold text-end mb-2">
            {" "}
            الأسئلة الشائعة عن زراعة الشعر في مصر{" "}
          </div>

          <div className="flex flex-row-reverse items-center font-bold text-default text-lg gap-2">
            <span className="flex w-1 h-1 bg-default"></span> هل زراعة الشعر في
            مصر ناجحة؟
          </div>

          <div className="flex justify-end text-end text-lg gap-2 pe-3 -mt-2">
            .نعم، زراعة الشعر في مصر ناجحة، تتمتع البلاد بمعدل نجاح مرتفع لهذا
            الإجراء، والعديد من الأشخاص الذين خضعوا للجراحة كانوا سعداء بالنتائج
            <br />
            .هناك عدد من العوامل التي تساهم في نجاح زراعة الشعر في مصر، بما في
            ذلك خبرة الجراحين وجودة المرافق
          </div>

          <div className="flex flex-row-reverse items-center font-bold text-default text-lg gap-2">
            <span className="flex w-1 h-1 bg-default"></span> ما هو الوقت
            المناسب لزراعة الشعر؟
          </div>

          <div className="flex justify-end text-end text-lg gap-2 pe-3 -mt-2">
            .يعتمد الوقت المناسب لإجراء جراحة زراعة الشعر على عدد من العوامل
            الفردية، بما في ذلك مدى تساقط الشعر، وعمر المريض، والصحة العامة
            للمريض بشكل عام
            <br />
            .ومع ذلك، فإن المرضى الذين يعانون من تساقط الشعر بشكل كبير ويتمتعون
            بصحة جيدة هم عادةً مرشحون جيدون لجراحة زراعة الشعر
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
