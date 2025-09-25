import { FaUserPlus, FaMapMarkerAlt, FaUsers } from "react-icons/fa";

interface Step {
  id: number;
  title: string;
  desc: string;
  icon: React.ReactNode;
}

const DEFAULT_STEPS: Step[] = [
  {
    id: 1,
    title: "ثبت‌نام",
    desc: "کسب‌وکارت رو توی سایت ثبت کن و اطلاعاتت رو وارد کن — آماده شروع!",
    icon: <FaUserPlus className="w-6 h-6" aria-hidden />,
  },
  {
    id: 2,
    title: "روی نقشه ظاهر شو",
    desc: "آدرس دقیق بزن تا مشتری‌ها بتونن از نزدیک پیدات کنن و محل کسب رو ببینن.",
    icon: <FaMapMarkerAlt className="w-6 h-6" aria-hidden />,
  },
  {
    id: 3,
    title: "مشتری‌ها پیدات می‌کنن",
    desc: "با یک قالب حرفه‌ای و امکانات رزرو/تماس، مشتری‌ها سریع‌تر پیدات می‌کنن.",
    icon: <FaUsers className="w-6 h-6" aria-hidden />,
  },
];

export default async function Steps({
  steps = DEFAULT_STEPS,
}: {
  steps?: Step[];
}) {
  return (
    <section
      dir="rtl"
      aria-label="سه قدم تا دیده شدن"
      className="relative bg-gradient-to-b py-24 px-6 md:px-16 lg:px-24 overflow-hidden"
    >
      {/* تیتر و توضیح */}
      <div
        className="text-center max-w-3xl mx-auto mb-20 relative z-10"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <h1 className="text-[28px] md:text-[44px] font-extrabold text-[#D32F2F] leading-tight">
          سه قدم تا دیده شدن
        </h1>
        <span className="block w-32 h-1 bg-gradient-to-r from-[#F77E2D] to-[#D32F2F] rounded-full mx-auto mt-4 shadow-md" />
        <p className="mt-6 text-[#111827]/80 text-base md:text-lg leading-relaxed">
          فقط سه مرحله ساده کافیه تا کسب‌وکارت روی نقشه ثبت بشه و مشتری‌ها راحت
          بتونن پیدات کنن، تماس بگیرن یا حتی آنلاین رزرو کنن.
        </p>
      </div>

      <div className="relative max-w-5xl mx-auto z-10">
        <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-1 -translate-x-1/2 bg-gradient-to-b from-[#F77E2D] via-[#FF7043] to-[#D32F2F] opacity-40 rounded-full" />

        <div className="flex flex-col gap-16">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`relative flex flex-col md:flex-row items-center ${
                index % 2 === 0 ? "md:justify-start" : "md:justify-end"
              }`}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              data-aos-duration="1000"
              data-aos-offset="200"
            >
              <article
                role="listitem"
                aria-labelledby={`step-title-${step.id}`}
                className="relative bg-white/80 backdrop-blur-sm border border-gray-100 shadow-xl rounded-2xl p-8 w-full md:w-[45%] text-center transition-all duration-300 hover:shadow-2xl hover:scale-105"
              >
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 md:static md:translate-x-0 mb-6 md:mb-0 flex justify-center">
                  <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-[#F77E2D] to-[#D32F2F] text-white shadow-lg ring-4 ring-white">
                    <span className="font-bold">{step.id}</span>
                  </div>
                </div>

                <div className="flex items-center justify-center w-20 h-20 mx-auto rounded-full bg-white shadow-md mb-5">
                  <div className="bg-gradient-to-br from-[#F77E2D] to-[#D32F2F] w-14 h-14 rounded-full flex items-center justify-center text-white">
                    {step.icon}
                  </div>
                </div>

                <h2
                  id={`step-title-${step.id}`}
                  className="text-xl font-semibold text-[#0F172A] mb-2"
                >
                  {step.title}
                </h2>
                <p className="text-[#0F172A]/70 text-sm md:text-base leading-relaxed">
                  {step.desc}
                </p>

                <span className="sr-only">
                  مرحله {step.id} — {step.title}
                </span>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
