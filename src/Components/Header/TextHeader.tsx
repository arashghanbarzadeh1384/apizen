import Button from "../Button/Button";
import AOSTextBlock from "./AOSTextBlock";

export default function TextHeader() {
  return (
    <>
      <div className="py-4 md:py-8 px-4 md:px-6 md:mt-10 bg-white/8 backdrop-blur-sm rounded-xl shadow-md max-w-2xl ">
        <AOSTextBlock />
      </div>
      <div className="mt-5">
        <Button text="همین حالا شروع کن" />
      </div>
    </>
  );
}
