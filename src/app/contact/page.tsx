import ContactFormSection from "@/components/contact/ContactForm";
import ContactLinksSection from "@/components/contact/ContactLink";
import HeroSection from "@/components/contact/Hero";
import CTASection from "@/components/home/CTA";

export default function About() {
  return (
    <main>
        <HeroSection/>
        <ContactFormSection/>
        <ContactLinksSection/>
        <CTASection/>
    </main>
  );
}