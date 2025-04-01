import React from "react";
import { personalInfo } from "@/constants/portfolio";
import { blurRevealAnimation } from "@/utils/animations";

const ListRenderer = ({ items, animationDelay }) => {
  if (!items || items.length === 0) return null;

  return (
    <p className={blurRevealAnimation(animationDelay, "flex items-center text-lg md:text-base")}>
      <span className="text-xl mr-1">•</span>
      <span className="flex flex-wrap">
        {items.map((item, index) => (
          <React.Fragment key={index}>
            {item.link ? (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:underline mx-0.5"
              >
                {item.text}
              </a>
            ) : (
              <span className="text-gray-400 mx-0.5">{item.text}</span>
            )}
          </React.Fragment>
        ))}
      </span>
    </p>
  );
};

const Hero = () => {
  return (
    <section className="py-8 w-full max-w-4xl mx-auto">
      <h1 className={blurRevealAnimation(2, "text-2xl font-bold mb-6")}>Hi, I'm {personalInfo.name}</h1>

      <div className="space-y-1.5">
        <p className={blurRevealAnimation(3, "flex items-center text-base text-gray-400")}>
          <span className="text-xl mr-1">•</span>
          {personalInfo.title}
        </p>

        <ListRenderer items={personalInfo.education} animationDelay={4} />
        <ListRenderer items={personalInfo.description} animationDelay={5} />
        <ListRenderer items={personalInfo.workHistory} animationDelay={6} />
        <ListRenderer items={personalInfo.content} animationDelay={7} />

        <p className={blurRevealAnimation(7, "flex items-center text-base text-gray-400")}>
          <span className="text-xl mr-1">•</span>
          {personalInfo.callToAction}
        </p>
      </div>
    </section>
  );
};

export default Hero;
