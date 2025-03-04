import { Header } from '@/sections/Header';
import { IntroSection } from '@/sections/Intro';
import { ExperiencesSection } from '@/sections/Experiences';
import { AboutSection } from '@/sections/About';
import { ContactSection } from '@/sections/Contact';
import { Footer } from '@/sections/Footer';

export default function Main() {
  return (
    <div className='relative z-[-1]'>
      <Header />
      <IntroSection id="intro"/>
      <ExperiencesSection id="experiences" />
      <AboutSection id="about" />
      <ContactSection id="contact" />
      <Footer />
    </div>
  );
}
