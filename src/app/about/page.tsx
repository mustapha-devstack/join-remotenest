import HeroSection from "@/components/about/Hero"
import HowRemotenestWorks from "@/components/about/HowItWorks";
import AboutMission from "@/components/about/Mission";
import TeamSection from "@/components/about/Team";
import CTASection from "@/components/home/CTA";

export default function About() {
  return (
    <main>
        <HeroSection/>
        <AboutMission />
        <HowRemotenestWorks />
        <TeamSection />
        <CTASection/>
    </main>
    );
}