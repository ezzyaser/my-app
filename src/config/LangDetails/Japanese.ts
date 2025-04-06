interface Topic {
  title: string;
  description: string;
  details: string;
  link: string;
}

const topics: Topic[] = [
  {
    title: 'مقدمة في اللغة اليابانية',
    description: 'تعلم أساسيات اللغة اليابانية.',
    details:
    'اللغة اليابانية هي لغة غنية تُستخدم في الثقافة والأعمال والتواصل. فهم أساسياتها، بما في ذلك الحروف والمفردات والنطق، ضروري للتواصل الفعّال.',
    link: 'https://youtube.com/playlist?list=PL4071737C12790477&feature=shared',
  },
  {
    title: 'النطق',
    description: 'إتقان نطق اللغة اليابانية.',
    details:
      'يحتاج النطق الصحيح إلى تعلم الصوتيات والتنغيم واللفظ السليم للحروف اليابانية.',
    link: 'https://youtu.be/4Irzvrcpf4Q?feature=shared',
  },
  {
    title: 'الهيراغانا والكاتاكانا',
    description: 'تعلم الحروف الأساسية.',
    details:
      'الهيراغانا والكاتاكانا هما نظامان أساسيان للكتابة في اليابانية. إتقانهما ضروري للقراءة والكتابة.',
    link: 'https://youtu.be/_wZHqOghvSs?feature=shared',
  },
  {
    title: 'المفردات',
    description: 'قم بتوسيع معرفتك بالكلمات اليابانية.',
    details:
      'يتضمن بناء المفردات تعلم الكلمات الشائعة، والتعابير اليومية، والكانجي الأساسي، مما يجعل التواصل أكثر سلاسة.',
    link: 'https://youtu.be/tkMOsYrtV74?feature=shared',
  },
  {
    title: 'القواعد',
    description: 'تعلم قواعد اللغة اليابانية.',
    details:
      'تشمل القواعد تركيب الجمل، والجسيمات، والأزمنة. إتقان القواعد يساعد في التحدث والكتابة بفعالية.',
    link: 'https://youtu.be/sbw5IDYyoF0?feature=shared',
  },
  {
    title: 'الاستماع',
    description: 'طور مهارات الاستماع لديك.',
    details:
      'تشمل تمارين الاستماع الاستماع إلى المحادثات اليومية، والأنمي، والبرامج الإذاعية لتعزيز القدرة على الاستيعاب.',
    link: 'https://youtube.com/playlist?list=PLFGs3d9SobfjFHWguksKU91CC5cyEFeWi&feature=shared',
  },
  {
    title: 'التحدث',
    description: 'عزز طلاقتك في التحدث.',
    details:
      'تشمل مهارات التحدث الممارسة اليومية، والمحادثات، والتفاعل مع الناطقين بها لتعزيز الثقة.',
    link: 'https://youtube.com/playlist?list=PLP6jQzrtQ71_R7lSyJLe95Qu60Xos-FeH&feature=shared',
  },
  {
    title: 'القراءة',
    description: 'حسن مستوى فهمك للقراءة.',
    details:
      'تشمل القراءة تحليل النصوص اليابانية، وتعلم كانجي جديد، وفهم السياق من خلال مواد مختلفة.',
    link: 'https://www.tofugu.com/japanese/japanese-books-for-upper-beginners/',
  },
  {
    title: 'الكتابة',
    description: 'حسن مهاراتك في الكتابة.',
    details:
      'تغطي الكتابة إنشاء الجمل، وكتابة المقالات، والتدريب على استخدام الكانجي والجسيمات بشكل صحيح.',
    link: 'https://youtube.com/playlist?list=PLVGw_A21plC4pxEbXC3Sv_9N6NizqxM3M&feature=shared',
  },
];

export default topics;