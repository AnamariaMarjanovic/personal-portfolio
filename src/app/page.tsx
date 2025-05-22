import { Header } from '@/sections/Header';
import { IntroSection } from '@/sections/Intro';
import { ProjectsSection } from '@/sections/Projects';
import { AboutSection } from '@/sections/About';
import { ContactSection } from '@/sections/Contact';
import { Footer } from '@/sections/Footer';
import { Analytics } from "@vercel/analytics/react"
import ExperienceList from '@/sections/ExperiencesList';

export default function Main() {
  return (
    <div className='relative z-[-1]'>
      <Analytics />
      <Header />
      <IntroSection id="intro"/>      
      <ProjectsSection id="projects" />
      <ExperienceList id="experience" />
      <AboutSection id="about" />
      <ContactSection id="contact" />
      <Footer />
    </div>
  );
}
