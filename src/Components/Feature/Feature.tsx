import { FaCalendarCheck, FaMapMarkerAlt, FaStore } from "react-icons/fa";

export default function Feature() {
  return (
    <section className="bg-white py-20 px-6 md:px-16 lg:px-24">
      <div className="text-center mb-16" data-aos="fade-up">
        <h1 className="text-[28px] md:text-[40px] font-extrabold text-[#D32F2F] relative inline-block">
          چرا اینجا بهترین انتخابه؟
          <span className="block w-20 h-1 bg-[#F77E2D] rounded-full mx-auto mt-3"></span>
        </h1>
      </div>

      <div className="grid gap-10 md:grid-cols-3 max-w-6xl mx-auto">
        <div
          className="bg-white border border-gray-100 shadow-lg rounded-2xl p-8 hover:shadow-2xl hover:border-[#F77E2D]/50 transition-all duration-300 group"
          data-aos="zoom-in"
          data-aos-delay="500"
        >
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#F77E2D] text-white shadow-md mb-6 group-hover:scale-110 transition">
            <FaCalendarCheck className="text-2xl" />
          </div>
          <h2 className="text-xl font-bold text-[#1A1A1A] mb-3">رزرو آنلاین</h2>
          <p className="text-[#1A1A1A]/70 leading-relaxed">
            اگه خدماتی مثل دکتر یا آرایشگر ارائه می‌دی، مشتری‌ها می‌تونن به‌صورت
            آنلاین برات وقت رزرو کنن.
          </p>
        </div>

        <div
          className="bg-white border border-gray-100 shadow-lg rounded-2xl p-8 hover:shadow-2xl hover:border-[#F77E2D]/50 transition-all duration-300 group"
          data-aos="zoom-in"
          data-aos-delay="500"
        >
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#F77E2D] text-white shadow-md mb-6 group-hover:scale-110 transition">
            <FaMapMarkerAlt className="text-2xl" />
          </div>
          <h2 className="text-xl font-bold text-[#1A1A1A] mb-3">
            روی نقشه پیدا شو
          </h2>
          <p className="text-[#1A1A1A]/70 leading-relaxed">
            با ثبت آدرست روی نقشه، مشتری‌ها خیلی راحت می‌تونن مکان کسب‌وکارت رو
            پیدا کنن.
          </p>
        </div>

        <div
          className="bg-white border border-gray-100 shadow-lg rounded-2xl p-8 hover:shadow-2xl hover:border-[#F77E2D]/50 transition-all duration-300 group"
          data-aos="zoom-in"
          data-aos-delay="500"
        >
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#F77E2D] text-white shadow-md mb-6 group-hover:scale-110 transition">
            <FaStore className="text-2xl" />
          </div>
          <h2 className="text-xl font-bold text-[#1A1A1A] mb-3">
            مناسب همه کسب‌وکارها
          </h2>
          <p className="text-[#1A1A1A]/70 leading-relaxed">
            از سوپرمارکت محلی گرفته تا کلینیک تخصصی، هر نوع کسب‌وکاری می‌تونه
            اینجا ثبت بشه.
          </p>
        </div>
      </div>
    </section>
  );
}
