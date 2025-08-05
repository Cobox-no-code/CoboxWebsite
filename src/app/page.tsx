import AiYodhaSection from "@/components/AiYodhaSection";
import CoboxText from "@/components/CoboxText";
import FeatureSection from "@/components/FeatureSection";
import Hero from "@/components/Hero";
import MarqueeFooter from "@/components/Marquee";
import NoCodeStudio from "@/components/NoCodeStudio";
import PartnershipSection from "@/components/Partnership";
import Stats from "@/components/Stats";
import Unleash from "@/components/Unleash";
import VideoSection from "@/components/VideoSection";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Hero/>
      <MarqueeFooter/>
      <VideoSection/>
      <FeatureSection/>
      <Stats/>
      <AiYodhaSection/>
      <Unleash/>
      <NoCodeStudio/>
      <PartnershipSection/>
      <CoboxText/>
    </div>
  );
}
