import Button from "../Button/Button";
import FeatureAnimator from "../Feature/FeatureAnimator";

export default function About() {
  return (
    <FeatureAnimator>
      <div className="min-h-screen bg-neutral-50 text-neutral-800 px-6 md:px-24 py-20">
        {/* بخش اصلی و جذاب‌کننده (Hero Section) */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-neutral-800 feature-title">
            هر چیزی که لازم داری، همین‌جا پیدا کن
          </h1>
          <span className="block w-24 h-2 bg-gradient-to-r from-[#D32F2F] to-[#F77E2D] rounded-full mx-auto mt-4 feature-title-underline"></span>
          <p className="text-base md:text-xl mt-6 leading-relaxed text-neutral-600">
            کسب‌وکارهای محلی و خدمات متنوع روی نقشه برایت نمایش داده می‌شوند.
            فقط سرچ کن و با یک کلیک به اطلاعات و آدرس کامل دسترسی داشته باش.
          </p>

          <div className="mt-9">
            <Button text="جست‌وجو روی نقشه" />
          </div>
        </div>

        {/* بخش "درباره ما" به شکل یک کارت مدرن */}
        <div className="rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12 mt-20 max-w-5xl mx-auto bg-white">
          <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-800 mb-4 feature-title">
            درباره ما
          </h2>
          <span className="block w-20 h-1 bg-gradient-to-r from-[#F77E2D] to-[#D32F2F] rounded-full mb-6 feature-title-underline"></span>

          <p className="text-sm md:text-lg leading-loose text-neutral-500">
            ما یک پلتفرم آنلاین هستیم که کمک می‌کنیم هر نوع کسب‌وکاری — از
            کوچک‌ترین مغازه محلی تا بزرگ‌ترین کلینیک و شرکت — به راحتی روی نقشه
            ثبت بشه و مشتری‌ها سریع‌تر پیداش کنن.
            <br />
            <br />
            اینجا جاییه که هم مشتری‌ها می‌تونن خدمات و محصولات مورد نیازشون رو
            راحت پیدا کنن و هم صاحبان کسب‌وکار فرصت دارن خودشون رو بهتر معرفی
            کنن.
            <br />
            <br />
            هدف ما ساده‌ست:{" "}
            <span className="font-extrabold text-[#D32F2F] feature-title-underline">
              اتصال سریع‌تر و راحت‌تر مشتری‌ها به کسب‌وکارها.
            </span>
          </p>
        </div>
      </div>
    </FeatureAnimator>
  );
}