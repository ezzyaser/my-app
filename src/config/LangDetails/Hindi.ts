interface Topic {
  title: string;
  description: string;
  details: string;
  link: string;
}

const topics: Topic[] = [
  {
      title: 'مقدمة في اللغة الهندية',
      description: 'تعلم أساسيات اللغة الهندية.',
      details:
          'اللغة الهندية من أكثر اللغات تحدثًا في العالم، وهي لغة رسمية في الهند. تعلم الأساسيات يشمل الأبجدية، القواعد البسيطة، والمفردات الأساسية.',
      link: 'https://youtu.be/1lrz11BbqCA?feature=shared',
  },
  {
      title: 'المفردات',
      description: 'قم بتوسيع معرفتك بالكلمات.',
      details:
          'يتضمن بناء المفردات تعلم المرادفات، والمتضادات، والتعابير الاصطلاحية، والأفعال المركبة، مما يجعل التواصل أكثر دقة وثراء.',
      link: 'https://youtu.be/W1WmqLODrPk?feature=shared',
  },
  {
      title: 'النطق',
      description: 'إتقان نطق الكلمات الهندية.',
      details:
          'يحتاج النطق الصحيح إلى تعلم الصوتيات الهندية، وأنماط التوكيد والتنغيم، مما يساعد على تحسين التواصل الشفهي.',
      link: 'https://youtu.be/yJHjjjWe0s4?feature=shared',
  },
  {
      title: 'القواعد',
      description: 'تعلم قواعد اللغة الهندية.',
      details:
          'تشمل القواعد الهندية الأزمنة، تركيب الجمل، وأجزاء الكلام، مما يساعد على تكوين جمل صحيحة لغويًا.',
      link: 'https://youtube.com/playlist?list=PLBv6B6E0IuHgx_7XUFqN490vz27836pxQ&feature=shared',
  },
  {
      title: 'الاستماع',
      description: 'طور مهارات الاستماع لديك.',
      details:
          'تشمل تمارين الاستماع محادثات يومية، ومقاطع صوتية هندية، وتمارين الفهم لتعزيز القدرة على الاستيعاب.',
      link: 'https://youtu.be/oxjHLSTHcjg?feature=shared',
  },
  {
      title: 'التحدث',
      description: 'عزز طلاقتك في التحدث.',
      details:
          'تشمل مهارات التحدث المحادثات اليومية، والعروض التقديمية، والمناظرات لتعزيز الثقة والوضوح في التحدث باللغة الهندية.',
      link: 'https://youtube.com/playlist?list=PLSzKbnydlhPLIBKi37Lpf1qOqg4vun0VR&feature=shared',
  },
  {
      title: 'القراءة',
      description: 'حسن مستوى فهمك للقراءة.',
      details:
          'تشمل القراءة تحليل النصوص الهندية، وفهم السياق، وتوسيع المعرفة من خلال قراءة مواد متنوعة باللغة الهندية.',
      link: 'https://www.timesnownews.com/lifestyle/books/features/top-10-hindi-literature-books-for-beginners-article-110732069',
  },
  {
      title: 'الكتابة',
      description: 'حسن مهاراتك في الكتابة.',
      details:
          'تغطي الكتابة المقالات، والرسائل الرسمية، والكتابة الإبداعية، وتنظيم الأفكار بوضوح ومنطقية باللغة الهندية.',
      link: 'https://youtu.be/pWhm40hXaDY?feature=shared',
  },
];

export default topics;