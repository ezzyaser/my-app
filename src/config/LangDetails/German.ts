interface Topic {
  title: string;
  description: string;
  details: string;
  link: string;
}

const topics: Topic[] = [
  {
    title: 'مقدمة في اللغة الألمانية',
    description: 'تعلم أساسيات اللغة الألمانية.',
    details:
      'اللغة الألمانية هي إحدى اللغات الأكثر انتشارًا في أوروبا. تعلم الأساسيات مثل الحروف، التحيات، وتكوين الجمل الأساسية سيساعدك في بناء قاعدة قوية للتواصل.',
    link: 'https://www.youtube.com/playlist?list=PLk1fjOl39-50kWobutO8NVFzbw9PHtbbg',
  },
  {
    title: 'المفردات',
    description: 'قم بتوسيع معرفتك بالكلمات الألمانية.',
    details:
      'يشمل تعلم المفردات حفظ الكلمات الأساسية، التعابير الشائعة، والأفعال الهامة المستخدمة يوميًا في المحادثات.',
    link: 'https://youtu.be/cl42wTJyXVk?feature=shared',
  },
  {
    title: 'النطق',
    description: 'إتقان نطق اللغة الألمانية.',
    details:
      'يتطلب النطق الألماني فهم الصوتيات، الاختلافات بين اللهجات، وأصوات الحروف المتحركة والصامتة، مما يساعد على التحدث بوضوح.',
    link: 'https://youtu.be/nI77g2VWysE?feature=shared',
  },
  {
    title: 'القواعد',
    description: 'تعلم قواعد اللغة الألمانية.',
    details:
      'تشمل قواعد اللغة الألمانية تصريف الأفعال، تركيب الجمل، الأجناس النحوية، وحالات الإعراب (Nominativ, Akkusativ, Dativ, Genitiv).',
    link: 'https://youtu.be/paDNTjoWExI?feature=shared',
  },
  {
    title: 'الاستماع',
    description: 'طور مهارات الاستماع لديك.',
    details:
      'تمارين الاستماع تساعد في فهم النطق الألماني، التقاط الكلمات في المحادثات، وتحسين مهارات الفهم السريع للغة المنطوقة.',
    link: 'https://youtube.com/playlist?list=PLZkMSIuxsFpv_2d3n7Sy17iW9AKHzeifn&feature=shared',
  },
  {
    title: 'التحدث',
    description: 'عزز طلاقتك في التحدث بالألمانية.',
    details:
      'يتضمن تحسين مهارات التحدث التدرب على الحوارات اليومية، ممارسة النطق، والتفاعل مع متحدثين أصليين لتعزيز الثقة.',
    link: 'https://youtube.com/playlist?list=PLup0MZkFBW3HbfFqQ0DAckqVCzs0Z_UGq&feature=shared',
  },
  {
    title: 'القراءة',
    description: 'حسن مستوى فهمك للقراءة بالألمانية.',
    details:
      'تتطلب القراءة فهم النصوص البسيطة والمعقدة، التعرف على الكلمات الجديدة من السياق، وتحليل المعلومات من مصادر مختلفة.',
    link: 'https://www.lingoda.com/blog/en/german-books-for-beginner/',
  },
  {
    title: 'الكتابة',
    description: 'حسن مهاراتك في الكتابة بالألمانية.',
    details:
      'تشمل مهارات الكتابة كتابة الجمل الصحيحة نحويًا، التعبير عن الأفكار بوضوح، والتمرن على الكتابة الرسمية وغير الرسمية.',
    link: 'https://youtu.be/W1AMberLVu8?feature=shared',
  },
];

export default topics;
