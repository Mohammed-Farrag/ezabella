import React from "react";

function Chemical() {
  return (
    <div className="container flex flex-col py-4">
      <div className="flex items-center justify-end flex-col">
        <img
          className="hidden sm:flex"
          src="/images/services/chemical.png"
          alt="Boutox Image"
        />

        <br />

        <div className="flex flex-col gap-2 items-end justify-end">
          <div className="mb-8">
            <p className="text-2xl font-bold mb-4"></p>
          </div>
          <div className="mb-8">
            <p className="mb-4">
              يعد التقشير الكيميائي أحد الإجراءات التجميلية التي تساعد على
              التحسين من مظهر البشرة الخارجي، والذي يتم خلاله استخدام محلول
              كيميائي يعمل على تقشير طبقات الجلد، الأمر الذي يجعل البشرة أكثر
              نعومة وخالية من العيوب.
            </p>
            <p>
              يمكن أن يساعد تقشير البشرة الكيميائي على علاج الحبوب والتصبغات
              الناتجة عن التعرض المستمر لأشعة الشمس. وبإمكان الفرد إجراء التقشير
              الكيميائي للوجه أو باقي أجزاء الجسم، بما في ذلك التقشير الكيميائي
              للركب أو اليدين
            </p>
          </div>
          <div>
            <p className="font-bold mb-2">أسباب التقشير الكيميائي</p>
            <ul className="[&>*]:mt-2">
              <li>
                آثار حب الشباب، كما تتضمن فوائد التقشير الكيميائي إمكانية
                مساعدته في الحد من حب الشباب.
              </li>
              <li>علامات التقدم بالسن، بما فيها الخطوط الرفيعة والتجاعيد.</li>
              <li>النمش والكلف.</li>
              <li>اتساع مسامات البشرة.</li>
              <li>تلف البشرة الناجم عن التعرض لأشعة الشمس.</li>
              <li>خشونة البشرة.</li>
              <li>البشرة غير موحدة اللون.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Rest of your component content */}
    </div>
  );
}

export default Chemical;
