import React from "react";

function Boutox() {
  return (
    <div className="container flex flex-col py-4">
      <div className="flex items-center justify-end flex-col">
        <img
          className="hidden sm:flex"
          src="https://www.ezabellaclinic.com/wp-content/uploads/2023/09/tbl_articles_article_25555_7693f965cd6-25fa-4738-929a-c7c8a2648c11.jpeg"
          alt="Boutox Image"
        />

        <br />

        <div className="flex flex-col gap-2 items-end justify-end">
          <div className="text-lg flex flex-col gap-3  text-start" style={{direction: 'rtl'}}>
            <p>
              البوتوكس هو الاسم التجاري للمادة المعروفة بالتوكسين بوتيلينيوم،
              وهو مادة عصبية سامة يتم استخلاصها من نوع من أنواع البكتيريا
              المعروفة باسم المطثية الوشيقية (بالانجليزية: Clostridium
              Botulinum) وهذه البكتيريا تسبب التسمم الغذائي.
            </p>
            <p>
              يعمل البوتوكس عن طريق إضعاف وتقليل إنقباضات العضلات، بحيث يثبط
              ويمنع إفراز الأعصاب لمادة الأسيتيل كولين التي تشير للعضلات
              بالانقباض.
            </p>
            <p>
              يستخدم البوتوكس للأغراض التجميلية والأغراض العلاجية أيضاً، وقبل
              حقنها يتم تنقيتها لتفادي إلحاق أي ضرر، ولإعطاء نتائج إيجابية في
              مجالات استخداماتها المختلفة.
            </p>
            <p>
              لا يعتبر الحقن بالبوتوكس الطريقة الملائمة لملئ الوجه أو حشوه، فهي
              لا تملأ التجاعيد الموجودة، بل تعمل فقط على إضعاف الخلايا العصبية
              مما يتسبب في إرخاء العضلات المسؤولة عن ظهور التجاعيد.
            </p>
            <p className="mt-10">
              <strong>استخدامات البوتوكس التجميلية</strong>
            </p>
            <ul>
              <li>علاج أعراض الشيخوخة مثل التجاعيد وخطوط العبوس.</li>
              <li>تجديد خلايا البشرة وإعادة نضارتها.</li>
              <li>علاج تشنج عضلات الوجه.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Rest of your component content */}
    </div>
  );
}

export default Boutox;
