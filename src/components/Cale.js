function table() {
  return (
    <div>
      <div class="container mx-auto p-4">
        <table class="min-w-full bg-white border border-gray-300">
          <thead>
            <tr
              style={{
                background:
                  "linear-gradient(270deg, rgba(14,30,125,1) 31%, rgba(65,70,166,1) 76%)",
              }}
            >
              <th class="px-2 py-3 text-start text-base  font-extrabold text-white uppercase tracking-wider border-b">
                تاريح الاجراء/المناسبة
              </th>
              <th class="px-6 py-3 text-start text-base te font-extrabold text-white uppercase tracking-wider border-b">
                الاجراء/المناسبة
              </th>
              <th class="px-6 py-3 text-start text-base font-extrabold text-white uppercase tracking-wider border-b">
                ملاحظات
              </th>
            </tr>
          </thead>
          <tbody className="text-right">
            <tr class="bg-gray-100 border-b  text-start">
              <td class="px-2 py-2 whitespace-nowrap">الاحد 2024/2/11م</td>
              <td class="px-6 py-2 whitespace-nowrap">
                بدء تقديم استثناءات التسجيل
              </td>
              <td class="px-6 py-2 whitespace-nowrap"></td>
            </tr>
            <tr class="bg-white border-b">
              <td class="px-2 py-2 whitespace-nowrap">الاحد 2024/2/11م</td>
              <td class="px-6 py-2 whitespace-nowrap">
                بدء اختيار الحزم لطلبة الدكتور في الطب
              </td>
              <td class="px-6 py-2 whitespace-nowrap"></td>
            </tr>
            <tr class="bg-gray-100 border-b  text-start">
              <td class="px-2 py-2 whitespace-nowrap">
                الأربعاء - السبت 2/14 - 2024/3/2م
              </td>
              <td class="px-6 py-2 whitespace-nowrap">
                فترة الانسحاب والاضافة للطلبة
              </td>
              <td class="px-6 py-2 whitespace-nowrap"></td>
            </tr>
            <tr class="bg-white border-b">
              <td class="px-2 py-2 whitespace-nowrap">الأربعاء 2024/2/14م</td>
              <td class="px-6 py-2 whitespace-nowrap">
                بدء اجراءات التسجيل للفصل الدراسي
              </td>
              <td class="px-6 py-2 whitespace-nowrap"></td>
            </tr>
            <tr class="bg-gray-100 border-b  text-start">
              <td class="px-2 py-2 whitespace-nowrap">الأربعاء 2024/2/14م</td>
              <td class="px-6 py-2 whitespace-nowrap">
                بدء بناء الحزم الكترونيا لطلبة دكتور في الطب
              </td>
              <td class="px-6 py-2 whitespace-nowrap"></td>
            </tr>
            <tr class="bg-white border-b">
              <td class="px-2 py-2 whitespace-nowrap">الخميس 2024/2/15م</td>
              <td class="px-6 py-2 whitespace-nowrap">
                بدء الاضافة على الشعب من خلال الكليات
              </td>
              <td class="px-6 py-2 whitespace-nowrap"></td>
            </tr>
            <tr class="bg-gray-100 border-b  text-start">
              <td class="px-2 py-2 whitespace-nowrap">الأحد 2024/2/18م</td>
              <td class="px-6 py-2 whitespace-nowrap">
                بدء دوام السادة اعضاء الهيئة التدريسية
              </td>
              <td class="px-6 py-2 whitespace-nowrap"></td>
            </tr>
            <tr class="bg-white border-b">
              <td class="px-2 py-2 whitespace-nowrap">
                الأحد - السبت 2/25 - 2024/3/2م
              </td>
              <td class="px-6 py-2 whitespace-nowrap">
                فترة الانسحاب مع ترصيد الرسوم الجامعية{" "}
              </td>
              <td class="px-6 py-2 whitespace-nowrap"></td>
            </tr>
            <tr class="bg-gray-100 border-b  text-start">
              <td class="px-2 py-2 whitespace-nowrap">الأحد 2024/2/25م</td>
              <td class="px-6 py-2 whitespace-nowrap">
                بدء استيفاء الغرامة من الطلبة غير المسددين والمتأخرين عن التسجيل
                الراغبين بالتسجيل من غير المستجدين
              </td>
              <td class="px-6 py-2 whitespace-nowrap"></td>
            </tr>
            <tr class="bg-white border-b">
              <td class="px-2 py-2 whitespace-nowrap">الأحد 2024/2/25م</td>
              <td class="px-6 py-2 whitespace-nowrap">
                بدء التدريس للفصل الدراسي
              </td>
              <td class="px-6 py-2 whitespace-nowrap"></td>
            </tr>
            <tr class="bg-gray-100 border-b  text-start">
              <td class="px-2 py-2 whitespace-nowrap">الأحد 2024/3/3م</td>
              <td class="px-6 py-2 whitespace-nowrap">
                انتهاء فترة تحديد المساقات المراد عقد امتحانها بطريقة (ON LINE)
                الكترونيا
              </td>
              <td class="px-6 py-2 whitespace-nowrap"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default table;
