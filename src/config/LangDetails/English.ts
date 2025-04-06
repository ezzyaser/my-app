interface Topic {
  title: string;
  description: string;
  details: string;
  link: string;
}

const topics: Topic[] = [
  {
    title: 'مقدمة في اللغة الإنجليزية',
    description: 'تعلم أساسيات اللغة الإنجليزية.',
    details:
      'اللغة الإنجليزية هي لغة عالمية تُستخدم في التواصل والأعمال والتعليم. فهم أساسياتها، بما في ذلك القواعد والمفردات والنطق، ضروري للتواصل الفعّال.',
    link: 'https://youtube.com/playlist?list=PLAie3YzOYRmley8mMYy1s9XuZYVxW1Ot7&feature=shared',
  },
  {
    title: 'المفردات',
    description: 'قم بتوسيع معرفتك بالكلمات.',
    details:
      'يتضمن بناء المفردات تعلم المرادفات، والمتضادات، والتعابير الاصطلاحية، والأفعال المركبة، مما يجعل التواصل أكثر دقة وثراء.',
    link: 'https://youtu.be/mgty3Bgu-YY?feature=shared',
  },
  {
    title: 'النطق',
    description: 'إتقان نطق اللغة الإنجليزية.',
    details:
      'يحتاج النطق الصحيح إلى تعلم الصوتيات وأنماط التوكيد والتنغيم، وهو أمر ضروري للتواصل الواضح.',
    link: 'https://youtu.be/QxQUapA-2w4?feature=shared',
  },
  {
    title: 'القواعد',
    description: 'تعلم قواعد اللغة الإنجليزية.',
    details:
      'تشمل القواعد الأزمنة، وتركيب الجمل، وأجزاء الكلام. إتقان القواعد يساعد في الكتابة والتحدث بفعالية.',
    link: 'https://youtu.be/FI2OKNMWGc4?feature=shared',
  },
  {
    title: 'الاستماع',
    description: 'طور مهارات الاستماع لديك.',
    details:
      'تشمل تمارين الاستماع البودكاست، والحوارات، وتمارين الفهم لتعزيز القدرة على الاستيعاب.',
    link: 'https://youtube.com/playlist?list=PLhNRdHEdUQewzYZ0X6gt3x9_CVen_HldI&feature=shared',
  },
  {
    title: 'التحدث',
    description: 'عزز طلاقتك في التحدث.',
    details:
      'تشمل مهارات التحدث المحادثات اليومية، والعروض التقديمية، والمناظرات لتعزيز الثقة والوضوح.',
    link: 'https://youtu.be/mKBbP4T5fbk?feature=shared',
  },
  {
    title: 'القراءة',
    description: 'حسن مستوى فهمك للقراءة.',
    details:
      'تشمل القراءة تحليل النصوص، وفهم السياق، وتوسيع المعرفة من خلال مواد متنوعة.',
    link: 'https://www.bsceducation.com/blog/novels-for-english-language-learners/',
  },
  {
    title: 'الكتابة',
    description: 'حسن مهاراتك في الكتابة.',
    details:
      'تغطي الكتابة المقالات، والرسائل الرسمية، والكتابة الإبداعية، وتنظيم الأفكار بوضوح ومنطقية.',
    link: 'https://youtu.be/gFXE9n7hrOI?feature=shared',
  },
];

export default topics;
