"use client";
import { SegmentHeader } from "@/components/SegmentHeader";
import { Card } from "@/components/Card";
import bookCover from "@/assets/images/book-cover.jpg";
import Image from "next/image";
import JavaScriptIcon from "@/assets/icons/javascript.svg";
import TypeScriptIcon from "@/assets/icons/typescript.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import AngularIcon from "@/assets/icons/angular.svg";
import GitIcon from "@/assets/icons/github.svg";
import CapacitorIcon from "@/assets/icons/capacitor.svg";
import IonicIcon from "@/assets/icons/ionic.svg";
import TailwindIcon from "@/assets/icons/tailwind.svg";
import BootstrapIcon from "@/assets/icons/bootstrap.svg";
import RestFullApiIcon from "@/assets/icons/restful-api.svg";
import JiraIcon from "@/assets/icons/jira.svg";
import BitbucketIcon from "@/assets/icons/bitbucket.svg";
import mapImage from "@/assets/images/map.png";
import locationIcon from "@/assets/images/current-location.png";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import { motion } from "framer-motion";
import { use, useRef } from "react";

interface SectionProps {
  id?: string;
}

const toolboxItems = [
  {
    title: "JavaScript",
    iconType: JavaScriptIcon,
  },
  {
    title: "TypeScript",
    iconType: TypeScriptIcon,
  },
  {
    title: "HTML5",
    iconType: HTMLIcon,
  },
  {
    title: "CSS3",
    iconType: CssIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Angular",
    iconType: AngularIcon,
  },
  {
    title: "Github",
    iconType: GitIcon,
  },
  {
    title: "Capacitor",
    iconType: CapacitorIcon,
  },
  {
    title: "Ionic",
    iconType: IonicIcon,
  },
  {
    title: "Tailwind",
    iconType: TailwindIcon,
  },
  {
    title: "Bootstrap",
    iconType: BootstrapIcon,
  },
  {
    title: "RESTful APIs",
    iconType: RestFullApiIcon,
  },
  {
    title: "Jira",
    iconType: JiraIcon,
  },
  {
    title: "Bitbucket",
    iconType: BitbucketIcon,
  },
];

const hobbies = [
  {
    title: "Reading",
    emoji: "📚",
    left: "5%",
    top: "5%",
  },
  {
    title: "Traveling",
    emoji: "✈️",
    left: "60%",
    top: "5%",
  },
  {
    title: "Running",
    emoji: "🏃‍♂️",
    left: "20%",
    top: "40%",
  },
  {
    title: "Hiking",
    emoji: "🥾",
    left: "60%",
    top: "40%",
  },
  {
    title: "Fitness",
    emoji: "💪",
    left: "5%",
    top: "70%",
  },
  {
    title: "Cooking",
    emoji: "👨‍🍳",
    left: "60%",
    top: "70%",
  },
];

export const AboutSection = ({ id }: SectionProps) => {
  const boundriesRef = useRef(null);
  return (
    <section id={id} className="py-20 lg:py-28 min-h-screen">
      <div className="container">
        <SegmentHeader
          segment="About Me"
          title="Step Into My World"
          description="Discover who I am, the tools I use, and what fuels my creativity."
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title="My Reads"
                description="A collection of thought-provoking reads shaping my mindset."
              />
              <div className="w-40 mx-auto mt-2 md:mt-0">
                <Image src={bookCover} alt="Book Cover" />
              </div>
            </Card>
            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader
                title="My Tech Stack"
                description="Explore the technologies and tools I use to craft exceptional
                digital experiences."
                className=""
              />
              <ToolboxItems items={toolboxItems} className="" itemsWrapperClassName="animate-move-left [animation-duration:30s]" />
              <ToolboxItems
                items={toolboxItems}
                className="mt-6"
                itemsWrapperClassName="animate-move-right [animation-duration:15s]"
              />
            </Card>
          </div>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Life Beyond Code"
                description="There’s more to me than just coding! Here are some of my interests passions"
                className="px-6 pt-6"
              />
              <div className="relative flex-1" ref={boundriesRef}>
                {hobbies.map((item) => (
                  <motion.div
                    key={item.title}
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-green-500 to-teal-600 rounded-full py-1.5 absolute"
                    style={{ left: item.left, top: item.top }} drag dragConstraints={boundriesRef}
                  >
                    <span className="font-medium text-gray-950">
                      {item.emoji}
                    </span>
                    <span>{item.title}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image
                src={mapImage}
                alt="Map"
                className="h-full w-full object-cover"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-10 rounded-full after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/10">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-500 to-teal-600 -z-20 animate-ping [animation-duration:2s]"></div>
                <Image src={locationIcon} alt="Smile Emoji" className="size-10" />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
