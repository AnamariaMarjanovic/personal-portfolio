"use client";

import memojiImage from "../assets/images/memoji-intro.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import IconStar from "@/assets/icons/star.svg";
import { IntroGraphic } from "@/components/IntroGraphic";
import IconSparkle from "@/assets/icons/sparkle.svg";

interface SectionProps {
  id?: string;
}

export const IntroSection = ({ id }: SectionProps) => {
  const openProjects = () => {
    const targetSection = document.getElementById("experiences");
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const openContact = () => {
    const targetSection = document.getElementById("contact");
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id={id} className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip min-h-screen">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{
            backgroundImage: `url(${grainImage.src})`,
          }}
        ></div>
        <div className="size-[620px] intro-circle"></div>
        <div className="size-[820px] intro-circle"></div>
        <div className="size-[1020px] intro-circle"></div>
        <div className="size-[1220px] intro-circle"></div>
        <IntroGraphic
          size={430}
          rotation={-14}
          shouldSpin
          spinDuration="30s"
          shouldSpinEach
          spinEachDuration="3s"
        >
          <IconSparkle className="size-8 text-green-500/20" />
        </IntroGraphic>
        <IntroGraphic
          size={440}
          rotation={79}
          shouldSpin
          spinDuration="32s"
          shouldSpinEach
          spinEachDuration="3s"
        >
          <IconSparkle className="size-5 text-green-500/20" />
        </IntroGraphic>
        <IntroGraphic size={520} rotation={-41} shouldSpin spinDuration="34s">
          <div className="size-2 bg-green-500/20 rounded-full" />
        </IntroGraphic>
        <IntroGraphic
          size={530}
          rotation={178}
          shouldSpin
          spinDuration="36s"
          shouldSpinEach
          spinEachDuration="3s"
        >
          <IconSparkle className="size-10 text-green-500/20" />
        </IntroGraphic>
        <IntroGraphic
          size={550}
          rotation={20}
          shouldSpin
          spinDuration="38s"
          shouldSpinEach
          spinEachDuration="6s"
        >
          <IconStar className="size-12 text-green-500" />
        </IntroGraphic>
        <IntroGraphic
          size={590}
          rotation={98}
          shouldSpin
          spinDuration="40s"
          shouldSpinEach
          spinEachDuration="6s"
        >
          <IconStar className="size-8 text-green-500" />
        </IntroGraphic>
        <IntroGraphic size={650} rotation={-5} shouldSpin spinDuration="42s">
          <div className="size-2 bg-green-500/20 rounded-full" />
        </IntroGraphic>
        <IntroGraphic
          size={710}
          rotation={144}
          shouldSpin
          spinDuration="44s"
          shouldSpinEach
          spinEachDuration="3s"
        >
          <IconSparkle className="size-14 text-green-500/20" />
        </IntroGraphic>
        <IntroGraphic size={720} rotation={85} shouldSpin spinDuration="46s">
          <div className="size-3 bg-green-500/20 rounded-full" />
        </IntroGraphic>
        <IntroGraphic
          size={800}
          rotation={-72}
          shouldSpin
          spinDuration="48s"
          shouldSpinEach
          spinEachDuration="6s"
        >
          <IconStar className="size-28 text-green-500" />
        </IntroGraphic>
      </div>
      <div className="container relative z-1">
        <div className="flex flex-col items-center">
          <Image
            src={memojiImage}
            className="size-[140px]"
            alt="Memoji of me sitting at a computer"
          />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full relative">
              <div className="bg-green-500 absolute inset-0 rounded-full animate-ping-large"></div>
            </div>
            <div className="text-sm font-medium">Open to New Oportunities</div>
          </div>
        </div>
        <div className="max-w-xxl mx-auto text-center">
          <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
            software engineer, front end and app developer.
          </h1>
          <p className="mt-4 text-center max-w-xl text-white/60 md:text-lg mx-auto">
            Hi, I&apos;m Anamaria. I specialize in transforming creative concepts into sleek,
            functional, and user-friendly digital experiences.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          {/* <button onClick={openProjects} className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl cursor-pointer">
            <span className="font-semibold">View My Portfolio</span>
            <ArrowDown className="size-4" />
          </button> */}
          <button onClick={openContact} className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl cursor-pointer">
            <span>👋</span>
            <span className="font-semibold">Get in Touch</span>
          </button>
        </div>
      </div>
    </section>
  );
};
