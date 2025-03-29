"use client";

import { SegmentHeader } from "@/components/SegmentHeader";
import React from "react";
import { motion } from "framer-motion";

interface Experience {
  date: string;
  title: string;
  company: string;
  description: string;
  skills: string[];
}

interface SectionProps {
  id?: string;
}

const experiences = [
  {
    date: "OCT 2022 — PRESENT",
    title: "Frontend Developer",
    company: "Infordata Sistemi srl, Trieste",
    description:
      "Developed PWA and native mobile apps using Angular, React, Capacitor, and Ionic. Built self-service kiosk applications and environmental monitoring tools for EU projects. Integrated RESTful APIs, implemented i18n, and optimized UI with Bootstrap and Material Design. Collaborated with product teams on analytics and risk management.",
    skills: [
      "Angular",
      "React",
      "Capacitor",
      "Ionic",
      "Bootstrap",
      "Material Design",
      "RESTful APIs",
      "i18n",
    ],
  },
  {
    date: "APR 2022 — JUL 2022",
    title: "Frontend Developer",
    company: "GDi GROUP LCC, Rijeka",
    description:
      "Upgraded application modules for fisheries software using ASP.NET Core and C#. Developed complex features, implemented CRUD functionalities, and debugged software issues. Attended an Angular+REST workshop, building a project with database connectivity.",
    skills: ["ASP.NET Core", "C#", "Angular", "REST APIs", "CRUD", "Debugging"],
  },
];

const ExperienceCard: React.FC<Experience> = ({
  date,
  title,
  company,
  description,
  skills,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // Start off-screen
      whileInView={{ opacity: 1, y: 0 }} // Animate when visible
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{
        scale: 1.02,
        boxShadow: "0px 4px 10px rgba(255, 255, 255, 0.1)",
      }} // Hover animation
      whileTap={{ scale: 0.98 }} // Click (tap) animation
      className="border border-gray-700 p-5 rounded-lg bg-gray-900 text-white mb-10 shadow-lg"
    >
      <p className="text-gray-400 text-sm">{date}</p>
      <h3 className="text-xl font-semibold">
        {title} · {company}
      </h3>
      <p className="mt-4 text-white/60 md:text-lg mx-auto">{description}</p>
      <div className="flex flex-wrap gap-2 mt-3">
        {skills.map((skill, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 * index, duration: 0.3 }}
            className="bg-green-600 text-white text-sm font-semibold px-2 py-1 rounded"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

const ExperienceList = ({ id }: SectionProps) => {
  return (
    <section id={id} className="py-20 lg:py-28 min-h-screen">
      <SegmentHeader
        segment="Experience"
        title="Review my Experience"
        description="Explore my professional journey, and the skills I've developed along the way."
      />
      <div className="container mt-20">
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} {...exp} />
        ))}
      </div>
    </section>
  );
};

export default ExperienceList;
