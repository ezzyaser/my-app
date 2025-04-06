import Image from 'next/image';

export default function Footer() {
  // const quickLinks = [
  //   { name: 'الرئيسية', href: '/' },
  //   { name: 'من نحن', href: '/about' },
  //   { name: 'الخدمات', href: '/services' },
  //   { name: 'اتصل بنا', href: '/contact' },
  // ];

  return (
    <footer className="bg-gray-200 dark:bg-gray-900 py-10 transition-colors duration-300 flex flex-col">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1  gap-8">
          {/* Logo & Description */}
          {/* <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              تعلم 📚
            </h2>
            <p className="text-gray-700 dark:text-gray-400 mt-2 text-sm leading-relaxed">
              تعلم كل ما ينفعك لتصبح أفضل 🦸‍♂️
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              روابط سريعة
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
          </div> */}

          {/* Footer Image */}
          <div className="flex flex-col justify-center md:justify-end">
            <Image
              src="/images/footer.jpeg"
              alt="footer"
              width={250}
              height={250}
              className="rounded-lg shadow-lg"
            />
            <p></p>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-300 dark:border-gray-700 mt-8 pt-4 text-center text-gray-700 dark:text-gray-400 text-sm">
        {/* © {new Date().getFullYear()}  */}
        «لا بد وأن توجد طليعة إسلامية تقود البشرية إلى الخلاص.»
      </div>
    </footer>
  );
}

// 1️⃣ رابط تبرع عبر PayPal
// إذا كان لديك حساب PayPal، يمكنك إنشاء رابط تبرع عبر:
// 🔗 https://www.paypal.com/donate/buttons

// ثم استخدامه في HTML:

// html
// Copy
// Edit
// <a href="https://www.paypal.com/donate?hosted_button_id=YOUR_BUTTON_ID" target="_blank">
//     تبرع عبر PayPal
// </a>
// 2️⃣ رابط تبرع عبر Stripe
// إذا كنت تستخدم Stripe، يمكنك إنشاء صفحة تبرع عبر Stripe Checkout:

// html
// Copy
// Edit
// <a href="https://donate.stripe.com/YOUR_LINK" target="_blank">
//     تبرع عبر Stripe
// </a>
// 3️⃣ رابط تبرع عبر Buy Me a Coffee ☕
// خدمة مشهورة لدعم صانعي المحتوى:

// html
// Copy
// Edit
// <a href="https://www.buymeacoffee.com/YOUR_USERNAME" target="_blank">
//     اشترِ لي قهوة ☕
// </a>
// إذا كنت بحاجة إلى زر مخصص، يمكنني مساعدتك في تصميمه باستخدام CSS 🚀. هل تريد تصميم زر مميز؟ 😊
