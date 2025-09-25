"use client";
import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_DATA: FAQItem[] = [
  {
    question: "ثبت‌نام رایگانه یا هزینه داره؟",
    answer:
      "بله، ثبت‌نام اولیه کاملاً رایگانه. در آینده برای امکانات پیشرفته ممکنه پلن‌های ویژه هم ارائه بشه.",
  },
  {
    question: "چه نوع کسب‌وکارهایی می‌تونن ثبت بشن؟",
    answer:
      "از سوپرمارکت و آرایشگاه گرفته تا کلینیک و مشاور— تمام کسب‌وکارها می‌تونن ثبت‌نام کنن.",
  },
  {
    question: "رزرو آنلاین چطور کار می‌کنه؟",
    answer:
      "اگر کسب‌وکارت خدماتی باشه (مثل دکتر یا آرایشگر)، یک جدول زمان‌بندی برات فعال می‌شه و مشتری می‌تونه آنلاین وقت بگیره.",
  },
  {
    question: "آیا اطلاعات من امنه؟",
    answer:
      "بله. تمام اطلاعات با امنیت کامل ذخیره می‌شه و فقط برای نمایش به مشتری‌ها در سایت استفاده می‌شه.",
  },
];

export default function Questions() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-3xl mx-auto py-16 px-6 md:px-0">
      <h2
        className="text-4xl md:text-5xl font-extrabold text-center mb-12"
        data-aos="fade-up"
        data-aos-duration="800"
        style={{ color: "#D32F2F" }}
      >
        سوالات متداول
      </h2>

      <div className="space-y-6">
        {FAQ_DATA.map((item, index) => (
          <div
            key={index}
            className="border border-[#F77E2D] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay={index * 150}
          >
            <button
              onClick={() => toggle(index)}
              className="w-full text-left px-6 py-5 flex justify-between items-center bg-[#F77E2D] hover:bg-[#D32F2F] transition-colors duration-300"
            >
              <span className="font-semibold text-white text-lg md:text-xl">
                {item.question}
              </span>
              <span className="text-2xl text-white">{openIndex === index ? "−" : "+"}</span>
            </button>

            {openIndex === index && (
              <div className="px-6 py-5 bg-[#1A1A1A] text-[#F77E2D] text-base md:text-lg leading-relaxed transition-all duration-300">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
