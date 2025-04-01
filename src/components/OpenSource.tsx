import React from "react";
import { openSourceContributions } from "@/constants/portfolio";
import { blurRevealAnimation } from "@/utils/animations";

const OpenSource = () => {
  return (
    <section className="py-8 w-full max-w-4xl mx-auto">
      <h2 className={blurRevealAnimation(14, "text-2xl font-bold mb-6")}>
        Open Source Contributions
      </h2>

      <div className="space-y-4">
        {openSourceContributions.map((contribution, index) => (
          <div
            key={contribution.id}
            className={blurRevealAnimation(15 + index, "flex items-start")}
          >
            <div className="mr-4 flex-shrink-0">
              {contribution.icon ? (
                <img
                  src={contribution.icon}
                  alt={contribution.name}
                  className="w-6 h-6 rounded-full"
                />
              ) : (
                <div
                  className={`w-6 h-6 rounded-full ${contribution.color} flex items-center justify-center text-white text-xs`}
                ></div>
              )}
            </div>
            <div>
              <a
                href={contribution.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:underline"
              >
                {contribution.name}
              </a>{" "}
              <span className="text-gray-400">
                {contribution.description} ({contribution.date})
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OpenSource;
