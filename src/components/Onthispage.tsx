// 'use client';
// import { cn } from '@/lib/utils';
// import React, { useEffect, useState } from 'react';

// interface LinkType {
//   id: string;
//   text: string;
// }

// const Onthispage = ({
//   htmlContent,
//   className,
// }: {
//   htmlContent: string;
//   className: string;
// }) => {
//   const [links, setLinks] = useState<null | LinkType[]>(null);

//   useEffect(() => {
//     const temp = document.createElement('div');
//     temp.innerHTML = htmlContent;

//     // Check this syntax
//     const headings = temp.querySelectorAll('h2');

//     const generatedLinks: LinkType[] = [];

//     headings.forEach((heading, index) => {
//       const id = heading.id || `heading-${index}`;
//       heading.id = id;

//       generatedLinks.push({
//         id: id,
//         text: (heading as HTMLElement).innerText,
//       });
//     });

//     setLinks(generatedLinks);
//   }, [htmlContent]);

//   return (
//     <div className={cn('hidden md:block ', className)}>
//       <div className="sticky top-20">
//         <h2>On This Page </h2>
//         <ul className="not-prose text-xs">
//           {links &&
//             links.map((link) => {
//               return (
//                 <li key={link.id} className="pt-1">
//                   <a href={`#${link.id}`}>
//                     {link.text.slice(0, 50)}

//                     {link.text.length > 50 ? '...' : ''}
//                   </a>
//                 </li>
//               );
//             })}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Onthispage;
'use client';

import { cn } from '@/lib/utils';
import React, { useEffect, useMemo, useState } from 'react';

interface LinkType {
  id: string;
  text: string;
}

const OnThisPage = ({
  htmlContent,
  className,
}: {
  htmlContent: string;
  className?: string;
}) => {
  const [activeId, setActiveId] = useState<string | null>(null);

  const links = useMemo(() => {
    if (!htmlContent) return [];

    const temp = document.createElement('div');
    temp.innerHTML = htmlContent;

    return Array.from(temp.querySelectorAll('h2')).map((heading, index) => {
      const id = heading.id || `heading-${index}`;
      heading.id = id;
      return { id, text: heading.textContent?.trim() || 'Untitled' };
    });
  }, [htmlContent]);

  useEffect(() => {
    const handleScroll = () => {
      let currentActive: string | null = null;
      links.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentActive = id;
          }
        }
      });
      setActiveId(currentActive);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [links]);

  if (!links.length) return null;

  return (
    <aside dir="rtl" className={cn(' md:block', className)}>
      <div className="sticky top-20 border-l-4 border-gray-200 pl-5 py-4 bg-gray-50 rounded-md shadow-sm">
        <h2 className="text-xs font-bold mb-4 text-gray-700 uppercase tracking-wider">
          في هذه الصفحة
        </h2>
        <ul className="text-sm space-y-3">
          {links.map(({ id, text }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={cn(
                  'block transition-all duration-300 ease-in-out hover:text-blue-600 hover:pl-3',
                  activeId === id
                    ? 'text-blue-600 font-semibold border-r-2 border-blue-600 pr-2'
                    : 'text-gray-600',
                )}
              >
                {text.length > 50 ? `${text.slice(0, 50)}...` : text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default OnThisPage;
