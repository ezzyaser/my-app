interface Topic {
  title: string;
  description: string;
  details: string;
  link: string;
}

const topics: Topic[] = [
  {
      title: 'مقدمة في اللغة التركية',
      description: 'اكتشف جمال اللغة التركية وسحرها.',
      details:
          'اللغة التركية هي بوابتك لاستكشاف ثقافة غنية وتاريخ عريق. تتميز بإيقاعها الموسيقي وسهولة نطقها وقواعدها المنظمة. تعلم الأساسيات من الأبجدية إلى العبارات اليومية سيفتح لك أبواب التواصل مع ملايين المتحدثين حول العالم.',
      link: 'https://youtube.com/playlist?list=PLOBMFka6Ca0dlMDOoPJ7ZAwZv_hfo1AKf&feature=shared',
  },
  {
      title: 'المفردات',
      description: 'وسع حصيلتك اللغوية التركية.',
      details:
          'تعلم المفردات الأساسية مثل التحيات، الألوان، والأرقام، ثم تقدم نحو التعبيرات اليومية والمصطلحات الشائعة التي تمنحك طلاقة في الحديث.',
      link: 'https://youtu.be/5QlmLXWVflU?feature=shared',
  },
  {
      title: 'النطق',
      description: 'إتقان نطق اللغة التركية.',
      details:
          'النطق في التركية سهل نسبيًا حيث تُنطق الكلمات كما تُكتب. تعلّم الأصوات الفريدة مثل "ğ" و"ç" و"ş" لتحسين طلاقتك.',
      link: 'https://youtu.be/Tzs8uwrYWJQ?feature=shared',
  },
  {
      title: 'القواعد',
      description: 'تعلم القواعد التركية بسهولة.',
      details:
          'تتميز التركية ببنية قواعدية منطقية تعتمد على اللواحق التي تغير معاني الكلمات، مما يجعلها فريدة وسهلة التعلم للمبتدئين.',
      link: 'https://youtu.be/_4IxBaMTqrU?feature=shared',
  },
  {
      title: 'الاستماع',
      description: 'طور مهارات الاستماع لديك.',
      details:
          'استمع إلى الحوارات والموسيقى التركية لفهم النطق والإيقاع الطبيعي للغة. متابعة الأفلام والمسلسلات التركية تعزز الفهم العملي.',
      link: 'https://youtu.be/ZdFdrhTjdBk?feature=shared',
  },
  {
      title: 'التحدث',
      description: 'اكتسب الثقة في الحديث بالتركية.',
      details:
          'ممارسة التحدث يوميًا من خلال المحادثات والتفاعل مع الناطقين الأصليين يعزز مهاراتك بسرعة. انضم إلى مجموعات تعلم اللغات أو استخدم تطبيقات تبادل اللغات.',
      link: 'https://youtube.com/playlist?list=PLvTf_p7PD94bn-YVedvre4q2LytvpSsw5&feature=shared',
  },
  {
      title: 'القراءة',
      description: 'استمتع بقراءة اللغة التركية.',
      details:
          'ابدأ بقراءة القصص القصيرة والمقالات البسيطة ثم تطور إلى الروايات والأدب التركي لتوسيع معرفتك اللغوية والثقافية.',
      link: 'https://www.turkish.academy/turkishbooks',
  },
  {
      title: 'الكتابة',
      description: 'طور مهاراتك في الكتابة.',
      details:
          'مارس الكتابة اليومية من خلال كتابة اليوميات والمقالات والقصص القصيرة. تعلم القواعد الصحيحة والتركيب السليم يجعل تعبيرك أكثر وضوحًا وتأثيرًا.',
      link: 'https://youtu.be/K96eYGw5XKg?feature=shared',
  },
];

export default topics;