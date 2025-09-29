import { FaCalendarCheck, FaMapMarkerAlt, FaStore } from "react-icons/fa";
import FeatureAnimator from "./FeatureAnimator";

export default function Feature() {
  return (
    <FeatureAnimator>
      <section className="bg-white py-20 px-6 md:px-16 lg:px-24">
        {/* عنوان بخش */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-neutral-800 relative inline-block feature-title">
            چرا اینجا بهترین انتخابه؟
            <span className="block w-24 h-2 bg-gradient-to-r from-[#D32F2F] to-[#F77E2D] rounded-full mx-auto mt-4 feature-title-underline"></span>
          </h1>
        </div>

        {/* کارت‌ها */}
        <div className="grid gap-8 md:grid-cols-3 max-w-7xl mx-auto">
          {/* کارت ۱ */}
          <div
            className="relative bg-white border border-gray-200 shadow-md rounded-3xl p-8 hover:shadow-xl hover:border-[#D32F2F] transition-all duration-300 transform hover:-translate-y-1"
            data-aos="fade-up"
          >
            <div className="absolute -top-6 right-6 w-14 h-14 rounded-full bg-[#D32F2F] flex items-center justify-center text-white shadow-lg">
              <FaCalendarCheck className="text-2xl" />
            </div>
            <h2 className="mt-6 text-2xl font-bold text-neutral-800 mb-2">
              رزرو آنلاین
            </h2>
            <p className="text-neutral-500 leading-relaxed">
              اگه خدماتی مثل دکتر یا آرایشگر ارائه می‌دی، مشتری‌ها می‌تونن
              به‌صورت آنلاین برات وقت رزرو کنن.
            </p>
          </div>

          {/* کارت ۲ */}
          <div
            className="relative bg-white border border-gray-200 shadow-md rounded-3xl p-8 hover:shadow-xl hover:border-[#D32F2F] transition-all duration-300 transform hover:-translate-y-1"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <div className="absolute -top-6 right-6 w-14 h-14 rounded-full bg-[#D32F2F] flex items-center justify-center text-white shadow-lg">
              <FaMapMarkerAlt className="text-2xl" />
            </div>
            <h2 className="mt-6 text-2xl font-bold text-neutral-800 mb-2">
              روی نقشه پیدا شو
            </h2>
            <p className="text-neutral-500 leading-relaxed">
              با ثبت آدرست روی نقشه، مشتری‌ها خیلی راحت می‌تونن مکان کسب‌وکارت
              رو پیدا کنن.
            </p>
          </div>

          {/* کارت ۳ */}
          <div
            className="relative bg-white border border-gray-200 shadow-md rounded-3xl p-8 hover:shadow-xl hover:border-[#D32F2F] transition-all duration-300 transform hover:-translate-y-1"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="absolute -top-6 right-6 w-14 h-14 rounded-full bg-[#D32F2F] flex items-center justify-center text-white shadow-lg">
              <FaStore className="text-2xl" />
            </div>
            <h2 className="mt-6 text-2xl font-bold text-neutral-800 mb-2">
              مناسب همه کسب‌وکارها
            </h2>
            <p className="text-neutral-500 leading-relaxed">
              از سوپرمارکت محلی گرفته تا کلینیک تخصصی، هر نوع کسب‌وکاری می‌تونه
              اینجا ثبت بشه.
            </p>
          </div>
        </div>
      </section>
    </FeatureAnimator>
  );
}
