interface Topic {
    title: string;
    description: string;
    details: string;
    link: string;
  }
  
  const topics: Topic[] = [
    {
      title: 'مقدمة في الفرنسية',
      description: 'تعلم أساسيات اللغة الفرنسية.',
      details:
        "اللغة الفرنسية من اللغات العالمية المستخدمة في التواصل، والأعمال، والتعليم. فهم أساسياتها، بما في ذلك القواعد، والمفردات، والنطق، ضروري للتواصل الفعّال.",
      link: 'https://youtube.com/playlist?list=PLV1-QgpUU7N2TVWS6gEVMqEfAFjAl-DV6&feature=shared'
    },
    {
      title: 'المفردات',
      description: 'قم بتوسيع معرفتك بالكلمات الفرنسية.',
      details:
        "يتضمن بناء المفردات تعلم المرادفات، والمتضادات، والتعابير الاصطلاحية، والأفعال المركبة، مما يجعل التواصل أكثر دقة وثراء.",
      link: 'https://youtu.be/1ZInwSV43UY?feature=shared',
    },
    {
      title: 'النطق',
      description: 'إتقان نطق اللغة الفرنسية.',
      details:
        "يحتاج النطق الصحيح إلى تعلم الصوتيات وأنماط التوكيد والتنغيم، وهو أمر ضروري للتواصل الواضح.",
      link: 'https://youtube.com/playlist?list=PLV1-QgpUU7N15x-ehJgw2t7MPdcHCySo2&feature=shared',
    },
    {
      title: 'القواعد',
      description: 'تعلم قواعد اللغة الفرنسية.',
      details:
        "تشمل القواعد الأزمنة، وتركيب الجمل، وأجزاء الكلام. إتقان القواعد يساعد في الكتابة والتحدث بفعالية.",
      link: 'https://youtube.com/playlist?list=PL_bt5rj27IIVuQdKp5vdAFnssCOoeMQ4Z&feature=shared',
    },
    {
      title: 'الاستماع',
      description: 'طور مهارات الاستماع لديك.',
      details:
        "تشمل تمارين الاستماع البودكاست، والحوارات، وتمارين الفهم لتعزيز القدرة على الاستيعاب.",
      link: ' https://youtube.com/playlist?list=PLnazreCxpqRlvlt5Pf4qn4bUoua5nU2Im&feature=shared',
    },
    {
      title: 'التحدث',
      description: 'عزز طلاقتك في التحدث.',
      details:
        "تشمل مهارات التحدث المحادثات اليومية، والعروض التقديمية، والمناظرات لتعزيز الثقة والوضوح.",
      link: 'https://youtube.com/playlist?list=PLg5GII3ij4JKdhYszihMfYkLhKciZP0vd&feature=shared',
    },
    {
      title: 'القراءة',
      description: 'حسن مستوى فهمك للقراءة.',
      details:
        "تشمل القراءة تحليل النصوص، وفهم السياق، وتوسيع المعرفة من خلال مواد متنوعة.",
      link: 'https://www.frenchwithagnes.com/10-french-books-for-beginners/',
    },
    {
      title: 'الكتابة',
      description: 'حسن مهاراتك في الكتابة.',
      details:
        "تغطي الكتابة المقالات، والرسائل الرسمية، والكتابة الإبداعية، وتنظيم الأفكار بوضوح ومنطقية.",
      link: 'https://youtu.be/xkM8ZrtICqU?feature=shared',
    },
  ];
  
  export default topics;