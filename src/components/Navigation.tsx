
import React from "react";
import { navigationLinks, socialLinks } from "@/constants/portfolio";
import { cn } from "@/lib/utils";
import * as LucideIcons from "lucide-react";
import { blurRevealAnimation } from "@/utils/animations";

const Navigation = () => {
  return ( 
    <nav className="flex flex-col md:flex-row justify-between py-4 w-full max-w-4xl mx-auto items-start md:items-center ">
      <div className={blurRevealAnimation(0, "flex space-x-4")}>
        {navigationLinks.map((item, index) => {
          const Icon = LucideIcons[
            item.icon as keyof typeof LucideIcons
          ] as React.FC<React.SVGProps<SVGSVGElement>>;

          return (
            <a
              key={index}
              href={item.link}
              className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-white bg-zinc-800 hover:bg-zinc-700 transition-colors"
            >
              {Icon && <Icon className="h-4 w-4 mr-2 text-white" />}
              {item.name}
            </a>
          );
        })}
      </div>

      <div className={blurRevealAnimation(1, "flex space-x-3 mt-4 md:mt-0")}>
        {socialLinks.map((item, index) => {
          const Icon = LucideIcons[
            item.icon as keyof typeof LucideIcons
          ] as React.FC<React.SVGProps<SVGSVGElement>>;

          return (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-md bg-zinc-800 hover:bg-zinc-700 transition-colors"
              aria-label={item.name}
            >
              {Icon && <Icon className="h-5 w-5" />}
            </a>
          );
        })}
      </div>
    </nav>
  );
};

export default Navigation;
