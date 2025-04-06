interface Tool {
  title: string;
  description: string;
  links: string;
  logo: string;
}

export const tools: Tool[] = [
  {
    title: 'Figma',
    description: 'أداة لتصميم الواجهات والنماذج الأولية.',
    links: '/project-tools/figma',
    logo: '/Icons/figma.svg',
  },
  {
    title: 'Notion',
    description: 'مساحة عمل شاملة لتدوين الملاحظات وتنظيم المهام والتعاون.',
    links: '/project-tools/notion',
    logo: '/Icons/notion.svg',
  },
  {
    title: 'Jira',
    description: 'أداة لإدارة المشاريع مخصصة للفرق التي تعمل بالأساليب الرشيقة (Agile).',
    links: '/project-tools/jira',
    logo: '/Icons/jira.svg',
  },
  {
    title: 'Miro',
    description: 'لوحة بيضاء تفاعلية للعمل الجماعي والتخطيط.',
    links: '/project-tools/miro',
    logo: '/Icons/miro.svg',
  },
  {
    title: 'Trello',
    description: 'أداة بصرية لتنظيم المهام والمشاريع باستخدام القوائم والبطاقات.',
    links: '/project-tools/trello',
    logo: '/Icons/trello.svg',
  },
];
