interface Section {
  title: string;
  description: string;
  links: string;
  logo: string;
}

const Sections: Section[] = [
  {
    title: 'Web Intro',
    description: 'مقدمة عن تطوير الويب وأشهر اللغات وكيف تبدأ التعلم.',
    links: '/web/intro',
    logo: '/Icons/web.svg',
  },
  {
    title: 'HTML',
    description: 'تعلم هيكلة صفحات الويب باستخدام HTML.',
    links: '/web/htm',
    logo: '/Icons/html.svg',
  },
  {
    title: 'CSS',
    description: 'تعلم تنسيق وتصميم صفحات الويب باستخدام CSS.',
    links: '/web/cs',
    logo: '/Icons/css.svg',
  },
  {
    title: 'JavaScript',
    description: 'تعلم لغة البرمجة الأساسية لتطوير الويب.',
    links: '/web/javascrip',
    logo: '/Icons/js.svg',
  },
  {
    title: 'Node.js & Express',
    description: 'تعلم تطوير السيرفرات باستخدام Node.js و Express.',
    links: '/web/node-js',
    logo: '/Icons/nod.svg',
  },
  {
    title: 'Databases',
    description: 'تعلم كيفية التعامل مع قواعد البيانات مثل SQL و NoSQL.',
    links: '/web/databas',
    logo: '/Icons/data.svg',
  },
  {
    title: 'React',
    description: 'تعلم تطوير تطبيقات الويب الحديثة باستخدام React.',
    links: '/web/react',
    logo: '/Icons/React.svg',
  },
  {
    title: 'Tailwind CSS',
    description: 'تعلم إطار العمل Tailwind CSS لتصميم الواجهات بسهولة.',
    links: '/web/tailwind',
    logo: '/Icons/tailwind.svg',
  },
  {
    title: 'TypeScript',
    description: 'تعلم TypeScript لتحسين أمان وجودة كود JavaScript.',
    links: '/web/typescrip',
    logo: '/Icons/typescript.svg',
  },
  {
    title: 'Next.js',
    description: 'تعلم إطار العمل Next.js لتطوير تطبيقات الويب .',
    links: '/web/next-js',
    logo: '/Icons/next.svg',
  },
  {
    title: 'Full-Stack',
    description: 'تعلم كيفية بناء مشروع ويب متكامل🚀',
    links: '/web/full_stack',
    logo: '/Icons/full-stack.svg',
  },
  {
    title: 'Git & GitHub',
    description: 'تعلم إدارة الأكواد المصدرية باستخدام Git و GitHub.',
    links: '/web/git-github',
    logo: '/Icons/git.svg',
  },
  {
    title: 'Docker',
    description: 'تعلم كيفية تشغيل وإدارة التطبيقات باستخدام Docker.',
    links: '/web/docke',
    logo: '/Icons/docker.svg',
  },
];

export default Sections;