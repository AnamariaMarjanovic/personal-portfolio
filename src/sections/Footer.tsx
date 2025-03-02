import ArrowUpRightIcon from "@/assets/icons/arrow-open.svg";

const links = [
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/anamaria-marjanovic/",
  },
  {
    title: "GitHub",
    href: "#",
  },
  {
    title: "Instagram",
    href: "#",
  },
  {
    title: "Facebook",
    href: "#",
  },
];

export const Footer = () => {
  return (
    <footer className="relative -z-10 overflow-x-clip">
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-green-500/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>
      <div className="container">
        <div className="border-t botder-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
          <div className="text-white/40">&copy; 2025. All rights reserved.</div>
          <nav className="flex flex-col md:flex-row items-center gap-8">
            {links.map((link) => (
              <a
                href="https://example.com"
                key={link.title}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5"
              >
                <span className="font-semibold">{link.title}</span>
                <ArrowUpRightIcon className="size-4" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
    
  );
};
