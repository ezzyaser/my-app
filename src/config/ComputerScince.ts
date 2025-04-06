interface Topic {
    title: string;
    description: string;
    links: string;
    logo: string;
}

const topics: Topic[] = [
    {
        title: 'Hardware',
        description: 'المكونات المادية لنظام الكمبيوتر.',
        links: '/hardware',
        logo: '/images/hardware.svg',
    },
    {
        title: 'Operating System',
        description: 'البرمجيات التي تدير موارد الأجهزة والبرمجيات.',
        links: '/operating-system',
        logo: '/images/os.svg',
    },
    {
        title: 'Programming Language',
        description: 'اللغات المستخدمة في كتابة تطبيقات البرمجيات.',
        links: '/programming-language',
        logo: '/images/programming.svg',
    },
    {
        title: 'Software Engineering',
        description: 'النهج المنهجي لتصميم وتطوير البرمجيات.',
        links: '/software-engineering',
        logo: '/images/software-engineering.svg',
    },
    {
        title: 'Design',
        description: 'مبادئ إنشاء تطبيقات سهلة الاستخدام وجذابة بصريًا.',
        links: '/design',
        logo: '/images/design.svg',
    },
    {
        title: 'Database',
        description: 'تخزين البيانات واسترجاعها بطريقة منظمة.',
        links: '/database',
        logo: '/images/database.svg',
    },
    {
        title: 'Computer Network and Internet and WWW',
        description: 'التواصل بين أجهزة الكمبيوتر والخدمات عبر الإنترنت.',
        links: '/networking',
        logo: '/images/network.svg',
    },
    {
        title: 'Cybersecurity & Hackers & Cyber Attacks',
        description: 'حماية الأنظمة من الهجمات الرقمية ونقاط الضعف.',
        links: '/cybersecurity',
        logo: '/images/cybersecurity.svg',
    },
    {
        title: 'Cryptography',
        description: 'تأمين البيانات من خلال تقنيات التشفير.',
        links: '/cryptography',
        logo: '/images/cryptography.svg',
    },
    {
        title: 'Cloud Computing',
        description: 'خدمات الحوسبة عند الطلب عبر الإنترنت.',
        links: '/cloud-computing',
        logo: '/images/cloud.svg',
    },
    {
        title: 'Block Chain',
        description: 'تقنية السجل اللامركزي المستخدمة في المعاملات الآمنة.',
        links: '/blockchain',
        logo: '/images/blockchain.svg',
    },
    {
        title: 'Math & Statistics',
        description: 'المفاهيم الرياضية والإحصائية في الحوسبة.',
        links: '/math-statistics',
        logo: '/images/math.svg',
    },
    {
        title: 'Artificial Intelligence',
        description: 'محاكاة الذكاء البشري في الآلات.',
        links: '/ai',
        logo: '/images/ai.svg',
    },
    {
        title: 'Machine Learning',
        description: 'تدريب الخوارزميات لتعلم الأنماط من البيانات.',
        links: '/machine-learning',
        logo: '/images/ml.svg',
    },
    {
        title: 'Deep Learning',
        description: 'الشبكات العصبية المتقدمة للتعرف على الأنماط المعقدة.',
        links: '/deep-learning',
        logo: '/images/dl.svg',
    },
    {
        title: 'Computer Vision',
        description: 'تمكين الآلات من تفسير ومعالجة البيانات البصرية.',
        links: '/computer-vision',
        logo: '/images/cv.svg',
    },
    {
        title: 'Natural Language Processing',
        description: 'تعليم أجهزة الكمبيوتر فهم اللغة البشرية.',
        links: '/nlp',
        logo: '/images/nlp.svg',
    },
    {
        title: 'Quantum Computing',
        description: 'حوسبة الجيل القادم التي تعتمد على ميكانيكا الكم.',
        links: '/quantum-computing',
        logo: '/images/quantum.svg',
    }
];

export default topics;
