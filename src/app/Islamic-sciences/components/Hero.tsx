import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import {
  FaBookOpen,
  FaGraduationCap,
  FaLightbulb,
  FaArrowLeft,
} from 'react-icons/fa';

export default function Hero() {
  return (
    <MaxWidthWrapper>
      <div
        dir="rtl"
        className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 py-12 px-6 md:px-20 transition-all duration-300"
      >
        <h1 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-gray-200 leading-relaxed">
          العِلْمُ نورٌ للعُقولِ، وقد حَثَّ الإسْلام عَلى طَلبِ العِلْم
          النَّافِعِ بِكُلِّ فُروعِه؛ لِمَا فيه من إعْمارٍ للأَرْضِ وإقامةِ
          الدِّينِ الحَقِّ على الهُدى والنُّورِ والبَيِّناتِ
        </h1>

        <ol className="space-y-10">
          <li className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl">
            <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-400 flex items-center gap-2">
              <FaBookOpen /> ما هي أنواع العلوم ؟
            </h2>
            <div className="mt-6 space-y-4 font-medium text-gray-700 dark:text-gray-300">
              <ol className="list-decimal pl-6 space-y-4">
                <li>
                  <strong>العلوم الشرعية:</strong> وهي المتعلقة بالكتاب والسنة
                  (الوحي).
                </li>
                <li>
                  <strong>العلوم الطبيعية:</strong> (وهي كل ما يحيط بالإنسان من
                  ظواهر).
                </li>
                <li>
                  <strong>العلوم الإنسانية:</strong> (وهي كل ما يتعلق بالنفس
                  البشرية والمجتمع).
                </li>
              </ol>
            </div>
          </li>

          <li className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl">
            <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-400 flex items-center gap-2">
              <FaGraduationCap /> لماذا يتعلم الناس والمسلمون؟
            </h2>
            <ul className="mt-6 space-y-4 font-medium text-gray-700 dark:text-gray-300 list-disc pl-6">
              <li>
                لا يكونُ الإنسانُ إنساناً إلا بالعلم، ولا تتم إسلامية المسلم إلا
                بالعلم.
              </li>
              <li>غريزة البحث والاكتشاف التي وضعها الله في الإنسان.</li>
              <li>لتحسين الحياة وأسلوب المعيشة.</li>
              <li>لفهم مراد الله سبحانه وتعالى من خلقه.</li>
              <li>طلب العلم ضرورة بشرية وفريضة شرعية.</li>
              <li>ما لا يتم الواجب إلا به فهو واجب.</li>
            </ul>
          </li>

          <li className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl">
            <h2 className="text-xl font-semibold text-green-600 dark:text-green-400 flex items-center gap-2">
              <FaLightbulb /> ما هي أنواع العلوم الشرعية ؟
            </h2>
            <p className="mt-6 font-medium text-gray-700 dark:text-gray-300">
              العلماء قسموا العلوم الشرعية إلى ثلاثة أنواع:
            </p>
            <ol className="list-decimal pl-6 space-y-4 mt-3 text-gray-700 dark:text-gray-300">
              <li>
                <strong>علوم المصادر:</strong> (علوم القرآن وعلوم الحديث).
              </li>
              <li>
                <strong>علوم الوسائل:</strong> (اللغة العربية، أصول الفقه،
                المنطق، آداب البحث والمناظرة).
              </li>
              <li>
                <strong>علوم الغايات:</strong> (الفقه، العقيدة، التزكية).
              </li>
            </ol>
          </li>

          <li className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl">
            <h2 className="text-xl font-semibold text-green-600 dark:text-green-400 flex items-center gap-2">
              <FaLightbulb /> من أين تبدأ التعلم
            </h2>
            <div className="space-y-4 font-semibold mt-6">
              <p className="font-medium text-gray-700 dark:text-gray-300">
                الأصل في ترتيب طلب العلوم الشرعية أن تقدم علوم الوسائل على علوم
                المقاصد, لأن الأولى وسيلة , والثانية غاية , والوسائل مقدمة على
                الغايات . ولكن يكون هذا بعد معرفة التجويد وأهم العبادات التي
                يحتاجها المسلم في يومه
              </p>
              <ul className="flex flex-col gap-5 list-disc">
                <li>
                  <a
                    href="https://youtube.com/playlist?list=PL2-FkZlJhxqVA2ICqnP6_dW9cIpuW_FYd&feature=shared"
                    target="_blank"
                    className="text-blue-400 hover:underline"
                  >
                    دورة ما لا يسع المسلم جهله
                  </a>
                </li>
                <li>
                  <a
                    href="https://youtube.com/playlist?list=PLJi21Zen45zQ-p3e38-Wb94LhDKIZ7sac&feature=shared"
                    target="_blank"
                    className="text-blue-400 hover:underline"
                  >
                    التجويد للشيخ أيمن سويد
                  </a>
                </li>
                <li>
                  <a
                    href="https://youtu.be/PZcY3W9W2Yo?feature=shared"
                    target="_blank"
                    className="text-blue-400 hover:underline"
                  >
                    آداب طلب العلم
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ol>

        <div className="mt-12 text-center">
          <p className="text-gray-700 dark:text-gray-300 font-medium">
            عندما تنتهي من هذه الصفحة وتعلم التجويد والأمور الأساسية، وآداب طلب
            العلم , انتقل إلى:
          </p>
          <Link
            href="/Islamic-sciences/Sciences"
            className="text-blue-600 dark:text-blue-400 font-semibold flex items-center justify-center mt-5 hover:underline"
          >
            الصفحة التالية <FaArrowLeft className="ml-2" />
          </Link>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
