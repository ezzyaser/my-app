interface Topic {
  title: string;
  description: string;
  details: string;
  link: string;
}

const topics: Topic[] = [
  {
    title: 'مقدمة في اللغة العربية',
    description: 'تعرف على أساسيات اللغة العربية وأهميتها.',
    details: 'تغطي هذه المقدمة الحروف الأبجدية، النطق الأساسي، وأهمية اللغة العربية كلغة عالمية.',
    link: 'https://youtu.be/vEfd47I7R68?feature=shared',
  },
  {
    title: 'المفردات',
    description: 'تعلم الكلمات والمصطلحات الجديدة.',
    details: 'زيادة الحصيلة اللغوية تساعد في الفهم والتواصل بشكل أفضل، من خلال تعلم الكلمات الشائعة والمصطلحات المفيدة.',
    link: 'https://youtube.com/playlist?list=PLWl0zRDk50wKJNzHJ7RBQxXvWvOTLdbO6&feature=shared',
  },
  {
    title: 'النطق الصحيح',
    description: 'إتقان مخارج الحروف والتشكيل.',
    details: 'تعلم نطق الحروف العربية بشكل سليم مع التركيز على التشكيل والتنغيم لتعزيز الفهم والاستماع الجيد.',
    link: 'https://youtube.com/playlist?list=PLWl0zRDk50wKM4WZAZEx_gwUDFKwe2ObX&feature=shared',
  },
  {
    title: 'القواعد النحوية',
    description: 'أساسيات النحو والصرف في اللغة العربية.',
    details: 'تشمل دروس النحو القواعد الأساسية مثل الفاعل والمفعول به، والجمل الاسمية والفعلية، وأزمنة الأفعال.',
    link: 'https://youtube.com/playlist?list=PLIlO6SOsXKfE24AJfdXVXQc9mF2BG2PZ6&feature=shared',
  },
  {
    title: 'مهارات الاستماع',
    description: 'حسن قدرتك على الفهم والاستيعاب.',
    details: 'تساعد تمارين الاستماع مثل القصص الصوتية والمحاضرات على تعزيز مهارات الاستيعاب اللغوي.',
    link: 'https://youtu.be/-U-cnbFBc9c?feature=shared',
  },
  {
    title: 'مهارات التحدث',
    description: 'كن أكثر طلاقة وثقة عند التحدث.',
    details: 'التحدث بطلاقة يتطلب ممارسة المحادثات اليومية، التعابير الشائعة، وتقنيات الخطابة الفعالة.',
    link: 'https://youtube.com/playlist?list=PLWl0zRDk50wKAYJp0jZrNhCOUI9eemIq7&feature=shared',
  },
  {
    title: 'القراءة الفعالة',
    description: 'تحسين سرعة القراءة والاستيعاب.',
    details: 'تعلم كيفية تحليل النصوص، قراءة القصص والمقالات، وفهم المعاني العميقة للكلمات.',
    link: 'https://archive.org/details/AlQiraaturRashidaComplete3vol/page/n3/mode/2up',
  },
  {
    title: 'مهارات الكتابة',
    description: 'طور قدرتك على التعبير الكتابي.',
    details: 'يشمل تعلم الكتابة كتابة المقالات، الرسائل الرسمية، والتعبير الإبداعي بطريقة واضحة ومنطقية.',
    link: 'https://youtube.com/playlist?list=PLxIyz5tZ-CxBzvHBgZ1qwMR9EFFJGYhS7&feature=shared',
  },
  {
    title: 'الإملاء والتشكيل',
    description: 'إتقان الإملاء وقواعد التشكيل.',
    details: 'تعلم قواعد الإملاء الصحيحة، كيفية استخدام التشكيل لضبط النطق والمعنى، والتدرب على الكتابة السليمة.',
    link: 'https://youtu.be/FiJFokgo35A?feature=shared',
  },
  {
    title: 'الخط العربي',
    description: 'تعلم تحسين خطك بأساليب الخط العربي.',
    details: 'تشمل دروس الخط العربي التعرف على أنواع الخطوط مثل النسخ والرقعة والكوفي، وتقنيات تحسين الكتابة اليدوية.',
    link: 'https://youtube.com/playlist?list=PLBcGXRCBuu65jzHdM-DLG2Bd_JXPhY3GL&feature=shared',
  },
  {
    title: 'الأدب العربي',
    description: 'استكشف روائع الأدب العربي.',
    details: 'يتناول هذا الموضوع أهم الأعمال الأدبية في الشعر والنثر، مع تحليل لأهم الأدباء وتأثيرهم في الثقافة العربية.',
    link: 'https://youtu.be/hgxE5hWqhFQ?feature=shared',
  },
];

export default topics;
