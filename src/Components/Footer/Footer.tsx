import React from "react";
import SocialButton from "../Social/Social";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative bg-neutral-900/90 text-white backdrop-blur-3xl overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-800 to-black"></div>

      <div className="relative z-10 max-w-7xl mx-auto py-20 px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-[#774a40] rounded-3xl p-8 flex flex-col items-center md:items-start text-center md:text-right shadow-lg backdrop-blur-2xl backdrop-saturate-200">
          <Image
            src="/Images/logo.png"
            alt="لوگو"
            className="w-40 h-auto mb-4"
            width={160}
            height={40}
          />
          <p className="text-neutral-200 text-sm md:text-base leading-relaxed">
            اپیزن پلتفرمی برای معرفی و پیدا کردن کسب‌وکارها روی نقشه و رزرو
            آنلاین خدمات.
          </p>
        </div>

        <div className="bg-[#774a40] rounded-3xl p-8 flex flex-col items-center md:items-start text-center md:text-right shadow-lg backdrop-blur-2xl backdrop-saturate-200">
          <h3 className="text-xl font-bold text-white mb-4">لینک‌های مفید</h3>
          <ul className="space-y-3 text-neutral-200 text-sm md:text-base">
            <li>
              <a
                href="#"
                className="hover:text-[#F77E2D] transition-colors duration-300"
              >
                صفحه اصلی
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-[#F77E2D] transition-colors duration-300"
              >
                ثبت‌نام کسب‌وکار
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-[#F77E2D] transition-colors duration-300"
              >
                سوالات متداول
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-[#F77E2D] transition-colors duration-300"
              >
                تماس با ما
              </a>
            </li>
          </ul>
        </div>

        <div className="bg-[#774a40] rounded-3xl p-8 flex flex-col items-center md:items-start text-center md:text-right shadow-lg backdrop-blur-2xl backdrop-saturate-200">
          <h3 className="text-xl font-bold text-white mb-4">
            شبکه‌های اجتماعی
          </h3>
          <div className="flex space-x-4 space-x-reverse">
            <SocialButton />
          </div>
        </div>
      </div>
    </footer>
  );
}
