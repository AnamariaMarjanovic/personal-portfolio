import { Header } from '@/sections/Header';
import { IntroSection } from '@/sections/Intro';
import { ExperiencesSection } from '@/sections/Experiences';
import { AboutSection } from '@/sections/About';
import { ContactSection } from '@/sections/Contact';
import { Footer } from '@/sections/Footer';
import { Analytics } from "@vercel/analytics/react"

export default function Main() {
  return (
    <div className='relative z-[-1]'>
      <Analytics />
      <Header />
      <IntroSection id="intro"/>
      <ExperiencesSection id="experiences" />
      <AboutSection id="about" />
      <ContactSection id="contact" />
      <Footer />
    </div>
  );
}
