import React from "react";
import SocialButton from "../Social/Social";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-[#1A1A1A] to-[#D32F2F] text-white">
      <div className="max-w-6xl mx-auto py-16 px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <Image
            src="/Images/logo.png"
            alt="لوگو"
            className="w-40 h-auto mb-4"
            width={40} height={40}
          />
          <p className="text-[#FFFFFF]/80 text-sm md:text-base leading-relaxed md:text-right">
            اپیزن پلتفرمی برای معرفی و پیدا کردن کسب‌وکارها روی نقشه و رزرو آنلاین خدمات.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-2xl font-bold text-white mb-4">لینک‌های مفید</h3>
          <ul className="space-y-2 text-[#FFFFFF]/80 text-sm md:text-base">
            <li>
              <a href="#" className="hover:text-[#F77E2D] transition-colors">صفحه اصلی</a>
            </li>
            <li>
              <a href="#" className="hover:text-[#F77E2D] transition-colors">ثبت‌نام کسب‌وکار</a>
            </li>
            <li>
              <a href="#" className="hover:text-[#F77E2D] transition-colors">سوالات متداول</a>
            </li>
            <li>
              <a href="#" className="hover:text-[#F77E2D] transition-colors">تماس با ما</a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-2xl font-bold text-white mb-4">شبکه‌های اجتماعی</h3>
          <div className="flex space-x-4">
            <SocialButton/>
          </div>
        </div>
      </div>

     
    </footer>
  );
}
