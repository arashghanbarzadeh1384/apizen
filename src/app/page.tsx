import AboutWrapper from "@/Components/About/AboutWrapper";
import Questions from "@/Components/F&Q/Questions";
import FeatureAos from "@/Components/Feature/FeatureAos";
import Steps from "@/Components/Steps/Steps";

export default function HomePage() {
  return (
    <>
      <AboutWrapper />
      <FeatureAos />
      <Steps />
      <Questions/>
    </>
  );
}
