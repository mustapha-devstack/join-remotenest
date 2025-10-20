import AboutSection from "@/components/home/About";
import CountdownSection from "@/components/home/Counter";
import CTASection from "@/components/home/CTA";
import FeaturesSection from "@/components/home/Features";
import HeroSection from "@/components/home/Hero";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <CountdownSection />
      <AboutSection />
      <FeaturesSection />
      <CTASection />
    </main>
  );
}
