import React from "react";

function Fillar() {
  return (
    <div className="container flex flex-col py-4">
      <div className="flex items-center justify-end flex-col">
        <img
          className="hidden sm:flex"
          src="/images/services/fillar.png"
          alt="Boutox Image"
        />
        <br />
        <div className="flex flex-col gap-2 items-end justify-end">
          <div className="text-lg text-right">
            <p>
              حقن الفيلر هي إجراء تجميلي غير جراحي من الممكن اللجوء إليه لتحسين
              مظهر البشرة والجلد، ولا سيما في منطقة الوجه، وقد يتم استخدامها
              كبديل عن بعض الإجراءات التجميلية الجراحية، مثل: فيلر الأنف. يتم
              القيام بهذا الإجراء التجميلي من خلال حقن مواد هلامية القوام أسفل
              الجلد في مناطق معينة يحددها الطبيب، وتعمل هذه المواد على توفير ما
              يشبه الحشو الداخلي للأماكن التي ربما خفَت فيها سطح الجلد أو تغير
              مظهره لسبب ما. هناك العديد من المواد المتنوعة والمختلفة التي من
              الممكن إدخالها للبشرة من خلال هذا النوع من الحقن، وتختلف طبيعة
              المادة التي قد يقع اختيار الطبيب عليها تبعًا لعدة عوامل، مثل:
            </p>
            <ul className="mt-5 [&>*]:mt-2">
              <li>طبيعة العيب التجميلي المنشود إصلاحه.</li>
              <li>ديمومة النتائج.</li>
              <li>موقع المنطقة المحقونة.</li>
            </ul>
          </div>
        </div>
      </div>
      {/* Rest of your component content */}
    </div>
  );
}

export default Fillar;
