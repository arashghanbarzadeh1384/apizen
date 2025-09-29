import { FaUserPlus, FaMapMarkerAlt, FaUsers } from "react-icons/fa";
import FeatureAnimator from "../Feature/FeatureAnimator";

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

export default function Steps({ steps = DEFAULT_STEPS }: { steps?: Step[] }) {
  return (
    <>
      <FeatureAnimator>
        <section
          dir="rtl"
          aria-label="سه قدم تا دیده شدن"
          className="relative bg-white py-24 px-6 md:px-16 lg:px-24 overflow-hidden"
        >
          {/* تیتر و توضیح */}
          <div
            className="text-center max-w-3xl mx-auto mb-20 relative z-10"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-neutral-800 leading-tight feature-title">
              سه قدم تا دیده شدن
            </h1>
            <span className="block w-24 h-2 bg-gradient-to-r from-[#D32F2F] to-[#F77E2D] rounded-full mx-auto mt-4 feature-title-underline" />
            <p className="mt-6 text-neutral-500 text-base md:text-lg leading-relaxed">
              فقط سه مرحله ساده کافیه تا کسب‌وکارت روی نقشه ثبت بشه و مشتری‌ها
              راحت بتونن پیدات کنن، تماس بگیرن یا حتی آنلاین رزرو کنن.
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto z-10">
            {/* خط تایم‌لاین */}
            <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-1 -translate-x-1/2 bg-gray-200" />

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
                    className={`relative bg-white border border-gray-200 shadow-md rounded-3xl p-8 w-full md:w-[45%] text-center transition-all duration-300 hover:shadow-xl hover:scale-105 transform ${
                      index % 2 === 0 ? "md:mr-20" : "md:ml-20"
                    }`}
                  >
                    {/* دایره شماره */}
                    <div
                      className={`absolute top-1/2 -translate-y-1/2 hidden md:flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-lg z-20 ${
                        index % 2 === 0
                          ? "left-0 -translate-x-1/2"
                          : "right-0 translate-x-1/2"
                      }`}
                    >
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-[#F77E2D] to-[#D32F2F] text-white">
                        <span className="font-bold text-xl">{step.id}</span>
                      </div>
                    </div>

                    {/* آیکون در موبایل */}
                    <div className="md:hidden flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-[#F77E2D] to-[#D32F2F] text-white shadow-lg ring-4 ring-white mb-6 mx-auto">
                      {step.icon}
                    </div>

                    {/* محتوای کارت */}
                    <h2
                      id={`step-title-${step.id}`}
                      className="text-2xl font-bold text-neutral-800 mb-2"
                    >
                      {step.title}
                    </h2>
                    <p className="text-neutral-500 text-base leading-relaxed">
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
      </FeatureAnimator>
    </>
  );
}
