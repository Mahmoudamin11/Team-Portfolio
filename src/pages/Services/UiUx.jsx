import TextSsection from "@/components/commonInServices/TextSsection";
import WhyWe from "@/components/commonInServices/WhyWe";
import FaqSection from "@/components/Services/FaqSection";
import HeroSection from "@/components/Services/HeroSection";
import { FeaturesUiUx } from "@/data/features/FeaturesUiUx";
import uibanner from "/assets/servicesImgs/uibanner.webp";
function UiUx() {

  const prefix = { ar: "الحدود؟", en: "level?" };

  const faqList = [
    {
      question: "faqQuestionUiUx1",
      answer: "faqAnswerUiUx1",
    },
    {
      question: "faqQuestionUiUx2",
      answer: "faqAnswerUiUx2",
    },
    {
      question: "faqQuestionUiUx3",
      answer: "faqAnswerUiUx3",
    },
    {
      question: "faqQuestionUiUx4",
      answer: "faqAnswerUiUx4",
    },
    {
      question: "faqQuestionUiUx5",
      answer: "faqAnswerUiUx5",
    },
    {
      question: "faqQuestionUiUx6",
      answer: "faqAnswerUiUx6",
    },
  ];
  return (
    <section className="space-y-2">
      <HeroSection src={uibanner} title="servTitle1" desc="servDesc1" />

      <div className="containerD flex flex-col gap-28 pt-12">
        <WhyWe features={FeaturesUiUx} />

        <TextSsection
          header={"uiuxTextSectionTitle"}
          p1={"uiuxTextSectionText1"}
          p2={"uiuxTextSectionText2"}
          p3={"uiuxTextSectionText3"}
          prefix={prefix}
        />
        <FaqSection faqList={faqList} />
      </div>
    </section>
  );
}

export default UiUx;