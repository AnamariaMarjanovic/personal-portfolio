import Image from "next/image";
import CheckIcon from "@/assets/icons/check-circle.svg";
import ArrowOpen from "@/assets/icons/arrow-open.svg";
import remediesProject from "@/assets/projects/remedies.png";
import portfolioProject from "@/assets/projects/portfolio.png";
import { SegmentHeader } from "@/components/SegmentHeader";
import { Card } from "@/components/Card";

interface SectionProps {
  id?: string;
}

interface Experience {
  company: string;
  year: string;
  title: string;
  results: { title: string }[];
  link: string;
  image: any;
}

const portfolioExperiences: Experience[] = [
  {
    company: 'My Work',
    year: '2025',
    title: 'Portfolio',
    results: [
      { title: 'Personal portfolio website' },
      { title: 'Next.js and Tailwind CSS' },
      { title: 'Framer Motion animations' },
      { title: 'Responsive design' }
    ],
    link: 'https://anamaria.dev',
    image: portfolioProject
  },
  {
    company: 'Infordata Sistemi srl',
    year: '2023',
    title: 'Remedies Monitoring Apps',
    results: [
      { title: 'Beach litter monitoring apps' },
      { title: 'Mobile and web app development' },
      { title: 'Real-time data visualization' },
      { title: 'Data analysis and reporting' }
    ],
    link: 'https://remedies.way.to.it',
    image: remediesProject
  }
];

export const ExperiencesSection = ({ id }: SectionProps) => {
  return (
    <section id={id} className="pb-16 lg:py-24 min-h-screen">
      <div className="container">
        <SegmentHeader
          title="Featured Projects"
          segment="Real-world Results"
          description="See how I transformed concepts into engaging digital experiences."
        />
        <div className="flex flex-col mt-10 gap-20 md:mt-20">
          {portfolioExperiences.length > 0 ? (
            portfolioExperiences.map((experience, index) => (
              <Card
                key={experience.title}
                className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
                style={{
                  top: `calc(64px + ${index * 40}px)`,
                }}
              >
                <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                  <div className="lg:pb-16">
                    <div className="bg-gradient-to-r from-green-500 to-teal-600 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                      <span>{experience.company}</span>
                      <span>&bull;</span>
                      <span>{experience.year}</span>
                    </div>
                    <h3 className="font-serif text-2xl mt-2 md:text-4xl md:mt-5">
                      {experience.title}
                    </h3>
                    <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                    <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                      {experience.results.map((result) => (
                        <li
                          key={result.title}
                          className="flex gap-2 text-sm text-white/50 md:text-base"
                        >
                          <CheckIcon className="size-5 md:size-6" />
                          <span>{result.title}</span>
                        </li>
                      ))}
                    </ul>
                    <a href={experience.link}>
                      <button className="bg-white text-gray-950 h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 md:w-auto px-6">
                        <ArrowOpen className="size-4" />
                        <span>Visit Live Site</span>
                      </button>
                    </a>
                  </div>
                  <div className="relative">
                    <Image
                      src={experience.image}
                      alt={experience.title}
                      className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                    />
                  </div>
                </div>
              </Card>
            ))
          ) : (
            <div className="text-center text-xl font-semibold text-gray-500">
              In progress...
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
