interface Topic {
  title: string;
  description: string;
  details: string;
  link: string;
}

const topics: Topic[] = [
  {
    title: 'مقدمة في اللغة الروسية',
    description: 'تعلم أساسيات اللغة الروسية.',
    details:
      'اللغة الروسية من اللغات السلافية الشرقية وتُستخدم على نطاق واسع في أوروبا وآسيا. فهم أساسياتها، بما في ذلك الأبجدية، القواعد، والمفردات، ضروري للتواصل الفعّال.',
    link: 'https://youtube.com/playlist?list=PLx1Hrg5Bg3xrnm30dNPZ5q2R9J6Zz2vUq&feature=shared',
  },
  {
    title: 'النطق',
    description: 'إتقان نطق اللغة الروسية.',
    details:
      'يتطلب النطق الصحيح تعلم الأبجدية الصوتية الروسية، والتدرب على النبر والتنغيم للحصول على نطق طبيعي وسلس.',
    link: 'https://youtu.be/Q4pZnM7LeSo?feature=shared',
  },
  {
    title: 'المفردات',
    description: 'قم بتوسيع معرفتك بالكلمات الروسية.',
    details:
      'يتضمن بناء المفردات تعلم الكلمات الأساسية، الأفعال، الأسماء، الصفات، والتعابير الاصطلاحية، مما يجعل التواصل أكثر دقة وسلاسة.',
    link: 'https://youtu.be/sEBgK47Zsno?feature=shared',
  },
  {
    title: 'القواعد',
    description: 'تعلم قواعد اللغة الروسية.',
    details:
      'تشمل القواعد الروسية الأزمنة، تصريف الأفعال، الأسماء، الضمائر، وتركيب الجمل. إتقان القواعد يساعد في الكتابة والتحدث بفعالية.',
    link: 'https://youtu.be/CePiAYDh99Y?feature=shared',
  },
  {
    title: 'الاستماع',
    description: 'طور مهارات الاستماع لديك.',
    details:
      'تمارين الاستماع تشمل الحوارات، القصص القصيرة، والمقابلات لمساعدتك على تحسين الفهم السمعي.',
    link: 'https://youtu.be/VLEsxi-z-wA?feature=shared',
  },
  {
    title: 'التحدث',
    description: 'عزز طلاقتك في التحدث.',
    details:
      'تشمل مهارات التحدث المحادثات اليومية، التعبيرات الشائعة، والممارسة مع الناطقين الأصليين.',
    link: 'https://youtube.com/playlist?list=PLJ5ltfEfYENGXEa_6518OQOKvv0Xj2s4l&feature=shared',
  },
  {
    title: 'القراءة',
    description: 'حسن مستوى فهمك للقراءة.',
    details:
      'تشمل القراءة تحليل النصوص، فهم السياق، وقراءة القصص والمقالات الروسية.',
    link: 'https://storylearning.com/learn/russian/russian-tips/russian-books-for-beginners',
  },
  {
    title: 'الكتابة',
    description: 'حسن مهاراتك في الكتابة.',
    details:
      'تغطي الكتابة المقالات، الرسائل الرسمية، والتمارين الكتابية لتطوير مهارات التعبير باللغة الروسية.',
    link: 'https://youtu.be/DSBIbr4-2Ec?feature=shared',
  },
];

export default topics;
