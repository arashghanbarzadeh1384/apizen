// AOSTextBlock.tsx
"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


export default function AOSTextBlock() {
  useEffect(() => {
    AOS.init({
      duration: 1000,      
      easing: "ease-out-back", 
      once: true,           
    });
  }, []);

  return (
    <>
      <h1
        className="text-3xl sm:text-4xl md:text-4xl font-bold leading-12"
        data-aos="zoom-in"
        data-aos-delay="100"
      >
        اینجا همه کسب‌وکارها پیدا می‌شن
      </h1>
      <p
        className="mt-3 text-sm sm:text-base md:text-lg text-gray-800"
        data-aos="fade-left"
        data-aos-delay="300"
      >
        کسب‌وکار خودت رو ثبت کن، مشتری‌ها روی نقشه پیدات کنن و خدماتت رو آنلاین رزرو کنن
      </p>
    </>
  );
}
