export default function Footer() {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          {/* Logo & Description */}
          <div className="md:w-1/3">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Learn <span className="text-blue-500">For Life</span>
            </h2>
            <p className="text-gray-700 dark:text-gray-400 mt-2 text-sm leading-relaxed">
              Empower your learning journey with the best resources.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:w-1/3">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Quick Links
            </h3>
            <ul className="mt-3 space-y-2">
              {quickLinks.map(({ name, href }) => (
                <li key={name}>
                  <a
                    href={href}
                    className="text-gray-700 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-300 dark:border-gray-700 mt-8 pt-4 text-center text-gray-700 dark:text-gray-400 text-sm">
          © {new Date().getFullYear()} EZZ YASER. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
