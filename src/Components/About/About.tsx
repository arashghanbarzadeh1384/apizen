import Button from "../Button/Button";

export default function About() {
  return (
    <div className="min-h-screen bg-white text-[#1A1A1A] px-8 md:px-24 py-16">
      <div className="text-center max-w-4xl mx-auto" data-aos="fade-up">
        <h1 className="text-[40px] md:text-[60px] font-extrabold text-[#D32F2F]">
          هر چیزی که لازم داری، همین‌جا پیدا کن
        </h1>
        <p className="text-[18px] md:text-[20px] mt-6 leading-relaxed text-[#1A1A1A]/80">
          کسب‌وکارهای محلی و خدمات متنوع روی نقشه برایت نمایش داده می‌شوند. فقط
          سرچ کن و با یک کلیک به اطلاعات و آدرس کامل دسترسی داشته باش.
        </p>

        <div className="mt-9">
          <Button text="جست و جو رو نقشه" />
        </div>
      </div>

      <div
        className="rounded-2xl shadow-2xl shadow-black border border-gray-200 p-10 mt-20 max-w-5xl mx-auto  "
        data-aos="fade-up"
        data-aos-delay="500"
      >
        <h2 className="text-[32px] md:text-[36px] font-bold text-[#1a1a1a] mb-6">
          درباره ما
        </h2>
        <p className="text-[16px] md:text-[18px] leading-10 ">
          ما یک پلتفرم آنلاین هستیم که کمک می‌کنیم هر نوع کسب‌وکاری—از کوچک‌ترین
          مغازه محلی تا بزرگ‌ترین کلینیک و شرکت—به راحتی روی نقشه ثبت بشه و
          مشتری‌ها سریع‌تر پیداش کنن. اینجا جاییه که هم مشتری‌ها می‌تونن خدمات و
          محصولات مورد نیازشون رو راحت پیدا کنن و هم صاحبان کسب‌وکار فرصت دارن
          خودشون رو بهتر معرفی کنن.
          <br />
          <br />
          هدف ما ساده‌ست:{" "}
          <span className="font-semibold text-[#D32F2F]">
            اتصال سریع‌تر و راحت‌تر مشتری‌ها به کسب‌وکارها.
          </span>
        </p>
      </div>
    </div>
  );
}
