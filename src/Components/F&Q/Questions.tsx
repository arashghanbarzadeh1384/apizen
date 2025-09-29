"use client";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa"; // استفاده از آیکون مدرن‌تر

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
    <section className="max-w-3xl mx-auto py-20 px-6 md:px-0">
      <h2
        className="text-4xl md:text-5xl font-extrabold text-neutral-800 text-center mb-16"
      >
        سوالات متداول
      </h2>

      <div className="space-y-6">
        {FAQ_DATA.map((item, index) => (
          <div
            key={index}
            className={`border border-gray-200 rounded-3xl overflow-hidden shadow-md ${
              openIndex === index ? "border-[#D32F2F]" : ""
            }`}
          >
            <button
              onClick={() => toggle(index)}
              className="w-full text-right p-6 flex justify-between items-center text-neutral-800 bg-white"
            >
              <span className="font-semibold text-xl md:text-2xl">
                {item.question}
              </span>
              <FaChevronDown
                className={`w-5 h-5 text-neutral-500 ${
                  openIndex === index ? "rotate-180 text-[#D32F2F]" : ""
                }`}
              />
            </button>

            {openIndex === index && (
              <div className="px-6 pb-6 text-neutral-500 text-base leading-relaxed">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}