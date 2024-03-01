import React from "react";

function Jowl() {
  return (
    <div className="container flex flex-col py-4">
      <div className="flex items-center justify-end flex-col">
        <img
          className="hidden sm:flex"
          src="/images/services/jowl.png"
          alt="Boutox Image"
        />
        <br />
        <div className="flex flex-col gap-2 items-end justify-end">
          <div className="text-lg text-right">
            <p>
              يُمثل اللغد أو ما يُعرف في الانجليزية بـ Double chin شفط اللغد أو
              الذقن المزدوج مشكلة عند الكثيرين حيث يُعاني منه الرجال والسيدات
              على حدٍ سواء، فهو يعطي للوجه مظهر غير جذاب وفي أحيان كثيرة يُعطي
              مظهر أكبر سناً، ولذلك يسعى الكثيرون للتخلص منه بشتى الطرق، وهناك
              العديد من الطرق التي تساعدك في التخلص من اللغد، منها عملية شفط
              اللغد.
            </p>
            <ul className=" list-inside rtl">
              <li>
                ما هي عملية شفط اللغد، وما هي فوائدها وأضرارها، ومتى يتم اللجوء
                إليها، وما هي تكلفتها، وكيف يتم إجرائها؟ سنتعرف في هذا المقال
                على هذه العملية وسنلقي الضوء على كل ما يجب عليك معرفته قبل إجراء
                العملية.
              </li>
              <li className="mt-4">
                <b>ما هو اللغد؟ ولماذا يتكون؟</b>
                <p>
                  يُعرف اللغد بتجمع الدهون أسفل الذقن مما يجعل أسفل الوجه ممتلئ
                  وقد يبدو الجلد مترهل في هذه المنطقة أيضاً، وقد يتكون اللغد
                  نتيجة عدة عوامل من أهمها:
                </p>
                <ul className=" rtl">
                  <li>
                    <b>زيادة الوزن:</b>
                    <p>مما يتسبب في تجمع الدهون وتكوين طبقة أسفل الوجه.</p>
                    <p>
                      ليس شرطاً أن تُصاب بالسمنة ليتكون اللغد فقد تعمل زيادة
                      الوزن فقط على تكوين اللغد، وفي هذه الحالة يمكن التغلب عليه
                      بممارسة بعض التمارين الرياضية وفقدان الوزن الزائد.
                    </p>
                  </li>
                  <li className="mt-4">
                    <b>التقدم في العمر:</b>
                    <p>
                      الرقبة من أكثر الأماكن في الجسم ثأثراً بالتقدم في السن،
                      ويظهر ذلك في صورة ترهلات.
                    </p>
                    <p>
                      يظهر التقدم في العمر في صورة ترهل وتدلي الجلد أسف الوجه،
                      وفي هذه الحالة قد تساعد بعض التمارين الخاصة بشد العضلات في
                      التقليل من اللغد، ولكن الحل الأمثل يتمثل في عمليات شد
                      الوجه، وشد الرقبة.
                    </p>
                  </li>
                  <li className="mt-4">
                    <b> عوامل وراثية</b>
                    <p>
                      قد يتكون اللغد نتيجة بعض العوامل الوراثية أيضاً، فيصعُب
                      التخلص منه بممارسة الرياضة أو فقدان الوزن، ويُنصح في هذه
                      الحالة باللجوء إلى الجراحات التجميلية البسيطة مثل شفط
                      اللغد.
                    </p>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Rest of your component content */}
    </div>
  );
}

export default Jowl;
